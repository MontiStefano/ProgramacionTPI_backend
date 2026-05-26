import { Router } from "express";
import { Turnos } from "../models/Turnos.js";
import { getAllTurnos, getTurnoById, createTurno, updateTurno, deleteTurno } from "../controller/turnos.controller.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
const router = Router();

router.get("/turnos", verifyToken, getAllTurnos);
router.get("/turnos/:id", verifyToken, getTurnoById);
router.post("/turnos", verifyToken, createTurno);
router.put("/turnos/:id", verifyToken, updateTurno);
router.delete("/turnos/:id", verifyToken, deleteTurno);


export default router;