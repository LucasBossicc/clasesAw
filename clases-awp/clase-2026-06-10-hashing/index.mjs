// npm i -g pnpm
// pn init
// pn add express pg cookie-parser bcryptjs
// pn add -D nodemon
import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';

const PUERTO = 3000;

////////////////

////////////////
const app = express();

app.use(express.json()) // <---- formato json -> convierte en objeto dentro de body 
app.use(express.urlencoded({ extended: true }))  // <---- formato urlencoded -> convierte en un obj dentro del body

// exportamos los dos fronts

// Admin CRUD    
app.use('/admin', express.static('./fronts/front-admin'))

// Login
app.use('/login', express.static('./fronts/front-login'))

// autenticar
app.post('/autenticar', (req, res) =>{
    // Actividad 5 unir clase pasada, cookie login
    // generar el id con nanodId -- ese ide mandar y quechear
    // bloquear 

    // flujo registro
})


// Registrar
app.post('/registrar', async (req, res) => {
    // 1- Capturar los datos, vienen del body por el req 
    // req.body // <--- tanto json y urlencoded se guardan aqui
    console.log(req.body)
    const { usuario, pass } = req.body

    // 2- control   
    if (!usuario || !pass) {
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })

    }

    // 3- encitptamos clave
    const salt = await bcrypt.genSalt(10); // <--- previene el ataque arcoiris de fuerza bruta 
    const hash = await bcrypt.hash(pass, salt);
    console.log(hash)

    // 4- guardamos en base de datos
    // usar try catch
    const resultado = await pool.query(`
        INSERT INTO usuarios
            (username, password_hash)
        VALUES
            ($1, $2)
        RETURNING
            id, username
        `, // <-- ojo con la coma
        [
            usuario,
            hash
        ]
    )

    // 5- verificamos si se realizo la insercion
    if (resultado.rowCount > 0) {
        return res.json({
            mensaje: `el usuario ${usuario} se ha registrado correcatmente`
        })
    }
    
    res.status(500).json({
        mensaje: 'el registro no se pudo realizar'
    })
})

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});