//Se pide al usuario que elija el tipo de vehiculo
tipoVehiculo=prompt("Elija su tipo de vehículo")
//EL usuario selecciona el tipo de estadía que quiere
estadia = prompt("Elija su tipo de estadía")
//Traigo elementos con DOM
const precios = document.getElementById(estadia);
const vehiculo = document.getElementById(tipoVehiculo);


//Se realiza el cobro del vehículo estacionado
let costo = 0
for(let i = 0; i < estadia ; i++){
    costo = precios.textContent * vehiculo.textContent;
    }
}
alert("Usted debe pagar " + costo)
//Control de flujo con while - if para finalizar la compra
let estadoCompra = prompt("¿Finalizó su compra?");
while ((estadoCompra.toUpperCase() != "SI") || (estadoCompra.toUpperCase() != "NO")) {        
    if((estadoCompra.toUpperCase() === "SI") || (estadoCompra.toUpperCase() === "NO")){
        break;
    }
    else {
        estadoCompra =prompt("Debe ingresar Si o No"); 
    }
}
if(estadoCompra.toUpperCase() == "SI"){
    alert("Usted debe pagar: " + costo)
    alert("Gracias por usar nuestro sistema")
}
else{
    alert("Usted no finalizo su compra, hasta ahora lleva comprado " + costo)
    alert("Gracias por usar nuestro sistema")
}