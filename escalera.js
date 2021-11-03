/**
 * arreglo con todas las escaleras, la key es la base y el valor a donde va la escalera
 */
let escaleras={
    10:12,
    3:11,
    9:18,
    6:17,
}

/**
 * arreglo con todas las serpientes, la key es la cabeza y el valor la cola
 */
let serpientes={
    14:4,
    19:8,
    22:20,
    24:16
}

/**
 * declaración de la varibale de posicion, iniciada en 0
 */
let pos=0;

/**
 * 
 * @returns numero entre 1 y 6
 */
function tirarDado() {
    res = Math.floor(Math.random() * 6) + 1;
    console.log(`Dado arroja ${res}`)
    return res;
}

/**
 * función de juego donde esta el ciclo
 */
function juego(){
    console.log(escaleras);
    while(pos<25){
        pos+=tirarDado();
        console.log(`Jugador avanza a casilla ${pos}`);
        if(escaleras[pos]){
            pos=escaleras[pos];
            console.log(`Judador avanza por una escalera a la casilla ${pos}`);
        }
        if(serpientes[pos]){
            pos=serpientes[pos];
            console.log(`Judador cae por una serpiente a la casilla ${pos}`);
        }
    }
}


juego();
