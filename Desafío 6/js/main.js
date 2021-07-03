const vehiculos = [
    { id: 1, title: 'Moto', precios: 750, hora: 24, dia: 0, mes: 0, año: 0 },
    { id: 2, title: 'Auto', precios: 1300, hora: 0, dia: 0, mes: 0, año: 1 },
    { id: 3, title: 'Pick Up', precios: 3000, hora: 0, dia: 2, mes: 0, año: 0 },
    { id: 4, title: 'Van', precios: 5000, hora: 0, dia: 0, mes: 2, año: 0 }
];  
 function renderHTML(array) {
    const vehiculosContainer = document.querySelector('article.vehiculos');
    let html = '';

    vehiculosContainer.innerHTML = '';

    array.forEach(vehiculos => {
    html += `
    <article class='vehiculos vehiculos-${vehiculos.id}'>
        <table class="table h-75">
            <thead class="thead-#b22222">
                <tr>
                    <th scope="col">Vehículo/Estadía</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Día</th>
                    <th scope="col">Mes</th>
                    <th scope="col">Año</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${vehiculos.title}</th>
                    <td>${vehiculos.hora}</td>
                    <td>${vehiculos.dia}</td>
                    <td>${vehiculos.mes}</td>
                    <td>${vehiculos.año}</td>
                </tr>
            </tbody>
        </table>
    </article>
    `;
});
vehiculosContainer.innerHTML = html;
}

renderHTML(vehiculos); 

let carrito = [];
const renderVehiculos = vehiculos =>{

    const vehiculosSection = document.querySelector('article.vehiculosSection');

    if (!vehiculos || vehiculos.length === 0){
        console.log('No hay vechículos');
        vehiculosSection.innerHTML = '<p>No hay vehículos :(</p>'
        return;
    }
    console.log('Hay vehículos');
    vehiculosSection.innerHTML = '';
    let html = '';

    vehiculos.forEach(vehiculos => {
        //console.log(vehiculos);
        html += `
        <article class="vehiculosSection">
            <h2>${vehiculos.title}</h2>
            <p>${vehiculos.precios}</p>
            <button class="btn-comprar" value=${vehiculos.id}>comprar</button>
        </article>    
        `;
    });
    console.log(html);
    vehiculosSection.innerHTML = html;
}




const addTocart = evento =>{
    console.log('El id del producto es: ', evento.target.value);
    const idVehiculos = evento.target.value;
    console.log(typeof idVehiculos)

    const buscarVehiculos = vehiculos.find(elemento => elemento.id === parseInt(idVehiculos));
    console.log('Este es el vehiculo elegido: ', buscarVehiculos);

    console.log('Antes de guardar: ', carrito);
    carrito.push(buscarVehiculos);
    console.log('Después de Guardar', carrito);

    renderCart(carrito);
}

const renderCart = arrayCart => {
    const cartSection = document.querySelector('section.cart');

    if (!arrayCart || arrayCart.length === 0){
        console.log('No hay vechículos');
        cartSection.innerHTML = '<p>No se ha elegido ninguna opción :(</p>'
        return;
    }
    console.log('Hay vehículos');
    cartSection.innerHTML = '';
    let html = '';
    console.log(arrayCart)
    arrayCart.forEach(vehiculo => {
        console.log(vehiculo);
        html += `
        <section class="cartSection">
            <h2>${vehiculo.title}</h2>
            
            <button class="btn-delete" onclick="deleteFromCart('${vehiculo.id}')">X</button>
        </section>    
        `;
    });
    console.log(html);
    cartSection.innerHTML = html;
}


const deleteFromCart = id => {
    console.log(id)
    console.log('Carrito antes de eliminar evehículo: ', carrito)
    const buscarVehiculoBorrar = carrito.filter(vehiculos => vehiculos.id !== parseInt(id));
    console.log('Carrito sin el vehiculo eliminado: ', buscarVehiculoBorrar);
    //Se modifica el carrito original con el nuevo array;
    carrito = buscarVehiculoBorrar;
    //Aqui empieza la logica del renderizado en el HTML
    renderCart(carrito);

}
//Cuanda loa ventana se carga
//window.addEventListener('load', () =>{})
window.onload = () => {
    renderVehiculos(vehiculos);
    renderCart(carrito);

    const btnComprar = document.querySelectorAll('.btn-comprar');
    //console.log(btnComprar)
    btnComprar.forEach(btn => btn.addEventListener('click',addTocart));
}