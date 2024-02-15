function saludar(nombre, edad){
  if (edad >= 30)
  {
    return "Sr. " +  nombre;
  }
  else
  {
    return nombre;
  }
  
}

export default saludar;
