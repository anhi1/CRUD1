//son funciones que se van a ejecutar antes q llegue a una ruta
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {// para que sea un middleware debe tener estos parametro / me da info de la peticions/ me da métodos para enviar una respuesta/
  const { token } = req.cookies; //bilioteca que conviert las cookies // npm i cookie-parser
  if (!token)
    return res.status(401).json({ message: "no token, authorization" });
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token" });
    req.user = user; // almacenar información del usuario autenticado durante el procesamiento de una solicitud HTTP.
    next();
  });
};

// {token} del cookie ya se q va ha venir un token
// pero si hay un token voy a verificarlo, tengo q saber si un token que genere
//TOKEN_SECRET es una única clave secreta utilizada para firmar y verificar los tokens JWT en una aplicación o sistema
//método verify de la biblioteca jsonwebtoken
// Si la verificación del token es exitosa y no hay errores, el contenido decodificado del token se asigna al objeto user, que luego se adjunta al objeto de solicitud req. Esto permite que la información del usuario autenticado esté disponible en las rutas posteriores de la aplicación.