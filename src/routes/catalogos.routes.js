import { Router } from "express";
import { Catalogo } from "../models/Catalogo.js";

const router = Router();

router.get("/catalogos", async (req, res) => {
  try {

    const catalogos = await Catalogo.findAll();
    res.json(catalogos);

  } catch (error) {
    console.error("Error al obtener catalogos:", error);
    res.status(500).json({ error: "Error al obtener catalogos" });
  }
});

router.get("/catalogos/:id", async (req, res) => {
  try {
  
    const { id } = req.params;
    const catalogo = await Catalogo.findByPk(id);
    res.json(catalogo);
  
  } catch (error) {
  
    console.error("Error al obtener catalogos:", error);
    res.status(500).json({ error: "Error al obtener catalogos" });

  }
});

router.post("/catalogos", async (req, res) => {
  try {

    const {
      nombre_catalogo,
        url_img,
    } = req.body;
    const nuevoCatalogo = await Catalogo.create({
      nombre_catalogo,
      url_img
    });

    res.json(nuevoCatalogo);
    
  } catch (error) {
    
    console.error("Error al crear catalogo:", error);
    res.status(500).json({ error: "Error al crear catalogo" });
  
  }
});



router.put("/catalogos/:id", async (req, res) => {
  
  try {
  
    const { id } = req.params;
    const {
      nombre_catalogo,
      url_img
    } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID de catalogo no proporcionado" });
    }

    if (
      !nombre_catalogo &&
        !url_img 
    ) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const catalogo = await Catalogo.findByPk(id);

    await catalogo.update({
      nombre_catalogo,
      url_img
    });

    res.json(catalogo);
  
  } catch (error) {
  
    console.error("Error al Actualizar catalogos:", error);
    res.status(500).json({ error: "Error al actualizar catalogos" });
  
  }
});

router.delete("/catalogos/:id", async (req, res) => {
  try {
  
    const { id } = req.params;
    await Catalogo.destroy({ where: { id } });
    res.send(`Catalogo ${id} eliminado con éxito`);
  
  } catch (error) {
  
    console.error("Error al Borrar catalogos:", error);
    res.status(500).json({ error: "Error al borrar catalogos" });
  
  }
});

export default router;