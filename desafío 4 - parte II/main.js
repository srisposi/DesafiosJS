//Se Crea la Clase tipo vehiculo para el manejo de los mismos
function Vehiculos (TiposVehiculo, Patente, Modelo, Precio, Promocion) {
    this.TiposVehiculo = TiposVehiculo;
    this.Patente = Patente;
    this.Modelo = Modelo;
    this.Precio = Precio;
    this.promocion = Promocion;
} 
//Se crea el constructor para el manejo de los vehículos ingresados
const Vehiculos_1 = new Vehiculos ('Moto','123-123','234X', 235, 0.2);
const Vehiculos_2 = new Vehiculos ('Auto','333-113','ddX-7',300, 0.2);
const Vehiculos_3 = new Vehiculos ('Auto','121-211','rr-73', 300, 0.3);
const Vehiculos_4 = new Vehiculos ('AutoVan','311-223','ds-14', 450, 0.1);
const Vehiculos_5 = new Vehiculos ('PickUp','222-113','ff-7', 500, 0.2);

const ArrayVehiculos = [Vehiculos_1,Vehiculos_2,Vehiculos_3,Vehiculos_4,Vehiculos_5]

//Menú para que el usuario seleccione su vehículo
let VehiculoSeleccionado = prompt("Seleccione su vehículo: ")
//Se realiza el cobro del vehículo estacionado
let costo = 0
for(let i = 0; i < ArrayVehiculos.length; i++){
    if (VehiculoSeleccionado = i+1){
        costo = ArrayVehiculos[i].Precio * ArrayVehiculos[i].promocion
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