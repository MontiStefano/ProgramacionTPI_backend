import { Router } from "express";
import { Servicio } from "../models/Servicios.js";
import { getAllServicios, getServicioById, createServicio, updateServicio, deleteServicio } from "../controller/servicios.controller.js";

const router = Router();
router.get("/servicios", getAllServicios);
router.get("/servicios/:id", getServicioById);
router.post("/servicios", createServicio);
router.put("/servicios/:id", updateServicio);
router.delete("/servicios/:id", deleteServicio);

export default router;