/* Considere o array de strings abaixo: */

let array = ['java', 'javascript', 'python', 'html', 'css'];

/* Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra. 
- Percorrer o array
- Descobrir a maior palavra 
- Imprimir a maior palavra 

- Imprimir a menor palavra
*/
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index += 1){
        if (array[index].length > maiorPalavra.length){
            maiorPalavra = array[index];
        }
}
console.log(maiorPalavra);

let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1){
        if (array[index].length < menorPalavra.length){
            menorPalavra = array[index];
        }
}
console.log(menorPalavra);

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for (let i = 2; i <= 50; i += 1){
    let ePrimo = true;
    for (let j = 2; j < i; j += 1){
        if (i % j == 0){
            ePrimo = false;
        }
    }
    if (ePrimo){
        maiorPrimo = i;
    }
}
console.log(maiorPrimo);