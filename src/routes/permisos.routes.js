import { Router } from "express";
import { Permiso } from "../models/Permisos.js";
import { getAllPermisos, getPermisoById, createPermiso, updatePermiso, deletePermiso } from "../controller/permisos.controller.js";

const router = Router();

router.get("/permisos", getAllPermisos);
router.get("/permisos/:id", getPermisoById);
router.post("/permisos", createPermiso);
router.put("/permisos/:id", updatePermiso);
router.delete("/permisos/:id", deletePermiso);


export default router;