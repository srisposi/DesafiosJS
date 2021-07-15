$.ajax({
    method: 'GET',
    url: '../json/data.json'
}).done((data)=> {
    console.log(data);
    crearCards(data);
}).fail((error)=> {
    console.log(error);
}).always(()=> {
    console.log('acción completada');
});


function crearCards(data){
    console.log(data);
    const divProductos = $('#productos');
    $(data).each( function(index, producto) {
        divProductos.append(`
        <div class="card col-md-4" style="width: 18rem;">
            <img class="card-img-top" src="${producto.foto}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Este usuario tiene ${producto.hijos} hijos y su teléfono es ${producto.telefono}.</p>
            </div>
        </div>
        `)
    })
}