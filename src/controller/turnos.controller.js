import { Turnos, Usuario, Servicio } from "../models/Relaciones.js";
import { ROLES } from "../constants/roles.js";


export const getAllTurnos = async (req, res) => {
  try {
    const { role, email } = req.user; // tomamos del token

    let where = {};   // si es SUPERADMIN no filtra

    if (role === ROLES.ADMIN) {
      where.email_estilista = email;  // si es ADMIN filtra por estilista
    } else if (role === ROLES.USER) {
      where.email_cliente = email;    // si es USER filtra por cliente
    }

    const turnos = await Turnos.findAll({
      where,
      // incluimos de las relaciones
      include: [
        {
          model: Usuario,
          as: "cliente",
          required: true,
          attributes: ["email", "nombreCompleto_usuario"],
        },
        {
          model: Usuario,
          as: "estilista",
          required: true,
          attributes: ["email", "nombreCompleto_usuario"],
        },
        {
          model: Servicio,
          as: "servicio",
          attributes: ["id", "nombre_servicio", "precio"],
        },
      ],
    });

    const ahora = new Date();
    for (const turno of turnos) {
      const fechaHoraTurno = new Date(`${turno.fecha}T${turno.hora_turno}:00`);

      if (turno.estado != 2 && fechaHoraTurno <= ahora) {
        await turno.update({ estado: 3 });
      }
    }

    turnos.sort((a, b) => {
      const fechaA = new Date(`${a.fecha}T${a.hora_turno}:00`);
      const fechaB = new Date(`${b.fecha}T${b.hora_turno}:00`);

      const estadoGrupo = (estado) => (estado === 0 || estado === 1 ? 0 : 1);

      const grupoA = estadoGrupo(a.estado); // pendientes y aprobados
      const grupoB = estadoGrupo(b.estado); // cancelados y finalizados

      // primero por grupo (activos arriba)
      if (grupoA !== grupoB) {
        return grupoA - grupoB;
      }


      // dentro del grupo por fecha más cercana
      return fechaA - fechaB;
    });

    res.json(turnos);

  } catch (error) {
    console.error("Error al obtener turnos: ", error);
    res.status(500).json({ error: "Error al obtener turnos" });
  }
};



export const getTurnoById = async (req, res) => {
  try {

    const { id } = req.params;
    const turno = await Turnos.findByPk(id);
    res.json(turno);

  } catch (error) {

    console.error("Error al obtener turnos por id: ", error);
    res.status(500).json({ error: "Error al obtener turnos por id" });

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

export const getTurnosByIdServicio = async (req, res) => {
  try {

    const { id } = req.params;
    const turno = await Turnos.findAll({
      where: {
        id_servicio: id
      }
    });
    res.json(turno);

  } catch (error) {

    console.error("Error al obtener turnos por servicio: ", error);
    res.status(500).json({ error: "Error al obtener turnos por servicio" });

  }
};