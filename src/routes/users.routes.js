import { Router } from "express";
import { Usuario } from "../models/Usuario.js";
import { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from "../controller/users.controller.js";

const router = Router();

router.get("/usuarios", getAllUsuarios);
router.get("/usuarios/:id", getUsuarioById);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:id", deleteUsuario);

export default router;
