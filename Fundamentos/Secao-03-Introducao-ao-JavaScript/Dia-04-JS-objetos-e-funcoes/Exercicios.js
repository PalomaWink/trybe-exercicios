/* 🚀 Exercícios - objetos e for/in
Usando o objeto abaixo, faça os exercícios a seguir: */

/*Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console: */

/* Bem-vinda, Margarida */

/* Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console: */

/* {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  } */

/*  Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: */

/* personagem
origem
nota
recorrente */

/* Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: */

/* Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim */

/* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics # 178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console: */

/* Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics # 178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
 */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log(`Bem vinda, ${info.personagem}!`);

info['recorrencia'] = 'Sim'

for (let number in info){
  console.log(number);
};

for (let number in info){
  console.log(info[number]);
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics # 178',
  nota: 'O último MacPatinhas',
  recorrencia: 'Sim',
}

for (let properties in info){
  if (properties === 'recorrencia' && info.recorrencia === 'Sim' && info2.recorrencia === 'Sim'){
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]); 
  }
};


