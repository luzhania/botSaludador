function saludar(nombre, edad, genero){
  if (genero === "M")
  {
    if (edad >= 30)
    {
      return "Sr. " +  nombre;
    }
    else
    {
      return "joven " + nombre;
    }
  }
  else
  {
    if (edad >= 30)
    {
      return "Sra. " + nombre;
    }
    else
    {
      return "señorita " + nombre;
    }
  }
}

export default saludar;
