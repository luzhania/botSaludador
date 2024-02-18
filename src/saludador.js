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
  let treatment = "miss ";
  if (genre === "M") {
    if (age >= 30) {
      treatment = "Mr. ";
    }
    else {
      treatment = "young ";
    }
  }
  else {
    if (age >= 30) {
      treatment = "Mrs. ";
    }
  }
  return treatment;
}

function saluteByTime() {
  const actualDate = new Date();
  const actualHour = actualDate.getHours();
  let salute_by_time = "Good evening ";

  if (actualHour >= 6 && actualHour < 12) {
    salute_by_time = "Good morning ";
  }
  else {
    if (actualHour >= 12 && actualHour < 19) {
      salute_by_time = "Good afternoon ";
    }
  }
  return salute_by_time;
}

function saludar(nombre, edad, genero, idioma) {
  if (idioma === "ES") {
    const saludoPorHora = saludarPorHora();
    const tratamiento = obtenerTratamiento(genero, edad);
    return `${saludoPorHora}${tratamiento}${nombre}`;
  }
  else {
    const treatment = getTreatment(genero, edad);
    const saluteTime = saluteByTime();
    return `${saluteTime}${treatment}${nombre}`;
  }

}

export default saludar;