import { Usuario } from "../models/Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsuarios = async (req, res) => {
  try {

    const usuarios = await Usuario.findAll();
    res.json(usuarios);

  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const getUsuarioById = async (req, res) => {
  try {

    const { email } = req.params;
    const usuario = await Usuario.findByPk(email);
    res.json(usuario);

  } catch (error) {

    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });

  }
};


export const loginUser = async (req, res) => {
  try {

    const { email , password} = req.body;

    const usuario = await Usuario.findByPk(email);

    if (!usuario) {
      return res.status(401).json({ error: "Usuario no existente" });
    }

    const comparacion = await bcrypt.compare(password, usuario.password);

    if (!comparacion) {
      return res.status(401).json({ error: "Email o contraseña Incorrecta" });
    }

    const secretKey = 'progamacion3-2026';

    const Token = jwt.sign({ email, role: usuario.id_permisos}, secretKey, { expiresIn: '1h' });

    res.json(Token);

  } catch (error) {

    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });

  }
};

export const registerUser = async (req, res) => {
  const { nombreCompleto_usuario, email, password, telefono } = req.body

  const user = await Usuario.findOne({
    where: {
      email
    }
  })
  if (user) {
    return res.status(400).send({ message: "El usuario ya existe" })
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await Usuario.create({
    nombreCompleto_usuario,
    email,
    password: hashedPassword,
    telefono,
    id_permisos: 0,
  });
  
  res.json(newUser)
}


export const createUsuario = async (req, res) => {
  try {

    const {
      email,
      nombreCompleto_usuario,
      id_permisos,
      password,
      telefono,
    } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const nuevoUsuario = await Usuario.create({
      email,
      nombreCompleto_usuario,
      id_permisos,
      password: hashedPassword,
      telefono,
    });

    res.json(nuevoUsuario);

  } catch (error) {

    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: `Error al crear usuario: ${error.message}` });

  }
};

export const updateUsuario = async (req, res) => {

  try {

    const { email } = req.params;
    const {
      nombreCompleto_usuario,
      id_permisos,
      password,
      telefono,
    } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email de usuario no proporcionado" });
    }

    if (
      !nombreCompleto_usuario &&
      !id_permisos &&
      !password &&
      !telefono
    ) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const usuario = await Usuario.findByPk(email);

    await usuario.update({
      nombreCompleto_usuario,
      id_permisos,
      password,
      telefono,
    });

    res.json(usuario);

  } catch (error) {

    console.error("Error al Actualizar usuarios:", error);
    res.status(500).json({ error: `Error al actualizar usuarios: ${error.message}` });

  }
};

export const deleteUsuario = async (req, res) => {
  try {

    const { email } = req.params;
    await Usuario.destroy({ where: { email } });
    res.send(`Usuario ${email} eliminado con éxito`);

  } catch (error) {

    console.error("Error al Borrar usuarios:", error);
    res.status(500).json({ error: "Error al borrar usuarios" });

  }
};

