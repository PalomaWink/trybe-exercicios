const mage = require('./exercicios2')
const warrior = require('./exercicios2')
const dragon = require('./exercicios2')
const damageWarrior = require('./exercicios2')
const damageDragon = require('./exercicios2')
const mageTurn = require('./exercicios2')

/* Crie a primeira HOF que compõe o objeto gameActions.
Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior. */

const gameActions = {
  warriorTurn: (damageWarrior) => {
    const warriorAtack = damageWarrior(warrior)
    dragon.healthPoints -= warriorAtack
    warrior.damage = warriorAtack;
  }
};

console.log(gameActions.warriorTurn(damageWarrior));