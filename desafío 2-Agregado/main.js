//Se reciben los Datos del usuario por prompt.
/* let nombre = prompt ('Ingrese su Nombre')
let apellido = prompt ('Ingrese su Apellido');


let rolUsuario = prompt ('Ingrese si usted es Estudiante o Trabajador'); 
while(rolUsuario === "Estudiante" || rolUsuario === "Trabajador")
{
    let fechaActual =  new Date(); 
let fechaNacimiento = new Date(prompt('Ingrese la fecha de su nacimiento en el siguiente formato: MM/DD/YYYY'));
let edad = fechaActual.getTime() - fechaNacimiento.getTime();
alert(edad.toString());
//let edad = prompt ('Ingrese su edad');
let status;

//Se verifica el rol del usuario
if (rolUsuario == 'Estudiante'){
    alert("Bienvenido Estudiante");
}else if (rolUsuario == 'Trabajador'){
    alert("Bienvenido Trabajador");    
}else{
    alert("Rol de usuario mal ingresado");
}

//Se verifica la edad
if (edad >= 18){
    status = "mayor";
    alert("Usted es mayor de edad");
    
}else{
    status = "menor";
    alert("Usted es menor de edad");
}

//Se verifica todos los datos ingresados
if ((status == "mayor") && (rolUsuario == "Trabajador")){
    console.log("Usted es un Trabajador mayor de edad");
}if ((status == "mayor") && (rolUsuario == "Estudiante")){
    console.log("Usted es un Estudiante mayor de edad");
}if ((status == "menor") && (rolUsuario == "Trabajador")){
    console.log("Usted es un Trabajador menor de edad");
}if ((status == "menor") && (rolUsuario == "Estudiante")){
    console.log("Usted es un Estudiante menor de edad");
}


alert("Se registro con Éxito");
console.log("Se registro el usuario " + nombre + " " + apellido + " " + "cuya edad es de " + edad);
alert("Se registro el usuario " + nombre + " " + apellido + " " + "cuya edad es de " + edad);
alert("Tiene el rol de " + rolUsuario + " y su situación es la de " + status);
} */
 
// Código II
// Declaración de variables y asignación de valores
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let respuesta= prompt("Buenos días " + nombre + ". Ha tenido contacto con un paciente COVID en los últimos 15 días? (Si/No)");
let debeAislarse = "debe aislarse.";
let noDebeAislarse = "no debe aislarse.";
// Control de flujo: ciclo WHILE y condicionales (if - else) + función toUpperCase()
while ((respuesta.toUpperCase() != "SI") || (respuesta.toUpperCase() != "NO")) {        
    if((respuesta.toUpperCase() === "SI") || (respuesta.toUpperCase() === "NO")){
        break;
    }
    else {
       respuesta =prompt("Debe ingresar Si o No"); 
    }
} 
if(respuesta.toUpperCase() == "SI"){
    respuesta = debeAislarse;
    alert("Usted " + respuesta)
}
else{
    respuesta = noDebeAislarse;
    alert("Usted " + respuesta)
}