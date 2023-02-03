import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://dbUser:qudLfQLanl9VGKrQ@cluster0.xbdsnbp.mongodb.net/?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    // add server-side validation
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    newComment.id = result.insertedId;

    console.log(result);

    res.status(201).json({ message: "Comment added", comment: newComment });
  } else if (req.method === "GET") {
    const db = client.db();

    const results = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: results });
  }

  client.close();
}

export default handler;
