import { Router } from "express";
import { Usuario } from "../models/Usuario.js";
import { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from "../controller/users.controller.js";

const router = Router();

router.get("/usuarios", getAllUsuarios);
router.get("/usuarios/:email", getUsuarioById);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:email", updateUsuario);
router.delete("/usuarios/:email", deleteUsuario);

export default router;
