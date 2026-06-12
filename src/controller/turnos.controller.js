import { Turnos } from "../models/Turnos.js";



export const getAllTurnos = async (req, res) => {
  try {

    const turnos = await Turnos.findAll();
    res.json(turnos);

  } catch (error) {
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ error: "Error al obtener turnos" });
  }
};

export const getTurnoById = async (req, res) => {
  try {
  
    const { id } = req.params;
    const turno = await Turnos.findByPk(id);
    res.json(turno);
  
  } catch (error) {
  
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ error: "Error al obtener turnos" });

  }
};

export const createTurno = async (req, res) => {
  try {
    const {
      fecha,
      hora_turno,
      email_cliente,
      id_servicio,
      email_estilista,
      estado
    } = req.body;

    const nuevoTurno = await Turnos.create({
      fecha,
      hora_turno,
      email_cliente,
      id_servicio,
      email_estilista,
      estado
    });

    res.json(nuevoTurno);
    
  } catch (error) {
    console.error("Error al crear turno:", error);
    res.status(500).json({ error: "Error al crear turno" });
  }
};



export const updateTurno = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fecha,
      hora_turno,
      email_cliente,
      id_servicio,
      email_estilista,
      estado
    } = req.body;

    if (!id) {
      return res.status(400).json({ error: "ID de turno no proporcionado" });
    }

    const turno = await Turnos.findByPk(id);

    if (!turno) {
      return res.status(404).json({ error: "Turno no encontrado" });
    }

    await turno.update({
      ...(fecha && { fecha }),
      ...(hora_turno && { hora_turno }),
      ...(email_cliente && { email_cliente }),
      ...(id_servicio && { id_servicio }),
      ...(email_estilista && { email_estilista }),
      ...(estado !== undefined && { estado }),
    });

    res.json(turno);

  } catch (error) {
    console.error("Error al Actualizar turnos:", error);
    res.status(500).json({ error: "Error al actualizar turnos" });
  }
};

export const deleteTurno = async (req, res) => {
  try {
  
    const { id } = req.params;
    await Turnos.destroy({ where: { id } });
    res.send(`Turno ${id} eliminado con éxito`);
  
  } catch (error) {
  
    console.error("Error al Borrar turnos:", error);
    res.status(500).json({ error: "Error al borrar turnos" });
  
  }
};

