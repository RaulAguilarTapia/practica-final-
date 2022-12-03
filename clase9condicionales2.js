var sacha = {
    nombre: 'sacha',
    apellido: "Lopez",
    edad: 16,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimirProfeciones(persona){
    console.log(`${persona.nombre} : `);
//  persona.ingeniero = true===true
    if (persona.ingeniero === true) {
        console.log('es ingeniero')
    } if (persona.ingeniero === false) {
        console.log('no es ingeniero')
    } if (persona.cocinero === true) {
        console.log('es cocinero')
    } if (persona.cocinero === false){
        console.log('no es cocinero')
    } if (persona.cantante === true){
        console.log('es cantante')
    } if (persona.cantante === false){
        console.log('no es cantante')
    } if (persona.dj === true){
        console.log('es dj')
    }if (persona.dj === false){
        console.log('no es dj')
    }if (persona.guitarrista === true){
        console.log('es guitarrista')
    }if (persona.guitarrista === false){
        console.log('no es guitarrista')
    }if (persona.drone === true){
        console.log('vuela drone')
    }if (persona.drone === false){
        console.log('no vuela drone')
    } if (persona.edad > 18){
        console.log('es mayor de edad')
    }if (persona.edad < 18){
        console.log('es menor de edad')
    }
}




imprimirProfeciones(sacha);


//reto#1 mostrar todas las profesiones de sacha (que sean true)
//reto#2 mostrar que sacha no tiene dicha profesion: no es dj
//reto#3 crear una funcion para saber si la persona es mayor de edad
//ejemplo de salida: sacha es mayor de edad / sacha es menor de edad