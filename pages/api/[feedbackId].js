import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  // Dynamic routes work with all request methods (GET, POST, DELETE, etc.)
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
