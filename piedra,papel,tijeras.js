var wins=0;
var PCwins=0;
var PCeleccion;
var eleccion;
var i=1;
    while(i==1){
        eleccion=0;
    eleccion = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"));
if (eleccion<1 || eleccion==null) {
    alert("Mal elegido");
} else {
    if (eleccion>3) {
        alert("Mal elegido");
    }
    else{
        function numeroAleatorio(max) {
            return Math.floor(Math.random() * max);
          }  
        PCeleccion = numeroAleatorio(3);
        switch(PCeleccion){
            case 0:
                alert("PC elige Piedra 🪨");
                break;
            case 1:
                alert("PC elige Papel 📃");
                break;
            case 2:
                alert("PC elige Tijera ✂");
                break;
        }
        switch(eleccion){
            case 1:
                alert("Tú eliges Piedra 🪨");
                break;
            case 2:
                alert("Tú eliges Papel 📃");
                break;
            case 3:
                alert("Tú eliges Tijera ✂");
                break;
        }
        if (eleccion==1) {
            switch (PCeleccion) {
                case 0:
                    alert("EMPATE");
                    break;
                case 1:
                    PCwins=PCwins+1;
                    alert("PERDISTE");
                    break;
                case 2:
                    wins=wins+1;
                    alert("GANASTE");
                    break;
            }
        }
        else{
            if (eleccion==2) {
                switch (PCeleccion) {
                case 0:
                    wins=wins+1;
                    alert("GANASTE");
                    break;
                case 1:
                    alert("EMPATE");
                    break;
                case 2:
                    PCwins=PCwins+1;
                    alert("PERDISTE");
                    break;
                }
            } else {
                if (eleccion==3){
                switch (PCeleccion){
                case 0:
                    PCwins=PCwins+1;
                    alert("PERDISTE");
                    break;
                case 1:
                    wins=wins+1;
                    alert("GANASTE");
                    break;
                case 2:
                    alert("EMPATE");
                    break;
                }
            }
            }
        }
    }
}
if ((wins==3) || (PCwins==3))
{
i=2;
}
}

alert("Ganaste "+ wins +" veces. Perdiste "+ PCwins + " veces");
