/* /* O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24 
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.*/

let fatorial = 5;
let resultado = fatorial;
for (let i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);
