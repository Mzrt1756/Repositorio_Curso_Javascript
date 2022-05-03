/*
- Solicitar nombre al jugador.
- Solicitar edad y género (masculino, femenino, otros).
- Si edad<18 "Eres muy pequeño para jugar este juego"
- Elegir entre 3 artefactos (espada, varita mágica, arco y flecha)
- Dependiendo elección: guerrero, guerrera, mago, maga, arquero, arquera.
- "Tienes 5 puntos para mejorar tus habilidades. Escribe el nombre de la habilidad para mejorarla: 1- Fuerza 2- Resistencia 3- Carisma 4- Inteligencia 5- Agilidad"
- Empiezo ciclo: por cada contador cuento una situación y una decisión
*/

let nombreJugador = prompt("Bievenidx. Por favor ingresa tu nombre o alias preferidx.");
nombreJugador = nombreJugador.toUpperCase();
console.log(nombreJugador);
let edadJugador = Number(prompt("Hola "+ nombreJugador + ", ¿Qué edad tienes?"));
console.log(edadJugador);
let hastaDieciocho = 18 - edadJugador;
if (edadJugador<18){
    alert("Eres muy pequeñx para jugar este juego. Por favor inténtalo en " + hastaDieciocho + " años.") 
}
else{
    let generoJugador = prompt("¿Con qué género te sientes identificadx?: - M - F - Otro");
    generoJugador = generoJugador.toUpperCase();
    while(generoJugador != "M" && generoJugador != "F" && generoJugador != "OTRO"){
        generoJugador = prompt("Escribe una de las opciones. ¿Con qué género te sientes identificadx?: - M - F - Otro");
    }
    console.log(generoJugador);
    let artefacto= prompt("Elije un artefacto para empezar tu aventura: 1- Espada 2- Baston 3- Arco");
    artefacto = artefacto.toUpperCase();
    console.log(artefacto);
    let personaje
    while(artefacto!="ESPADA" && artefacto!="BASTON" && artefacto!="ARCO"){
        artefacto = prompt("El artefacto no se encuentra en la lista. Elije un artefacto de la lista para empezar tu aventura: 1- Espada 2- Baston 3- Arco")
    }
    if(artefacto=="ESPADA" && generoJugador=="M"){
        personaje = "guerrero";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenido a tu nueva aventura poderoso guerrero!");
    }else if(artefacto=="ESPADA" && generoJugador=="F"){
        personaje = "guerrera";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenida a tu nueva aventura poderosa guerrera!");
    }else if(artefacto=="ESPADA" && generoJugador=="OTRO"){
        personaje = "guerrerx";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenidx a tu nueva aventura poderosx guerrerx!");
    }else if(artefacto=="ARCO" && generoJugador=="M"){
        personaje = "arquero";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenido a tu nueva aventura formidable arquero!");
    }else if(artefacto=="ARCO" && generoJugador=="F"){
        personaje = "arquera";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenida a tu nueva aventura formidable arquera!");
    }else if(artefacto=="ARCO" && generoJugador=="OTRO"){
        personaje = "arquerx";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenidx a tu nueva aventura formidable arquerx!");
    }else if(artefacto=="BASTON" && generoJugador=="M"){
        personaje = "Mago";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenido a tu nueva aventura gran mago!");
    }else if(artefacto=="BASTON" && generoJugador=="F"){
        personaje = "Maga";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenida a tu nueva aventura gran maga!");
    }else if(artefacto=="BASTON" && generoJugador=="OTRO"){
        personaje = "Magx";
        personaje = personaje.toUpperCase();
        alert ("¡Bienvenidx a tu nueva aventura gran magx!");
    }
    let fuerza = 0;
    let resistencia = 0;
    let carisma = 0;
    let inteligencia = 0;
    let agilidad = 0;
    let habilidad; 
    alert("Gran "+ personaje + ", tienes 5 puntos para mejorar tus habilidades.");
    for (i=0;i<5;i++){
        habilidad = prompt ("Elije la habilidad a mejorar: 1- Fuerza 2- Resistencia 3- Carisma 4- Inteligencia 5- Agilidad");
        habilidad = habilidad.toUpperCase();
        while (habilidad != "FUERZA" && habilidad != "RESISTENCIA" && habilidad != "CARISMA" && habilidad != "INTELIGENCIA" && habilidad != "AGILIDAD"){
            habilidad = prompt ("No te he ofrecido mejorar esa habilidad. Intenta elegir una de la lista: 1- Fuerza 2- Resistencia 3- Carisma 4- Inteligencia 5- Agilidad")
        }
        switch (habilidad){
            case "FUERZA":
                fuerza++;
                console.log("Has sumado un punto a tu " + habilidad+ ".");
                break;
            case "RESISTENCIA":
                resistencia++;
                console.log("Has sumado un punto a tu " + habilidad+ ".");
                break;
            case "CARISMA":
                carisma++;
                console.log("Has sumado un punto a tu " + habilidad+ ".");
                break;
            case "INTELIGENCIA":
                inteligencia++;
                console.log("Has sumado un punto a tu " + habilidad+ ".");
                break;
            case "AGILIDAD":
                agilidad++;
                console.log("Has sumado un punto a tu " + habilidad+ ".");
                break;   
        }
    }
    alert("Tus habilidades son las siguientes: "+ "1- FUERZA = " + fuerza + "." + " 2- RESISTENCIA = " + resistencia + "." + " 3- CARISMA = " + carisma + "." + " 4- INTELIGENCIA = " + inteligencia + "." + " 5- AGILIDAD = " + agilidad + ".");

    

        

}
