//Recibimos los Datos del usuario por prompt.
let nombre = prompt ('Ingrese su Nombre');
let apellido = prompt('Ingrese su Apellido');

//Determinamos la edad del usuario.
let anoActual = Number(prompt('Ingrese el año actual'));
let anoNacimiento = Number(prompt('Ingrese su año de nacimiento'));
let edad = (anoActual - anoNacimiento);

//Mostramos el resultado de los datos ingresados por console
//y validamos el registro por alert.
alert("Se registro con Éxito");
console.log("Se registro el usuario " + nombre + " " + apellido + " " + "cuya edad es de " + edad);
