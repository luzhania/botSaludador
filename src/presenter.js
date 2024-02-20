import saludar from "./saludador";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero")
const idioma_input = document.querySelector("#idioma")
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const saludar_btn = document.querySelector("#saludar-button");

const labels = document.querySelectorAll('label[for]');

function cambiarIdioma() {
  if (idioma_input.value === "EN") {
    labels.forEach(function(label){
      switch (label.htmlFor){
        case "Nombre":
          label.innerHTML = "What's your name?";
          break;
        case "Edad":
          label.innerHTML = "What's your age?";
          break;
        case "Genero":
          label.innerHTML = "Select an option:";
          break;
      }
    });

    for (var i = 0; i < genero_input.options.length; i++){
      switch (genero_input.options[i].value) {
        case "F":
          genero_input.options[i].text = "Female";
          break;
        case "M":
          genero_input.options[i].text = "Male";
          break;
      }
    }

    saludar_btn.value = "Salute";
  }
  else {
    labels.forEach(function(label){
      switch (label.htmlFor){
        case "Nombre":
          label.innerHTML = "¿Cuál es tu nombre?";
          break;
        case "Edad":
          label.innerHTML = "¿Cuál es tu edad?";
          break;
        case "Genero":
          label.innerHTML = "Selecciona una opción:";
          break;
      }
    });

    for (var i = 0; i < genero_input.options.length; i++){
      switch (genero_input.options[i].value) {
        case "F":
          genero_input.options[i].text = "Femenino";
          break;
        case "M":
          genero_input.options[i].text = "Masculino";
          break;
      }
    }
    saludar_btn.value = "Saludar";
  }
}

idioma_input.addEventListener("change", cambiarIdioma);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = Number.parseInt(edad_input.value);
  const genero = genero_input.value;
  const idioma = idioma_input.value;

  div.innerHTML = "<p>" + saludar(nombre, edad, genero, idioma) + "</p>";
});

