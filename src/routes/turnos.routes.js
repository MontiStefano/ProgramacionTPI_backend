import { Router } from "express";
import { Turnos } from "../models/Turnos.js";

const router = Router();

router.get("/turnos", async (req, res) => {
  try {

    const turnos = await Turnos.findAll();
    res.json(turnos);

  } catch (error) {
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ error: "Error al obtener turnos" });
  }
});

router.get("/turnos/:id", async (req, res) => {
  try {
  
    const { id } = req.params;
    const turno = await Turnos.findByPk(id);
    res.json(turno);
  
  } catch (error) {
  
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ error: "Error al obtener turnos" });

  }
});

router.post("/turnos", async (req, res) => {
  try {

    const {
      fecha_hora,
      id_cliente,
      id_servicio,
      id_estilista
    } = req.body;
    const nuevoTurno = await Turnos.create({
      fecha_hora,
      id_cliente,
      id_servicio,
      id_estilista
    });

    res.json(nuevoTurno);
    
  } catch (error) {
    
    console.error("Error al crear turno:", error);
    res.status(500).json({ error: "Error al crear turno" });
  
  }
});



router.put("/turnos/:id", async (req, res) => {
  
  try {
  
    const { id } = req.params;
    const {
      fecha_hora,
      id_cliente,
      id_servicio,
      id_estilista
    } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID de turno no proporcionado" });
    }

    if (
      !fecha_hora &&
      !id_cliente &&
      !id_servicio &&
      !id_estilista
    ) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const turno = await Turnos.findByPk(id);

    await turno.update({
      fecha_hora,
      id_cliente,
      id_servicio,
      id_estilista
    });

    res.json(turno);
  
  } catch (error) {
  
    console.error("Error al Actualizar turnos:", error);
    res.status(500).json({ error: "Error al actualizar turnos" });
  
  }
});

router.delete("/turnos/:id", async (req, res) => {
  try {
  
    const { id } = req.params;
    await Turnos.destroy({ where: { id } });
    res.send(`Turno ${id} eliminado con éxito`);
  
  } catch (error) {
  
    console.error("Error al Borrar turnos:", error);
    res.status(500).json({ error: "Error al borrar turnos" });
  
  }
});

export default router;