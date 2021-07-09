//Definición de botón del formulario
const botonAgregar = $('form button');
console.log(botonAgregar);

console.log($('input[type="text"]'))

//Creación de contador de tareas
let contadorTareas = 0;

//Manejo de datos con Storage
let tareasLocal = JSON.parse(localStorage.getItem('tareas'));
console.log(tareasLocal);

//Validación
if (tareasLocal) {
    tareasLocal.forEach((el)=>{
        console.log(el);
        agregarTarea(el)
    })
}

//Definición del evento click en Botón Agregar
botonAgregar.click(function(event) {
    event.preventDefault()
    let inputAgregar = $('.inputIngreso').val();
    agregarTarea(inputAgregar);
})

//Función para Agregar Tareas
function agregarTarea(valor) {
    if (valor != '') {    

        contadorTareas++

        $('.listaTareas').append(`
        <li class="tarea">
            <p>${valor}</p>
            <button id="completado${contadorTareas}" class="boton boton-completado">Completado</button>
            <button id="eliminar${contadorTareas}" class="boton boton-eliminar">Eliminar</button>
        </li>
        `);

        $(`#completado${contadorTareas}`).click(function(evt){
            console.log($(this));
            console.log($(this).parent());
            console.log(evt.target);
            $(this).parent().toggleClass('tarea-completada');
        });
        
        $(`#eliminar${contadorTareas}`).click(function(){
            console.log($(this));
            $(this).parent().remove();
            actualizarLocal();
        })
    }
    actualizarLocal();
}

//función para Guarda en el Storage
function actualizarLocal() {
    let localSet = [];
    console.log($('li'));
    $('li').each(function(){
        console.log($(this));
        localSet.push($(this).children()[0].innerText);
    });

    localStorage.setItem('tareas', JSON.stringify(localSet));
}

//Se agrega elemento en HTML con JQuery
$('#texto').html('Mi lista');
console.log($('#texto'));