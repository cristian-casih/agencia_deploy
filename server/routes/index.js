const express = require("express")
const router = express.Router()

const nosotrosController = require("../controllers/nosotrosController")
const homeController = require("../controllers/homeController")
const viajesController = require("../controllers/viajesController")
const testimonialesController = require("../controllers/testimonialesController")

module.exports = function () {
  //home
  router.get("/", homeController.consultasHomePages)
  //nosotros
  router.get("/nosotros", nosotrosController.infoNosotros)
  //viajes
  router.get("/viajes", viajesController.mostrarViajes)
  router.get("/viajes/:id", viajesController.mostrarViaje)
  //testimoniales
  router.get("/testimoniales", testimonialesController.mostrarTestimoniales)
  router.post("/testimoniales", testimonialesController.createTestimoniales)
  
  return router
}
