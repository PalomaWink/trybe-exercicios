/*🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/

const ladoA = 90;
const ladoB = 60;
const ladoC = 100;

if ((ladoA + ladoB + ladoC) == 180){
    console.log (true);
}
else if ((ladoA + ladoB + ladoC) != 180){
    console.log (false);
}
else {
    console.log ('Inválido!')
}