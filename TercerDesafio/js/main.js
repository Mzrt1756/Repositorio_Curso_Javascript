//Solicitar al usuario que escriba los datos del paciente (nombre, apellido, edad, altura, género)
//Determinar la edad promedio de los pacientes.
//Determinar número de pacientes por género.
//Determinar altura promedio de los pacientes.
let nuevoPaciente = prompt("Ingresar nuevo paciente: SI/NO");
nuevoPaciente = nuevoPaciente.toUpperCase();
while (nuevoPaciente != "SI" && nuevoPaciente != "NO"){
    nuevoPaciente = prompt("Inválido. Ingresar nuevo paciente: SI/NO");
    nuevoPaciente = nuevoPaciente.toUpperCase();
}
class Paciente{
    constructor(nombre, apellido, edad, altura, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
        this.genero = genero;
    }
}

const arrayPacientes = [];
let contadorPacientes = 0;
let contadorMasculinos = 0;
let contadorFemeninos = 0;
let contadorOtros = 0;
let sumaEdad = 0
let promEdad = 0;
let sumaAltura = 0;
let promAltura = 0;
let posicion;
let pregEliminar;

while(nuevoPaciente =="SI"){
    
    //Variables
    let nombre = prompt("Ingrese nombre paciente " + (contadorPacientes+1));
    let apellido = prompt("Ingrese apellido paciente " + (contadorPacientes+1));
    let edad = Number(prompt("Ingrese edad paciente " + (contadorPacientes+1)));
    let altura = Number (prompt("Ingrese altura paciente " + (contadorPacientes+1) + " en centímetros."));
    let genero = prompt("Ingrese genero paciente " + (contadorPacientes+1) + ": M/F/X");
    genero = genero.toUpperCase();
    while (genero != "M" && genero != "F" && genero != "X"){
        genero = prompt("Inválido. Ingrese una de las siguientes opciones. Género paciente " + (contadorPacientes+1) + ": M/F/X");
        genero = genero.toUpperCase();
    }

    //Agregar a un array los nuevos pacientes y verlo en consola para conocer los datos del paciente
    arrayPacientes[contadorPacientes] = new Paciente (nombre, apellido, edad, altura, genero);
    console.log(`Paciente ${contadorPacientes + 1}: ${arrayPacientes[contadorPacientes].nombre} ${arrayPacientes[contadorPacientes].apellido} tiene ${arrayPacientes[contadorPacientes].edad} años de edad, mide ${arrayPacientes[contadorPacientes].altura} centímetros. Se autopercibe con el genero ${arrayPacientes[contadorPacientes].genero}.` )

    //Funcion promedioEdad
    const promedioEdad = () => {
        sumaEdad += arrayPacientes[contadorPacientes].edad; 
        promEdad = sumaEdad/(contadorPacientes + 1);
        alert(`La edad promedio de sus pacientes es: ${promEdad} años`)
    }

    //Funcion promedio altura
    const promedioAltura = () => {
        sumaAltura += arrayPacientes[contadorPacientes].altura; 
        promAltura = sumaAltura/(contadorPacientes + 1);
        alert(`La altura promedio de sus pacientes es: ${promAltura} centímetros.`)
    }

    //Funcion cantidad de pacientes por genero
    const pacientesPorGenero = () => {
        if (genero == "M"){
            contadorMasculinos++;
        }else if (genero == "F"){
            contadorFemeninos++;
        }else{
            contadorOtros++;
        }
        alert(`Usted tiene ${contadorMasculinos} paciente/s masculino/s, ${contadorFemeninos} paciente/s femeninos/, ${contadorOtros} paciente/s con otra identidad de género.`)
    }
    
    //Llamada a funciones
    promedioEdad();
    promedioAltura();
    pacientesPorGenero();

    //Funcion eliminar paciente 
    const eliminarPaciente = (posicion) =>{
        if (posicion != -1 ) {
            arrayPacientes.splice(posicion, 1);
            contadorPacientes--;
            console.log(arrayPacientes);
        }else{
            alert("Esa posicion no existe.")
        }
    }    

    //Ingresar nuevo paciente
    nuevoPaciente = prompt("Ingresar nuevo paciente: SI/NO");
    nuevoPaciente = nuevoPaciente.toUpperCase();
    while (nuevoPaciente != "SI" && nuevoPaciente != "NO"){
        nuevoPaciente = prompt("Inválido. Ingresar nuevo paciente: SI/NO");
        nuevoPaciente = nuevoPaciente.toUpperCase();
    }
    if(nuevoPaciente == "SI"){
        contadorPacientes++;
    }else{
        console.log(arrayPacientes);
        pregEliminar = prompt("¿Desea eliminar algún paciente?: SI/NO");
        pregEliminar = pregEliminar.toUpperCase();
        while (pregEliminar != "SI" && pregEliminar != "NO"){
            pregEliminar = prompt("Inválido. ¿Desea eliminar algún paciente?: SI/NO");
            pregEliminar = pregEliminar.toUpperCase();
        }
        while(pregEliminar =="SI"){
            console.log(arrayPacientes);
            posicion = Number(prompt(`Escriba el numero del paciente que desea eliminar entre 1 y ${contadorPacientes+1}.`));
            posicion--;
            eliminarPaciente(posicion);
            pregEliminar = prompt("¿Desea eliminar algún paciente?: SI/NO");
            pregEliminar = pregEliminar.toUpperCase();
            while (pregEliminar != "SI" && pregEliminar != "NO"){
                pregEliminar = prompt("Inválido. ¿Desea eliminar algún paciente?: SI/NO");
                pregEliminar = pregEliminar.toUpperCase();
            }
            if(pregEliminar =="SI"){
                posicion = Number(prompt(`Escriba el numero del paciente que desea eliminar entre 1 y ${contadorPacientes+1}.`));
                posicion--;
                eliminarPaciente(posicion);
                pregEliminar = prompt("¿Desea eliminar algún paciente?: SI/NO");
                pregEliminar = pregEliminar.toUpperCase();
                while (pregEliminar != "SI" && pregEliminar != "NO"){
                    pregEliminar = prompt("Inválido. ¿Desea eliminar algún paciente?: SI/NO");
                    pregEliminar = pregEliminar.toUpperCase();
                }
            }
        }
    }
}

