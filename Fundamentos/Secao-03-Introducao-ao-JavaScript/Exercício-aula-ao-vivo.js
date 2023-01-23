//Exercício da aula ao vivo 23/01/2023

let num1 = 10;
let num2 = 10;
let total;

if (num1 == num2){
    total = num1 + num2;
}else {
    total = num1 * num2;
}
console.log (total)

//Bônus

total = num1 == num2 ? num1 + num2 : num1 * num2
console.log (total)

//Bônus
switch (num1 == num2){
    case true:
        console.log (num1 + num2);
    break;
    case false:
        console.log (num1 * num2);
    break;
}
