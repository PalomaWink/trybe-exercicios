/* Desenvolva cada exercício a seguir utilizando funções:
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

const a = 10;
const b = 15;

function adicao(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
function modulo(a, b) {
    return a % b;
}
console.log(adicao(a, b));
console.log(subtracao(a, b));
console.log(multiplicacao(a, b));
console.log(divisao(a, b));
console.log(modulo(a, b));

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const val1 = 12;
const val2 = 27;

function maiorNumero(num1, num2) {
    if(num1 > num2){
        return num1 + ' é o maior';
    } else{
        return num2 + ' é o maior';
    }
}
console.log(maiorNumero(val1, val2))

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const num1 = 34;
const num2 = 69;
const num3 = 45;

function maiorDeTresValores(a, b, c) {
    if(a > b && a > c){
        return a + ' é o maior'
    } else if(b > a && b > c){
        return b + ' é o maior'
    } else{
        return c + ' é o maior'
    }
}
console.log(maiorDeTresValores(num1, num2, num3));

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function posNeg(a) {
    if(a > 0){
        return 'positivo'
    } else if(a < 0){
        return 'negativo'
    } else{
        return 'zero'
    }
}
console.log(posNeg(0));
console.log(posNeg(10));
console.log(posNeg(-2));
console.log(posNeg(0.5));

/*Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/
function verNum(x, y, z) {
    if(x < 0 || y < 0 || z < 0){
        return true;
    }
}
function triangulo(a, b, c){
    if(a + b + c == 180){
        return true;
    } else if (verNum(a, b, c)){
        return 'Inválido';
    } else{
        return false;
    }
}
console.log(triangulo(60, 60, 60));
console.log(triangulo(90, 10, 18));
console.log(triangulo(-10, 60, 60));