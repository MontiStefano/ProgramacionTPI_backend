import express from 'express';
import { PORT } from './config.js';

import userRoutes from './routes/users.routes.js'; 
import turnosRoutes from './routes/turnos.routes.js';
import serviciosRoutes from './routes/servicios.routes.js';
import catalogoRoutes from './routes/catalogos.routes.js';
import permisosRoutes from './routes/permisos.routes.js';

import { sequelize } from "./db.js";
import { Usuario } from './models/Usuario.js';

const app = express();

try{
    app.use(express.json());
    app.listen(PORT);


    // Rutas
    app.use(userRoutes);
    app.use(turnosRoutes);
    app.use(serviciosRoutes);
    app.use(catalogoRoutes);
    app.use(permisosRoutes);


    // Sincronizar modelos con la base de datos
    await sequelize.sync();

    console.log(`El servidor esta escuchando el puerto: ${PORT}`)

    await sequelize.authenticate();
    console.log("Database connected successfully")

}
catch{
    console.log(`Error en la inicializacion`)
}


