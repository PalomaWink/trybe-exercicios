/* Com base na leitura que fez, faça os exercícios:

1) Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for (let x = 1; x < numbers.length; x += 1) {
    for (let y = 0; y < x; y += 1) {
        if (numbers[x] < numbers[y]) {
            let temp = numbers[x];
            numbers[x] = numbers[y];
            numbers[y] = temp;
        }
    }
}
console.log(numbers);

/*2)Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for (let x = 1; x < numbers2.length; x += 1) {
    for (let y = 0; y < x; y += 1) {
        if (numbers2[x] > numbers2[y]) {
            let temp = numbers2[x];
            numbers2[x] = numbers2[y];
            numbers2[y] = temp;
        }
    }
}
console.log(numbers2);


/*3)Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
              [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]*/

let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let numbers4 = [];

for (let index = 0; index < numbers3.length; index += 1) {
    if(numbers3[index] === Number){
        let temp = numbers3[index+1]
        numbers4.push(numbers3[index] * temp);
    }
    else{
        numbers4.push(numbers3[index] * 2);
    }
}
console.log(numbers4);