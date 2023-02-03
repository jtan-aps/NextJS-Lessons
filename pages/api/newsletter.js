//mongodb dbUser, qudLfQLanl9VGKrQ
// mongodb+srv://dbUser:qudLfQLanl9VGKrQ@cluster0.xbdsnbp.mongodb.net/?retryWrites=true&w=majority

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://dbUser:qudLfQLanl9VGKrQ@cluster0.xbdsnbp.mongodb.net/?retryWrites=true&w=majority"
    )
    
    const db = client.db();

    await db.collection('emails').insertOne({email: userEmail});

    client.close()

    console.log(userEmail);
    res.status(201).json({ message: "Email successfully added." });
  }
}

export default handler;
