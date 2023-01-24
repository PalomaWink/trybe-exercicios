/* Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if.*/

const num1 = 25;
const num2 = 10;
const num3 = 4;

if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1){
    console.log(true);
} else {
    console.log(false);
}

const num4 = 9;
const num5 = 17;
const num6 = 21;

if (num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0){
    console.log(true);
} else {
    console.log(false);
}