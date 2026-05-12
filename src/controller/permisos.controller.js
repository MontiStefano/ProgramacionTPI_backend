import { Permiso } from "../models/Permisos.js";


export const getAllPermisos = async (req, res) => {
  try {

    const permisos = await Permiso.findAll();
    res.json(permisos);

  } catch (error) {
    console.error("Error al obtener permisos:", error);
    res.status(500).json({ error: "Error al obtener permisos" });
  }
};

export const getPermisoById = async (req, res) => {
  try {
  
    const { id } = req.params;
    const permiso = await Permiso.findByPk(id);
    res.json(permiso);
  
  } catch (error) {
  
    console.error("Error al obtener permisos:", error);
    res.status(500).json({ error: "Error al obtener permisos" });

  }
};

export const createPermiso = async (req, res) => {
  try {

    const {
      nombre_permiso,
    } = req.body;
    const nuevoPermiso = await Permiso.create({
      nombre_permiso,
    });

    res.json(nuevoPermiso);
    
  } catch (error) {
    
    console.error("Error al crear permiso:", error);
    res.status(500).json({ error: "Error al crear permiso" });
  
  }
};



export const updatePermiso = async (req, res) => {
  
  try {
  
    const { id } = req.params;
    const {
      nombre_permiso,
    } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID de permiso no proporcionado" });
    }

    if (
      !nombre_permiso 
    ) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const permiso = await Permiso.findByPk(id);

    await permiso.update({
      nombre_permiso,
    });

    res.json(permiso);
  
  } catch (error) {
  
    console.error("Error al Actualizar permisos:", error);
    res.status(500).json({ error: "Error al actualizar permisos" });
  
  }
};

export const deletePermiso = async (req, res) => {
  try {
  
    const { id } = req.params;
    await Permiso.destroy({ where: { id } });
    res.send(`Permiso ${id} eliminado con éxito`);
  
  } catch (error) {
  
    console.error("Error al Borrar permisos:", error);
    res.status(500).json({ error: "Error al borrar permisos" });
  
  }
};

