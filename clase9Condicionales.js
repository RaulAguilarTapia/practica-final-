var sacha = {
    nombre: 'sacha',
    apellido: "Lopez",
    edad: 20,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfeciones(persona){
    console.log(`${persona.nombre} es: `);
//  persona.ingeniero = true===true
    if (persona.ingeniero === true); {
        console.log('ingeniero')
    }  
}


imprimirProfeciones(sacha);


//reto#1 mostrar todas las profesiones de sacha (que sean true)
//reto#2 mostrar que sacha no tiene dicha profesion: no es dj
//reto#3 crear una funcion para saber si la persona es mayor de edad
//ejemplo de salida: sacha es mayor de edad / sacha es menor de edad