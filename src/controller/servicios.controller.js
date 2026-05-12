
import { Servicio } from "../models/Servicios.js";

export const getAllServicios = async (req, res) => {
  try {

    const servicios = await Servicio.findAll();
    res.json(servicios);

  } catch (error) {
    console.error("Error al obtener servicios:", error);
    res.status(500).json({ error: "Error al obtener servicios" });
  }
};

export const getServicioById = async (req, res) => {
  try {
  
    const { id } = req.params;
    const servicio = await Servicio.findByPk(id);
    res.json(servicio);
  
  } catch (error) {
  
    console.error("Error al obtener servicios:", error);
    res.status(500).json({ error: "Error al obtener servicios" });

  }
};

export const createServicio = async (req, res) => {
  try {

    const {
      nombre_servicio,
    } = req.body;
    const nuevoServicio = await Servicio.create({
      nombre_servicio,
    });

    res.json(nuevoServicio);
    
  } catch (error) {
    
    console.error("Error al crear servicio:", error);
    res.status(500).json({ error: "Error al crear servicio" });
  
  }
};



export const updateServicio = async (req, res) => {
  
  try {
  
    const { id } = req.params;
    const {
      nombre_servicio,
    } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID de servicio no proporcionado" });
    }

    if (
      !nombre_servicio 
    ) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const servicio = await Servicio.findByPk(id);

    await servicio.update({
      nombre_servicio,
    });

    res.json(servicio);
  
  } catch (error) {
  
    console.error("Error al Actualizar servicios:", error);
    res.status(500).json({ error: "Error al actualizar servicios" });
  
  }
};

export const deleteServicio = async (req, res) => {
  try {
  
    const { id } = req.params;
    await Servicio.destroy({ where: { id } });
    res.send(`Servicio ${id} eliminado con éxito`);
  
  } catch (error) {
  
    console.error("Error al Borrar servicios:", error);
    res.status(500).json({ error: "Error al borrar servicios" });
  
  }
};

