import { Router } from "express";
import { Turnos } from "../models/Turnos.js";
import { getAllTurnos, getTurnoById, createTurno, updateTurno, deleteTurno } from "../controller/turnos.controller.js";
import { verifyToken, verifyRole } from "../Middleware/VerifyToken.js";
import { ROLES } from "../constants/roles.js";

const router = Router();


// privado - solo para logueados
router.post("/turnos", verifyToken, createTurno);
router.get("/turnos/:id", verifyToken, getTurnoById);
router.get("/turnos", verifyToken, getAllTurnos);


// privado - solo para superadmin
router.put("/turnos/:id", verifyRole([ROLES.SUPERADMIN]), updateTurno);
router.delete("/turnos/:id", verifyRole([ROLES.SUPERADMIN]), deleteTurno);


export default router;