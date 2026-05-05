import express from 'express';
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js'; 
import { sequelize } from "./db.js";
import { Usuario } from './models/Usuario.js';

const app = express();

try{
    app.listen(PORT);
    app.use(userRoutes);
    await sequelize.sync();
    console.log(`El servidor esta escuchando el puerto: ${PORT}`)
}
catch{
    console.log(`Error en la inicializacion`)
}


