const Viaje = require("../models/viajes")
const Testimonial = require("../models/testimoniales")

exports.consultasHomePages = async (req, res) => {
  const viajes = await Viaje.findAll({ limit: 3 })
  const testimoniales = await Testimonial.findAll({ limit: 3 })
  res.render("index", {
    pagina: "Próximos Viajes",
    clase: "home",
    viajes,
    testimoniales
  })
}
