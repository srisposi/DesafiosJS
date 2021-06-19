//Switch case para hacer un menú dónde seleccione las promociones
let promocion = prompt("Seleccione la promocion que desee: ")
if (promocion > 5 || promocion < 1) {
    alert("Debe ingresar un número entre 1 y 5 ")
}
else{
    CalculoPromociones(promocion)
    descuentoVehiculo = descuento;
    alert(descuentoVehiculo)
}

//Switch case para hacer un menú dónde seleccione el tipo de vehículo que posee
// Trabajamps el menú que selecciona el tipo de vehículo mediante un array
let ArrayVehiculo = ['Moto','Auto','AutoVan','PickUp'];
//HAcer algún tipo de validación.
/* let Bandera = prompt("Indica el tipo de vehículo que posee"); */
let EstadoVehiculo = prompt("Posee otro vehículo que no se encuentre en la lista?");
let NuevoVehiculo;
let TiposVehiculo;
while ((EstadoVehiculo.toUpperCase() == "SI")) {        
    NuevoVehiculo = prompt("Ingrese el vehículo")
    ArrayVehiculo.push(NuevoVehiculo);
    break;
}
for(let i = 0; i < ArrayVehiculo.length; i++){
    TiposVehiculo = ArrayVehiculo[i];
}
TiposVehiculo = prompt("Seleccione su vehículo");


CalculoCosto(TiposVehiculo);
let compra = costo * descuentoVehiculo;
alert (compra);

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
    alert("Usted debe pagar: " + compra)
}
else{
    alert("Usted no finalizo su compra, hasta ahora lleva comprado " + compra)
}

/* Definicion de funciones */
function CalculoPromociones(promocion)
{
    switch (promocion) {
        case '1':
            descuento = 0.2;
        break;
        case '2':
            descuento = 0.3;
        break;
        case '3':
            descuento = 0.4;
        break;
        case '4':
            descuento = 0.5; 
        break; 
        default:
            descuento = 0.55;
        break;
    }
}

function CalculoCosto(TipoVehiculo){
    switch(TipoVehiculo){
        case 'Moto':
            costo = 400;
        break;
        case 'Auto':
            costo = 500;
        break;
        case 'autoVan':
            costo = 600;
        break;      
        case 'pickUp':
            costo = 700;
        break;
        default:
            costo = 870;
        break;              
    }
}