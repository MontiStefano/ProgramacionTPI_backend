import { Router } from "express";
import { Servicio } from "../models/Servicios.js";
import { getAllServicios, getServicioById, createServicio, updateServicio, deleteServicio } from "../controller/servicios.controller.js";
import { verifyToken, verifyRole } from "../Middleware/VerifyToken.js";
import { ROLES } from "../constants/roles.js";

const router = Router();

// publico
router.get("/servicios", getAllServicios);
router.get("/servicios/:id", getServicioById);

// privado - solo para admin o superadmin
router.post("/servicios", verifyRole([ROLES.ADMIN, ROLES.SUPERADMIN]), createServicio);
router.put("/servicios/:id", verifyRole([ROLES.ADMIN, ROLES.SUPERADMIN]), updateServicio);
router.delete("/servicios/:id", verifyRole([ROLES.ADMIN, ROLES.SUPERADMIN]), deleteServicio);

export default router;