/* 🚀 Lidando com Arrays
Iremos utilizar esse array para realizar os próximos exercícios.
Copiar
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 -> Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let number of numbers){
    console.log (number);
}

//2 -> Some todos os valores contidos no array e imprima o resultado;
let sum = 0;

for (let num of numbers){
    sum = (sum + num)
}

/* for (let index = 0; index < numbers.length; index += 1){
    sum = (sum + numbers[index]);
} */
console.log (sum);

//3 -> Calcule e imprima a média aritmética dos valores contidos no array;
//      -> A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let media = 0;

for (let _num of numbers){
    media = numbers.length;
}
console.log (sum / media);

//4 -> Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (sum / media > 20){
    console.log ('Valor maior que 20');
}
else{
    console.log('Valor menor do que 20')
}

//5 -> Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (maiorNumero < numbers[index]){
        maiorNumero = numbers[index]
    }
}
console.log (maiorNumero);

//6 -> Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let numImpar = [];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 != 0){
        numImpar.push(numbers[index]);
    }
}
if (numImpar.length === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log("Valores ímpares: " + numImpar);
}

//7 -> Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (menorNumero > numbers[index]){
        menorNumero = numbers[index]
    }
}
console.log (menorNumero);

//8 -> Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arrayNovo = [];

for(let index = 1; index <= 25; index += 1){
    arrayNovo.push(index);
}
console.log(arrayNovo);

//9 -> Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2
for(let index = 1; index <= 25; index += 1){
    console.log(arrayNovo[index-1] / 2);
}
