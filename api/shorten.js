// api/shorten.js
export default function handler(req, res) {
  const { link } = req.query;

  res.status(200).json({
    mensaje: "La función en Vercel sí funciona 🚀",
    recibido: link || "no llegó ningún link"
  });
}
