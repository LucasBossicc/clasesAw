// npm i -g pnpm
// pn add express multer
// pn add -D nodemon

import express from 'express'
import multer from 'multer'
import {nanoid} from 'nanoid'
import {MimeType} from 'mime-type'



const mime = mimetype()
//path (usar)

const PUERTO = 3000
const app = express()

// ejecutamos multer()
const almacenamiento = multer.diskStorage({
    //-----------------------------------------
    // destino de almacenamiento
    destination: function (req, file, cb) {
        // chequeos
        console.log(file, '........')
        cb(null, './archivos')
    },
    //-----------------------------------------
    // gestion de nombre
    filename: function (req, file, cb) {
        // obterngo la extension desde el mime type
        const extension = mime.extension(file.mimetype)
        // creo el nombre del archivo ocn un identificador unico con nanoid
        const nombreImagen = nanoid() + '.' + mime.extension(file.mimetype) // genera un uid
        cb(null, nombreImagen)
    }
})

// documentacion -> https://github.com/expressjs/multer
const subirArchivos = multer({
    storage: almacenamiento
})

const gestionArchivos = subirArchivos.single('imagen') //nombre del campo del html file 'imagne'


//use por defecto utiliza la ruta raiz, y utiliza comop prefijo
app.use('/admin', express.static('./front-admin'))

// ruta y metodo
app.post('/subir-archivo', (req, res) => {
    // verificamos el proceso de subida
    gestionArchivos(req, res, (error) => {
        console.log(error)
        if (error) return res.status(500).json({ mensaje: 'error en el servidor' })
        //si no hay error
        // req.body <---- app.use(express.json())

        console.log(req.file)
        res.json({ mensaje: 'ruta subida de archivos del formulario' })
    })
})
app.listen(PUERTO)


