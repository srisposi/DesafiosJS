$.ajax({
    method: 'GET',
    url: 'http://hp-api.herokuapp.com/api/characters/students'
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
    const divPersonajes = $('#productos');
    $(data).each( function(index, personaje) {
        divPersonajes.append(`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${personaje.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">El actor que hace de este personaje es ${personaje.actor} y su género es ${personaje.gender}.</p>
            </div>
        </div>
        `)
    })
}