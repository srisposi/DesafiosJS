// const miArreglo = [1, 2, 3];

// const otroArreglo = miArreglo;

// console.log(miArreglo);
// console.log(otroArreglo);

/* Usando Spread / Rest operator */

const miArreglo = [1, 2, 3];

const otroArreglo = ["Hola", ...miArreglo, true];// [ miArreglo[0],  ]
// const otroArreglo = [ miArreglo[0], miArreglo[1], miArreglo[2] ];

console.log(miArreglo);
console.log(otroArreglo);

