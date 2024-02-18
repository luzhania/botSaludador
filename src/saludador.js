function saludarPorHora() {
  const fechaActual = new Date();
  const horaActual = fechaActual.getHours();
  let saludoPorHora = "Buenas noches ";

  if (horaActual >= 6 && horaActual < 12) {
    saludoPorHora = "Buen día ";
  }
  else {
    if (horaActual >= 12 && horaActual < 19) {
      saludoPorHora = "Buenas tardes ";
    }
  }
  return saludoPorHora;
}

function obtenerTratamiento(genero, edad) {
  let tratamiento = "señorita "
  if (genero === "M") {
    if (edad >= 30) {
      tratamiento = "Sr. ";
    }
    else {
      tratamiento = "joven ";
    }
  }
  else {
    if (edad >= 30) {
      tratamiento = "Sra. ";
    }
  }
  return tratamiento;
}

function saludar(nombre, edad, genero) {
  const saludoPorHora = saludarPorHora();
  const tratamiento = obtenerTratamiento(genero, edad);
  return `${saludoPorHora}${tratamiento}${nombre}`;
}

export default saludar;