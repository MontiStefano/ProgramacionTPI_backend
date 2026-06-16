import { Router } from "express";
import { Usuario } from "../models/Usuario.js";
import { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario, loginUser, registerUser, getMe, updateMe } from "../controller/users.controller.js";
import { verifyToken, verifyRole } from "../Middleware/VerifyToken.js";
import { ROLES } from "../constants/roles.js";

const router = Router();


// publico
router.post("/usuarios/login", loginUser);
router.post("/usuarios/register", registerUser)

// privado - solo para logeados
router.get("/usuarios/me", verifyToken, getMe);
router.put("/usuarios/me", verifyToken, updateMe);

// privado - solo para superadmin
router.get("/usuarios", verifyRole([ROLES.SUPERADMIN]), getAllUsuarios);
router.get("/usuarios/:email", verifyRole([ROLES.SUPERADMIN]), getUsuarioById);
router.post("/usuarios", verifyRole([ROLES.SUPERADMIN]), createUsuario);
router.put("/usuarios/:email", verifyRole([ROLES.SUPERADMIN]), updateUsuario);
router.delete("/usuarios/:email", verifyRole([ROLES.SUPERADMIN]), deleteUsuario);

export default router;