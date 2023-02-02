function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // add server-side validation
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trime() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
  } else if (req.method === "GET") {
  }
}

export default handler;
