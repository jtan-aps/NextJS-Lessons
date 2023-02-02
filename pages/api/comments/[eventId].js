function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // add server-side validation
    const { email, name, text } = req.body;
    if (
      !email.includes('@') ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(201).json({ message: "Comment added", comment: newComment });
  } else if (req.method === "GET") {
    const dummyList = [
      { id: "C1", name: "Gabby", text: "First comment" },
      { id: "C2", name: "Joe", text: "second comment" },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
