import { Router } from "express";
import { Servicio } from "../models/Servicios.js";
import { getAllServicios, getServicioById, createServicio, updateServicio, deleteServicio } from "../controller/servicios.controller.js";
import { verifyToken } from "../Middleware/VerifyToken.js";

const router = Router();
router.get("/servicios", verifyToken, getAllServicios);
router.get("/servicios/:id", verifyToken, getServicioById);
router.post("/servicios", verifyToken, createServicio);
router.put("/servicios/:id", verifyToken, updateServicio);
router.delete("/servicios/:id", verifyToken, deleteServicio);

export default router;