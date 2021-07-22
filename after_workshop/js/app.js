/* Selectores */
const listaProductos = document.querySelector('#lista-productos');
const tableCarrito = document.querySelector("#lista-carrito tbody");
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const formBuscador = document.querySelector('#formulario');
let carrito = [];

/* Listeners */
listaProductos.addEventListener('click', agregarProducto);
tableCarrito.addEventListener('click', borrarProducto);
formBuscador.addEventListener('submit', buscarProductos);
btnVaciarCarrito.addEventListener('click', vaciarCarrito);

/* Listeners con jQuery */
// $('#formulario').on('submit', buscarProductos);
// $("#vaciar-carrito").on('click', vaciarCarrito);


document.addEventListener('DOMContentLoaded', () => {
	// console.log("DOMContentLoaded de JS");
	/* Reviso en el storage si hay productos almacenados */
	const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
	if (carritoStorage) {
		carrito = [...carritoStorage]; // [ carritoStorage[0], carritoStorage[1], carritoStorage[2], ...  ]
		insertarCarritoHTML();
	}

	/* Cargo los productos desde mi arreglo */
	renderizarProductosHTML(productos);
});

function buscarProductos(e) {
	e.preventDefault();
	const inputBuscador = document.querySelector('#buscador').value;
	const inputFiltrado = inputBuscador.trim().toLowerCase();

	const resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(inputFiltrado));

	renderizarProductosHTML(resultado);

	formBuscador.reset();
}

function renderizarProductosHTML(productos) {
	listaProductos.innerHTML = '';
	productos.forEach(producto => {
		const { imagen, nombre, precio, id } = producto;

		$("#lista-productos").append(
			`
				<div class="card">
					<img src="${imagen}" class="imagen-producto u-full-width">

					<div class="info-card">
						<h4>${nombre}</h4>
						<p>Juan Pedro</p>
						<img src="img/estrellas.png">
						<p class="precio">$20000 <span class="u-pull-right ">${precio}</span></p>
						<a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${id}">Agregar
							Al Carrito</a>
					</div>
				</div>
				`
		);


		// const divCard = document.createElement('div');
		// divCard.classList.add("card");

		// divCard.innerHTML = `
		// 	<img src="${imagen}" class="imagen-producto u-full-width">

		// 	<div class="info-card">
		// 		<h4>${nombre}</h4>
		// 		<p>Juan Pedro</p>
		// 		<img src="img/estrellas.png">
		// 		<p class="precio">$20000 <span class="u-pull-right ">${precio}</span></p>
		// 		<a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="${id}">Agregar
		// 			Al Carrito</a>
		// 	</div>
		// `
		// listaProductos.appendChild(divCard);
	});
}

function vaciarCarrito() {
	carrito = [];
	insertarCarritoHTML();
}

function borrarProducto(e) {
	e.preventDefault();

	if (e.target.classList.contains("borrar-producto")) {
		/* Opcion 1 */
		// const productoSeleccionado = e.target.parentElement.parentElement;
		// const productoId = e.target.getAttribute('data-id');

		// /* Borrar del HTML */
		// productoSeleccionado.remove();

		// /* Borrar de la variable carrito */
		// carrito = carrito.filter(producto => producto.id !== productoId);

		// /* Actualizar el storage */
		// guardarCarritoStorage();

		/* Opcion 2 */
		const productoId = e.target.getAttribute('data-id');
		carrito = carrito.filter(producto => producto.id !== productoId);
		insertarCarritoHTML();
	}
}

function agregarProducto(e) {
	e.preventDefault();

	if (e.target.classList.contains("agregar-carrito")) {
		const cardProducto = e.target.parentElement.parentElement;

		obtenerDatosProducto(cardProducto);
	}
}

function obtenerDatosProducto(cardProducto) {

	/* Extraigo datos del producto del HTML */
	const productoAgregado = {
		imagen: cardProducto.querySelector('img').src,
		nombre: cardProducto.querySelector('h4').textContent,
		precio: cardProducto.querySelector('.precio span').textContent,
		cantidad: 1,
		id: cardProducto.querySelector('a').getAttribute('data-id')
	};

	/* Chequeo si ese producto ya existe en el carrito */
	// const existe = carrito.some( producto => producto.id === productoAgregado.id );
	const existe = carrito.some(function (producto) {
		return producto.id === productoAgregado.id;
	});

	if (existe) {
		const nuevoCarrito = carrito.map(producto => {
			if (producto.id === productoAgregado.id) {
				producto.cantidad++;
				producto.precio = `$${Number(productoAgregado.precio.slice(1)) * producto.cantidad}`
				// return producto;
			} else {
				// return producto;
			}
			return producto;
		});
		/* Spread operator */
		// let nombre = "Mi Nombre"; // 0x012f28F
		// let numbero = 123;
		// let booleano = true;

		// let miArrego = [1, 2, 3];

		carrito = [...nuevoCarrito];

		// carrito = nuevoCarrito;
	} else {
		// carrito.push(productoAgregado);
		carrito = [...carrito, productoAgregado];
		//        [ carrito[0], carrito[1], ... , productoAgregado ]
	}


	insertarCarritoHTML();
}

function actualizarStorage() {
	localStorage.setItem('carrito', JSON.stringify(carrito));
}

function insertarCarritoHTML() {

	borrarCarritoHTML();

	carrito.forEach(producto => {
		/* Destructuring de objetos */
		const { imagen, nombre, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
		<td>
			<img src="${imagen}" width='100%'>
		</td>
		<td>${nombre}</td>
		<td>${precio}</td>
		<td>${cantidad}</td>
		<td>
			<a href="#" class="borrar-producto" data-id="${id}">X</a>
		</td>
		`
		tableCarrito.appendChild(row);
	});

	/* Actualizo el carrito en el storage */
	actualizarStorage();
}

function borrarCarritoHTML() {
	/* Forma "lenta" */
	// tableCarrito.innerHTML = '';

	/* Forma rapida */
	while (tableCarrito.firstChild) {
		tableCarrito.removeChild(tableCarrito.firstChild);
	}
}
