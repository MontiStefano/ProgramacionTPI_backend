import { Router } from "express";
import { Usuario } from "../models/Usuario.js";
import { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario, loginUser } from "../controller/users.controller.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
const router = Router();

router.get("/usuarios", verifyToken, getAllUsuarios);
router.get("/usuarios/:email", verifyToken, getUsuarioById);


// EndPoint de Login
router.post("/usuarios/login/:email", loginUser);

router.post("/usuarios", verifyToken, createUsuario);
router.put("/usuarios/:email", verifyToken, updateUsuario);
router.delete("/usuarios/:email", verifyToken, deleteUsuario);

export default router;
