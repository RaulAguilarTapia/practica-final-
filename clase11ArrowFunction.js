var sacha = {
    nombre: 'sacha',
    apellido: "Lopez",
    edad: 18,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
}

const MAYORIA_DE_EDAD = 17;

//function esMayorDeEdad (persona) {
   // return persona.edad > MAYORIA_DE_EDAD;
//}


//Funcion anonima
//const esMayorDeEdad = function (persona){
  //  return persona.edad > MAYORIA_DE_EDAD;
//}

//Arrow Function
const esMayorDeEdad = persona => persona.edad > MAYORIA_DE_EDAD;

//const esMayorDeEdad2 = ({edad})  => edad > MAYORIA_DE_EDAD;





function imprimirSiEsMayorDeEdad (persona) {
    if (esMayorDeEdad (persona) ) {
        console.log(`${persona} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }

}

//crear una funcion que nos de acceso o no, segun nuestra edad = si la persona es mayor de edad accede si no lo es no entra

function permitirAcceso (persona){
    if (esMayorDeEdad (persona)) {
        console.log(`Acceso Denegado`);
    }
}

//despues hacerla como funcion de flecha

