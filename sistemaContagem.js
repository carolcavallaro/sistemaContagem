// Número par: escreva "par" e o número correspondente.
// Número ímpar: escreva "ímpar" e o número correspondente.
// Número zero: escreva "zero" e o número correspondente.

let listaAlunos = ["Carolina", "Diego", "Velma", "Pingado", "Jujuba", "Farofa", "Gemada", "Cocada", "Paçoca", "Pitaia", "Biscoito", "Pipoca"];

for (contador = 0;  contador <= listaAlunos.length; contador++) {
    if (contador == 0) {
        console.log(contador + " zero - " + listaAlunos[0]);
    } else if (contador % 2) {
        console.log(contador + " ímpar - " + listaAlunos[contador]);
    } else {
        console.log (contador + " par - " + listaAlunos[contador]);
    }
}