// Número par: escreva "par" e o número correspondente.
// Número ímpar: escreva "ímpar" e o número correspondente.
// Número zero: escreva "zero" e o número correspondente.

let listaAlunos = 10;

for (contador = 0;  contador <= listaAlunos; contador++) {
    if (contador == 0) {
        console.log(contador + " zero");
    } else if (contador % 2) {
        console.log(contador + " ímpar");
    } else {
        console.log (contador + " par");
    }
}