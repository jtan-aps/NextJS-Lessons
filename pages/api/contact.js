import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    // Store in a db.
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://dbUser:qudLfQLanl9VGKrQ@cluster0.xbdsnbp.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db("my-site");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed" });
    }

    console.log(newMessage);

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message", message: newMessage });
  }
}

export default handler;
