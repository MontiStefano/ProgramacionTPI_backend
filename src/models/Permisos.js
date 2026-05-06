import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Permiso = sequelize.define(
    "permisos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nombre_permiso: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    },
    {
        timestamps: false
    }
);