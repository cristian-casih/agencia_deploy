const Testimonial = require("../models/testimoniales")

exports.mostrarTestimoniales = async (req, res) => {
  const testimoniales = await Testimonial.findAll()
  res.render("testimoniales", {
    pagina: "Testimoniales",
    testimoniales
  })
}
exports.createTestimoniales = (req, res) => {
  let { nombre, correo, mensaje } = req.body
  let errores = []
  if (!nombre) errores.push({ mensaje: "Agrega tu Nombre" })
  if (!correo) errores.push({ mensaje: "Agrega tu email" })
  if (!mensaje) errores.push({ mensaje: "Agrega tu Mensaje" })

  if (errores.length > 0) {
    res.render("testimoniales", {
      errores,
      nombre,
      correo,
      mensaje
    })
  } else {
    Testimonial.create({
      nombre,
      correo,
      mensaje
    })
      .then(testimoniales => res.redirect("/testimoniales"))
      .catch(error => console.log(error))
  }
}
