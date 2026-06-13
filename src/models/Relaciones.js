import { Usuario } from "./Usuario.js";
import { Turnos } from "./Turnos.js";
import { Servicio } from "./Servicios.js";


// -------------- relaciones --------------

// Turno → Cliente
Turnos.belongsTo(Usuario, {
  foreignKey: "email_cliente",
  targetKey: "email",
  as: "cliente",
});

// Turno → Estilista
Turnos.belongsTo(Usuario, {
  foreignKey: "email_estilista",
  targetKey: "email",
  as: "estilista",
});

// Turno → Servicio
Turnos.belongsTo(Servicio, {
  foreignKey: "id_servicio",
  as: "servicio",
});


// -------------- relaciones inversas --------------

Usuario.hasMany(Turnos, {
  foreignKey: "email_cliente",
  sourceKey: "email",
  as: "turnosComoCliente",
});

Usuario.hasMany(Turnos, {
  foreignKey: "email_estilista",
  sourceKey: "email",
  as: "turnosComoEstilista",
});

Servicio.hasMany(Turnos, {
  foreignKey: "id_servicio",
  as: "turnos",
});



export {
  Usuario,
  Turnos,
  Servicio
};