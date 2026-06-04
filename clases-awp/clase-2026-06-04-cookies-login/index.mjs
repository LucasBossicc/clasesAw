import express from 'express'
import cookieParser from 'cookie-parser'

const puerto = 3000
const app = express()

// avisampos a express q use cookieparser
app.use(cookieParser('clavesecreta'))

// cuando recibimos DATOS JSON
app.use(express.json())

// cuando recibimos urlenoded
app.use(express.urlencoded({ extended: true }))

// admin
function chequearCookie(req, res, next) {
    // verificamos si ecioste la cookie
    const sessionId = req.signedCookies['sessionId']
    // verificamos si el valor enviado por el cliente conicnde con el del servidor  
    if (sessionId === 'minumero') {
        return next()
    }
    return res.redirect('/login')
}
app.use('/admin', chequearCookie, express.static('./front-end/front-admin'))

// login
app.use('/login', express.static('./front-end/front-login'))




// ruta que va a gestionar el acceso y la autentiacion
app.post('/autenticacion', (req, res) => {
    const { usuario, clave } = req.body
    // consultar si el usuario existe
    if (usuario != 'admin' || clave != '123') {
        return res.redirect('/login')
    }

    //genero el id
    // lo guardo en algun lado, ejemplo base de datos
    // consulto el valor 
    // genera cabeceras para las cookies

    //const id = nanoId()

    res.cookie('sessionId', 'minumero', {
        signed: true,
        // seguridad q no roeben
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        maxAge: 1000 * 10
    })
    // res.send('logueado')  
    res.redirect('/admin')
})

app.listen(puerto)

