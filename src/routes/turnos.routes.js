import { Router } from "express";
import { Turnos } from "../models/Turnos.js";
import { getAllTurnos, getTurnoById, createTurno, updateTurno, deleteTurno } from "../controller/turnos.controller.js";

const router = Router();

router.get("/turnos", getAllTurnos);
router.get("/turnos/:id", getTurnoById);
router.post("/turnos", createTurno);
router.put("/turnos/:id", updateTurno);
router.delete("/turnos/:id", deleteTurno);


export default router;