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

//function impprimirSiEsMayorDeEdad (persona) {
 //   if (persona.edad > 17 ) {
      //  console.log(`${persona} es mayor de edad`);
  //  } else {
      //  console.log(`${persona.nombre} es menor de edad`);
  //  }

//}



const MAYORIA_DE_EDAD = 17

function esMayorDeEdad (persona) {
    return persona.edad > MAYORIA_DE_EDAD;
}


function imprimirSiEsMayorDeEdad (persona) {
    if (esMayorDeEdad (persona) ) {
        console.log(`${persona} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }

}