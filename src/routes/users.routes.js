import { Router } from "express";
import { Usuario } from "../models/Usuario.js";

const router = Router();

router.get("/usuarios", async (req, res) => {
  try {

    const usuarios = await Usuario.findAll();
    res.json(usuarios);

  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

router.get("/usuarios/:id", async (req, res) => {
  try {
  
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    res.json(usuario);
  
  } catch (error) {
  
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });

  }
});

router.post("/usuarios", async (req, res) => {
  try {

    const {
      nombre_usuario,
      nombre_apellido,
      id_permisos,
      password,
      email,
      telefono,
    } = req.body;
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      nombre_apellido,
      id_permisos,
      password,
      email,
      telefono,
    });

    res.json(nuevoUsuario);
    
  } catch (error) {
    
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: "Error al crear usuario" });
  
  }
});

router.put("/usuarios/:id", async (req, res) => {
  
  try {
  
    const { id } = req.params;
    const {
      nombre_usuario,
      nombre_apellido,
      id_permisos,
      password,
      email,
      telefono,
    } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID de usuario no proporcionado" });
    }

    if (
      !nombre_usuario &&
      !nombre_apellido &&
      !id_permisos &&
      !password &&
      !email &&
      !telefono
    ) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const usuario = await Usuario.findByPk(id);

    await usuario.update({
      nombre_usuario,
      nombre_apellido,
      id_permisos,
      password,
      email,
      telefono,
    });

    res.json(usuario);
  
  } catch (error) {
  
    console.error("Error al Actualizar usuarios:", error);
    res.status(500).json({ error: "Error al actualizar usuarios" });
  
  }
});

router.delete("/usuarios/:id", async (req, res) => {
  try {
  
    const { id } = req.params;
    await Usuario.destroy({ where: { id } });
    res.send(`Usuario ${id} eliminado con éxito`);
  
  } catch (error) {
  
    console.error("Error al Borrar usuarios:", error);
    res.status(500).json({ error: "Error al borrar usuarios" });
  
  }
});

export default router;
