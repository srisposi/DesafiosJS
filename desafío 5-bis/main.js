const vehiculos = [
    { id: 1, title: 'Moto', hora: 24, dia: 0, mes: 0, año: 0 },
    { id: 2, title: 'Auto', hora: 0, dia: 0, mes: 0, año: 1 },
    { id: 3, title: 'Pick Up', hora: 0, dia: 2, mes: 0, año: 0 },
    { id: 4, title: 'Van', hora: 0, dia: 0, mes: 2, año: 0 }
];  
function renderHTML(array) {
    const vehiculosContainer = document.querySelector('section.vehiculos');
    let html = '';

    vehiculosContainer.innerHTML = '';

    array.forEach(vehiculos => {
    html += `
    <article class='vehiculos vehiculos-${vehiculos.id}'>
        <table>
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
                    <th>${vehiculos.title}</th>
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