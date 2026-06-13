import { Router } from "express";
import { Catalogo } from "../models/Catalogo.js";
import { getAllCatalogos, getCatalogoById, createCatalogo, updateCatalogo, deleteCatalogo } from "../controller/catalogos.controller.js";
import { verifyToken, verifyRole } from "../Middleware/VerifyToken.js";
import { ROLES } from "../constants/roles.js";

const router = Router();

// publico
router.get("/catalogos", getAllCatalogos);
router.get("/catalogos/:id", getCatalogoById);

// privado - solo para admin o superadmin
router.post("/catalogos", verifyRole([ROLES.ADMIN, ROLES.SUPERADMIN]), createCatalogo);
router.put("/catalogos/:id", verifyRole([ROLES.ADMIN, ROLES.SUPERADMIN]), updateCatalogo);
router.delete("/catalogos/:id", verifyRole([ROLES.ADMIN, ROLES.SUPERADMIN]), deleteCatalogo);

export default router;