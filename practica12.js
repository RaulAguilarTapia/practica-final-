var Raul = {
    nombre: 'Raul',
    apellido: 'Aguilar',
    edad: 17,
    peso: 75
}

console.log(
    "A inicios de este año" + Raul.nombre + " " + Raul.apellido + " pesaba " + Raul.peso + " kg con " + Raul.edad + " años "
);

var a = Raul.peso;
var b = 1;
finDeAño = Raul.edad + 1;

const Pesoran = 0.2;

const pesoma = (persona) => a = a + Pesoran;
const pesome = (persona) => a = a - Pesoran;

while (b<=365){
    var c = Math.random().toFixed(2);
    if (c <= 0.25){
        pesoma(Raul);
    }else if (c <= 0.5){
        pesome(Raul);
        b++;
    }
}

    console.log(
        "Al finalizar el año " + Raul.nombre + " " + Raul.apellido + " pesara " + a.toFixed(2) + " kg con " + finDeAño + " años " 
    );