import { Router } from "express";
import { Permiso } from "../models/Permisos.js";
import { getAllPermisos, getPermisoById, createPermiso, updatePermiso, deletePermiso } from "../controller/permisos.controller.js";
import { verifyToken } from "../Middleware/VerifyToken.js";

const router = Router();

router.get("/permisos", verifyToken, getAllPermisos);
router.get("/permisos/:id", verifyToken, getPermisoById);
router.post("/permisos", verifyToken, createPermiso);
router.put("/permisos/:id", verifyToken, updatePermiso);
router.delete("/permisos/:id", verifyToken, deletePermiso);


export default router;