import { Router } from "express";
import { Catalogo } from "../models/Catalogo.js";
import { getAllCatalogos, getCatalogoById, createCatalogo, updateCatalogo, deleteCatalogo } from "../controller/catalogos.controller.js";

const router = Router();

router.get("/catalogos", getAllCatalogos);
router.get("/catalogos/:id", getCatalogoById);
router.post("/catalogos", createCatalogo);
router.put("/catalogos/:id", updateCatalogo); 
router.delete("/catalogos/:id", deleteCatalogo);

export default router;