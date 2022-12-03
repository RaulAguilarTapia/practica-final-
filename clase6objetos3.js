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

function imprimirNombreEnMayusculas(persona){
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}


imprimirNombreEnMayusculas(Raul);
imprimirNombreEnMayusculas(Edgar);