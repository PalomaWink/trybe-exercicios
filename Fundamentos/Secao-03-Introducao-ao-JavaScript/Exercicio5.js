/*Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let peca1 = 'Dama';

switch (peca1.toLowerCase()){
    case 'dama':
        console.log ('Movimenta na horizontal, vertical ou diagonal, sem limite de casas.');
    break;
    case 'torre':
        console.log ('Movimento na horizontal ou vertical, sem limites de casas.');
    break;
    case 'cavalo':
        console.log ('Movimento em L.');
    break;
    case 'bispo':
        console.log ('Movimento na diagonal sem limites de casas.');
    break;
    case 'rei':
        console.log ('Movimenta uma casa ao seu redor.');
    break;
    case 'peão':
        console.log ('Primeiro movimento até duas casas para frente, depois apenas um para frente ou diagonal (apenas para matar peças).');
    break;
}