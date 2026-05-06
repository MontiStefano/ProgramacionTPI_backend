import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Servicio = sequelize.define(
    "servicios", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nombre_servicio: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    },
    {
        timestamps: false
    }
);