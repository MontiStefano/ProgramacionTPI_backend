import { Router } from "express";
import { Catalogo } from "../models/Catalogo.js";
import { getAllCatalogos, getCatalogoById, createCatalogo, updateCatalogo, deleteCatalogo } from "../controller/catalogos.controller.js";
import { verifyToken } from "../Middleware/VerifyToken.js";

const router = Router();

router.get("/catalogos", verifyToken, getAllCatalogos);
router.get("/catalogos/:id", verifyToken, getCatalogoById);
router.post("/catalogos", verifyToken, createCatalogo);
router.put("/catalogos/:id", verifyToken, updateCatalogo);
router.delete("/catalogos/:id", verifyToken, deleteCatalogo);

export default router;