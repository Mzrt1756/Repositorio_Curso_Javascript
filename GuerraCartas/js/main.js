let respuesta;
do{
    const cartasJugadores = () =>{
        alert("A continuación se repartirán 3 cartas para cada jugador")
        let sumaJugador1 = 0;
        let sumaJugador2 = 0;
        for(i=0;i<3;i++){
            let carta1 = Number(Math.floor(Math.random() * (12) + 1));
            alert("Sacaste la carta " + carta1);
            sumaJugador1 =+ carta1;
            let carta2 = Number(Math.floor(Math.random() * (12) + 1));
            alert("El jugador 2 ha sacado la carta " + carta2);
            sumaJugador2 =+ carta2;

        }
        alert("Tus cartas suman " + sumaJugador1);
        alert("Las cartas del jugador 2 suman " + sumaJugador2);
        if(!isNaN(sumaJugador1) && !isNaN(sumaJugador2)){
            ganadorJuego(sumaJugador1,sumaJugador2);
        }
    
    }

    const ganadorJuego = (suma1, suma2) =>{
        if (suma1>suma2){
            alert("¡Has ganado!");
        }else if(suma1==suma2){
            alert("Has empatado con el jugador 2.");
        }else{
            alert("El jugador 2 ha ganado.\nHas perdido el juego.");
        }
    }

    cartasJugadores();
    respuesta = prompt("¿Quieres seguir jugando: SI o NO?");
    while(respuesta != "SI" && respuesta !="NO"){
        alert("Su respuesta es inválida.");
        respuesta = prompt("¿Quieres seguir jugando: SI o NO?");
    }
}while(respuesta=="SI");

