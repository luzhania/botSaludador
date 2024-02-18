import saludar from "./saludador";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero")
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = Number.parseInt(edad_input.value);
  const genero = genero_input.value;

  div.innerHTML = "<p>" + saludar(nombre, edad, genero) + "</p>";
});

