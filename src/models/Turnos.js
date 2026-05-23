import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Usuario } from "./Usuario.js";
import { Servicio } from "./Servicios.js";

export const Turnos = sequelize.define(
    "turnos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora_turno: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    ,email_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Usuario,
            key: "email"
        },
    },id_servicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Servicio,
            key: "id"
        }
    },email_estilista: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Usuario,
            key: "email"
        },
    },
    // 0 = Pendiente
    // 1 = Aceptado
    // 2 = Rechazado
    // 3 = Finalizado
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},
    {
        timestamps: false
    }
);