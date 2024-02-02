// arreglo de palabras del juego

var listado_palabras = ["CAR", "YELLOW", "BLUE","HTML","FURTHER", "ADDRESS","ACTUALLY","REASON","REMAIN","ESTABLISH","DESCRIBE","DISCOVER","DIFFICULT","DURING","MEMORY","METHOD","MIND","MOTHER","NECESSARY","RESPONSABILITY","SHOULDER","SOMETIMES","STATEMENT","WINDOWS"];

var acertadas = 0;
var timer, indice;
var tiempo = 60;

function comenzarJuego(){
    // visibilidad pantalla juego y ocultas el resto
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.display = "none";

    //posicionamiento  del cursor input
    document.getElementById("palabra_ingresada").focus();

    //cargarmos la palabra
    cargarPalabra();

    //tiempo - cada 1 segundo llamamos a la función restarTiempo
    timer = setInterval('restarTiempo()', 1000);

}

// función cargar una palabra del array

function cargarPalabra(){
    //generar posición aleatoria
    indice = Math.round(Math.random()*(listado_palabras.length-1));
    document.getElementById("palabra").innerHTML = listado_palabras[indice];

    //Eliminar la posicion ya mostrada
    listado_palabras.splice(indice,1);
}

// función que compara la palabra con la del array

function comparar(){
    var palabra_mostrada = document.getElementById("palabra").innerHTML;
    var palabra_tecleada = document.getElementById("palabra_ingresada").value;
    palabra_tecleada = palabra_tecleada.toUpperCase();

    if(palabra_mostrada==palabra_tecleada){
        acertadas++;
        document.getElementById("palabra_ingresada").value = "";
        agregarNodo(palabra_tecleada);
        cargarPalabra(); //cargo otra palabra
    }
}

function agregarNodo(palabra){
    var span = document.createElement('span');
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);
}

//función muestra el tiempo

function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo==0){
        //detener cuenta regresiva
        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertadas;
    }
}