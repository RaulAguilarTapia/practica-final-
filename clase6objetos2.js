var Raul = {
    nombre: 'Raul',
    apellido: 'Aguilar',
    edad:17
}

var Edgar = {
    nombre: 'Edgar',
    apellido: 'Lopez',
    edad: 15
}


function imprimirNombreEnMayusculas(n){
    n = n.toUpperCase();
    console.log(n);
}


imprimirNombreEnMayusculas(Raul.nombre);
imprimirNombreEnMayusculas(Edgar.nombre);