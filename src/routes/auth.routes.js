import {Router} from 'express'
import {login, register, logout, profile} from '../controllers/auth.controller.js'
import {authRequired} from "../middlewares/validateToken.js"

const router = Router()
router.post('/register', register) // que lo que va ejecutar cuando sean llamadas
router.post('/login', login);
router.post('/logout', logout)
router.get("/profile", authRequired, profile); //son funciones que se van a ejecutar antes q llegue a una ruta// ruta protegida(validar token)

export default router