/* $(document).ready(function(){
    $.ajax('info.json', {
            dataType: JSON,
            contentType: 'application/json',
        cache: false
    })
    .done(function(response){
        //console.log(response);
        let html;

        $.each(response, function(index, element{
            html = ``;
            html += ``;
        })
    });
}); 

/* `<div class="col-sm-4">
<div class="card" style="width: 100%;height: 100%;">
    <img src="../img/iconos/moto.png" class="card-img-top p-2"  alt="...">
    <div class="card-body">
        <h5 class="card-title">Promoción 1</h5>
        <p class="item-price">$199</p>
        <p class="card-text">10% de promoción para los refereifos de autos que se encuentran en el estacionamiento</p>
        <a href="#" class="btn btn-danger">Contratar</a>
    </div>
</div>
</div>` */

$.ajax({
    method: 'GET',
    //url: 'D:\Sergio\Documents\CODERHOUSE\Full Stack Developer\JavaScript\PROYECTO FINAL FINAL\elMecanico-RisposiSergio\js\info.json'
    url: '../js/info.json'
}).done((info)=>{
    console.log(info);
    //vehiculo = [...data];
    Cards(info);
}).fail((error)=>{
    console.log(error);
}).always(()=>{
    console.log(completado);
});


function Cards(info){
    const divVehiculos = $('#vehiculosCards');
    $(info).each(function(precios,vehiculo){
        divVehiculos.append(`
        <div class="col-sm-3">
        <div class="card" style="width: 100%;height: 100%;">
        <img class="card-img-top p-2" src="../img/iconos/${vehiculo.image}"  alt="...">
        <div class="card-body">
            <h5 class="card-title">${vehiculo.name}</h5>
            <p class="item-price">${vehiculo.precio}</p>
            <p class="card-text">${vehiculo.precio } de promoción para los refereifos de autos que se encuentran en el estacionamiento</p>
            <a href="#" class="btn btn-danger">Contratar</a>
        </div>
        </div>
    </div>`)

    })
}