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
    //var nombre = persona.nombre, lo mismo;
    var{nombre} = persona
    console.log(nombre.toUpperCase());

}

imprimirNombreEnMayusculas(Raul);
imprimirNombreEnMayusculas(Edgar);

function birthday(persona){
    persona.edad = persona.edad + 1;
}

function cumpleaños (persona){
    return{
        ...persona,
            edad: persona.edad + 1
    }

}