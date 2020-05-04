const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const routes = require("./routes")

const app = express()
const configs = require("./config")
const db = require("./config/database")
require("dotenv").config({ path: ".env" })

db.authenticate()
  .then(() => console.log("Db Connect..."))
  .catch(err => console.log(err))

//habilitar pug
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "./views"))

//cargar carpeta static public
app.use(express.static("public"))

//validar si estamos en desa o prod
const config = configs[app.get("env")]
//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio

//año actual
app.use((req, res, next) => {
  const fecha = new Date()
  res.locals.fechaActual = fecha.getFullYear()
  res.locals.ruta = req.path
  return next()
})
//ejecutamos el bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
//carga las rutas
app.use("/", routes())

/* Puertos y host para la app */
const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 3000
app.listen(port, host,()=>{
  console.log("The server is working..");
  
})
