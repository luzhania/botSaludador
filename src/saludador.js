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

function getTreatment(genre, age){
  let treatment = "Mrs. ";
  if (genre === "M") {
    treatment = "Mr. ";
  }
  return treatment;
}

function saludar(nombre, edad, genero, idioma) {
  if (idioma === "ES") {
    const saludoPorHora = saludarPorHora();
    const tratamiento = obtenerTratamiento(genero, edad);
    return `${saludoPorHora}${tratamiento}${nombre}`;
  }
  else {
    const treatment = getTreatment(genero);
    return "Hello " + treatment + nombre;;
  }

}

export default saludar;