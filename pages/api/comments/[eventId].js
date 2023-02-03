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
    const dummyList = [
      { id: "C1", name: "Gabby", text: "First comment" },
      { id: "C2", name: "Joe", text: "second comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }

  client.close();
}

export default handler;
