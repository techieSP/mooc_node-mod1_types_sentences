// Type your code here
//╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
//║ 2) Línea con el siguiente saludo: “Good morning/afternoon/night, it’s xxx o’clock”
//║     0-23. El saludo debe ser: Buenas noches(22h-6h)    Buenos días(7h-12h)   Buenas tardes(13h-22h).                            
//║ 4) En la siguiente línea: Number PI with 6 decimals: (Pi con 6 decimales)
//║ 6) La tabla con los números enteros de 0 a 22 en decimal, hexadecimal, octal y binario:
//║  //╔═════════════════════════════════════╗
//║  //║21 dec = 15 hex = 25 oct = 10101 bin ║
//║  //╚═════════════════════════════════════╝
//║   Cada línea de la tabla debe generarse con una función que recibe solo el número decimal
//║   como parámetro y muestra por consola la línea con el valor representado en decimal,
//║   hexadecimal, octal y binario. Utilizar una plantilla de string ES6 para generar la línea.
//║ 7) Una línea en blanco
//║ 8) Una tabla similar de 1 a 21, pero solo con los impares no incluidos en el intervalo de 10 a 20: Realizar el programa añadiendo una sentencia if…else en el bucle anterior, de forma que
//║ 10) La siguiente frase utilizando caracteres escapados para representar hola en chino:
//║  Hi in Chinese is written as: 嗨，你好吗.
//║  嗨，你好吗 se corresponde con los siguientes códigos UNICODE escapados:\u55e8\uff0c\u4f60\u597d\u5417
//║ 12) Finalizar con la siguiente línea: “The program has finished”
//╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝

let saludoF_2 = ()=>{
    let saludotxt = '';
    let hora = new Date().getHours();
    if (hora <= 7 ){
        saludotxt = 'Good ningh';
    }
    else if ( hora <= 13 ){
        saludotxt = 'Good morning';
    }
    else if ( hora <= 22 ){
        saludotxt = 'Good afthernoon';
    }else{
        saludotxt = 'Good ningh';
    }
    console.log('\n'+saludotxt+", it's "+hora+" o'clock");
}
let numPi_4 = ()=>{
    //console.log(Math.PI.toFixed(6));
    console.log(`Number PI with 6 decimals: ` + Math.PI.toFixed(6));
}
let unNum4Bases = (nbaseD)=>{// Esta funcion se utiliza en los ejercicios 6 y 8
    console.log( ` ${nbaseD.toString(10)} dec = ${nbaseD.toString(16)} hex = ${nbaseD.toString(8)} oct = ${nbaseD.toString(2)} bin`);
}

let tablaEjercicio_6 = (primerNum, ultimoNum) =>{
    for (i=primerNum ; i<= ultimoNum; i++){
        unNum4Bases(i);
    }
}

let tablaEjercicio_8 = (primerNum, ultimoNum) =>{
    for (i=primerNum ; i<= ultimoNum; i++){
        if (i%2!==0 && (i < 10 || i > 20)){
            unNum4Bases(i);
        }
    }
}
let saludo_10 = ()=>{
    console.log('Hi in Chinese is written as: \u55e8\uff0c\u4f60\u597d\u5417.');
}

let despedida_12 = ()=>{
    console.log('The program has finished');
}

saludoF_2();
//console.log();
numPi_4();
//console.log();
tablaEjercicio_6(0,22);
//console.log();
tablaEjercicio_8(1,21)
//console.log();
saludo_10();
//console.log();
despedida_12();

return 'A ver si veo esto en el output de los test';