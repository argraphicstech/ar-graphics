export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "Node.js API is working"
  });
}
