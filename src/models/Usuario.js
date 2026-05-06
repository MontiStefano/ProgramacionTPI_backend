import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Permiso } from "./Permisos.js";

export const Usuario = sequelize.define(
    "usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nombre_apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_permisos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permiso,
            key: "id"
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
        timestamps: false
    }
);