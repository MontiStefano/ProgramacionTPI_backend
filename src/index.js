import express from 'express';
import cors from "cors";
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js'; 
import turnosRoutes from './routes/turnos.routes.js';
import serviciosRoutes from './routes/servicios.routes.js';
import catalogoRoutes from './routes/catalogos.routes.js';
import permisosRoutes from './routes/permisos.routes.js';

import { sequelize } from "./db.js";

const app = express();

try {
    //Cors para la comunicacion entre el frontend y el backend
    app.use(cors());

    app.use(express.json());

    // Rutas
    app.use(userRoutes);
    app.use(turnosRoutes);
    app.use(serviciosRoutes);
    app.use(catalogoRoutes);
    app.use(permisosRoutes);

    // Base de datos
    await sequelize.sync();

    await sequelize.authenticate();

    console.log("Database connected successfully");

    app.listen(PORT, () => {
        console.log(`El servidor esta escuchando el puerto: ${PORT}`);
    });

}
catch (error) {

    console.log("Error en la inicializacion");

    console.log(error);

}
