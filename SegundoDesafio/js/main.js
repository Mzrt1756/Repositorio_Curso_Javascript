
/*const cotizacionDolar = 116.75;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
    default:
        break;
}
*/
const cotizador = () =>{
    const factorDolar = 0.0085526;
    const factorEuro = 0.0081213;
    const factorReal = 0.043894;
    const factorYen = 1.11521;
    const cotizarPeso = (cantidad, factor) => cantidad*factor;
    const cotizarMoneda = (cantidad, factor) => cantidad/factor;
    let opcion = Number (prompt("Seleccione el número de la conversión que desea efectuar: \n 1 - ARS (Peso argentino)/USD (Dólar estadounidense) \n 2 - USD (Dólar estadounidense)/ARS (Peso argentino) \n 3 - ARS (Peso argentino)/EUR (Euro) \n 4 - EUR (Euro)/ARS (Peso argentino) \n 5 - ARS (Peso argentino)/BRL  (Real brasileño) \n 6 - BRL (Real brasileño)/ARS (Peso argentino) \n 7 - ARS (Peso argentino)/JPY (Yen japonés) \n 8 - JPY (Yen japonés)/ARS (Peso argentino)"));
    while (isNaN(opcion) || (opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4 && opcion != 5 && opcion != 6 && opcion != 7 && opcion != 8) ){
        opcion = Number (prompt("Opción inválida. Seleccione el número de la conversión que desea efectuar: \n 1 - ARS (Peso argentino)/USD (Dólar estadounidense) \n 2 - USD (Dólar estadounidense)/ARS (Peso argentino) \n 3 - ARS (Peso argentino)/EUR (Euro) \n 4 - EUR (Euro)/ARS (Peso argentino) \n 5 - ARS (Peso argentino)/BRL  (Real brasileño) \n 6 - BRL (Real brasileño)/ARS (Peso argentino) \n 7 - ARS (Peso argentino)/JPY (Yen japonés) \n 8 - JPY (Yen japonés)/ARS (Peso argentino)"));
    }
    let cantidadCambio = Number (prompt ("¿Cuánto dinero desea convertir?"));
    while (isNaN(cantidadCambio)){
        cantidadCambio = Number (prompt ("Respuesta inválida. Debe ingresar un número. ¿Cuánto dinero desea convertir?"));
    }
    switch (opcion){
        case 1:
            alert("Su dinero equivale a " + cotizarPeso(cantidadCambio,factorDolar).toFixed(2) + " dólares.");
            break;
        case 2:
            alert("Su dinero equivale a " + cotizarMoneda(cantidadCambio,factorDolar).toFixed(2) + " pesos argentinos.");
            break;
        case 3:
            alert("Su dinero equivale a " + cotizarPeso(cantidadCambio,factorEuro).toFixed(2) + " euros.");
            break;
        case 4:
            alert("Su dinero equivale a " + cotizarMoneda(cantidadCambio,factorEuro).toFixed(2) + " pesos argentinos.");
            break;
        case 5:
            alert("Su dinero equivale a " + cotizarPeso(cantidadCambio,factorReal).toFixed(2) + " reales.");
            break;  
        case 6:
            alert("Su dinero equivale a " + cotizarMoneda(cantidadCambio,factorReal).toFixed(2) + " pesos argentinos.");
            break;    
        case 7:
            alert("Su dinero equivale a " + cotizarPeso(cantidadCambio,factorYen).toFixed(2) + " yenes.");
            break;
        case 8:
            alert("Su dinero equivale a " + cotizarMoneda(cantidadCambio,factorYen).toFixed(2) + " pesos argentinos.");
            break;     
    }
}

cotizador();

let opcion = prompt("¿Desea convertir más dinero? \n SI \n NO");
opcion = opcion.toUpperCase();
let indicador = false;
while (indicador == false){
    while(opcion != "SI" && opcion != "NO" ){
        opcion = prompt("Opción inválida. Escriba SI o NO según corresponda. ¿Desea convertir más dinero? \n SI \n NO");
        opcion = opcion.toUpperCase();
    }
    if (opcion == "NO" ) {
        alert("Gracias por utilizar nuestros servicios.");
        indicador = true;
    }else{
        cotizador();
        opcion = prompt("¿Desea convertir más dinero? \n SI \n NO");
        opcion = opcion.toUpperCase();
    }  
}
