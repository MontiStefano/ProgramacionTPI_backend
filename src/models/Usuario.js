import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Permiso } from "./Permisos.js";

export const Usuario = sequelize.define(
    "usuario", {
    email:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    nombreCompleto_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    },
    {
        timestamps: false
    }
);