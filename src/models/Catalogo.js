import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Catalogo = sequelize.define(
    "catalogo", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nombre_catalogo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    url_img: {
        type: DataTypes.STRING,
        allowNull: false,   
    },
    },
    {
        timestamps: false
    }
);