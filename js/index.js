function fraseAle(){

    var opciones = [
    "La tristeza es también un tipo de defensa. -Ivo Andric","El verdadero dolor es el que se sufre sin testigos. -Marco Valerio Marcial","Vacía tu bolsillo en tu mente, y tu mente llenará tu bolsillo. -Benjamin Franklin","La violencia es el último recurso del incompetente. -Isaac Asimov","La muerte no es más que un sueño y un olvido. -Mahatma Gandhi","Ningún conocimiento humano puede ir más allá de su experiencia. -John Locke","El ignorante afirma, el sabio duda y reflexiona. -Aristóteles","Ojo por ojo y todo el mundo acabará ciego. -Mahatma Gandhi","El amor consuela como el resplandor del sol después de la lluvia. -William Shakespeare","Es tan corto el amor y tan largo el olvido. -Pablo Neruda "]

    var fraseSelec = opciones[Math.floor(Math.random() * opciones.length)];
    return fraseSelec;

}

console.log(fraseAle());


function colocaFrase() {
    document.getElementById("frase").innerHTML = fraseAle();
}
    colocaFrase();

   
