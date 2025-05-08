// pages/api/contacto.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).end();
    }
  
    const { nombre, email, mensaje } = req.body;
  
    // Aquí podrías conectar con un CRM, webhook, base de datos, etc.
    // Por ahora solo hacemos log y devolvemos 200
  
    console.log("Mensaje recibido:", { nombre, email, mensaje });
  
    return res.status(200).json({ ok: true });
  }
  