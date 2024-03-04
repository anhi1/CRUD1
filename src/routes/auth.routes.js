import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();
router.post("/register", validateSchema(registerSchema), register); // que lo que va ejecutar cuando sean llamadas
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile); //son funciones que se van a ejecutar antes q llegue a una ruta// ruta protegida(validar token)

export default router;
