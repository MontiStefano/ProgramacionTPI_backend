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
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: false,
    },email_cliente: {
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
    }
},
    {
        timestamps: false
    }
);