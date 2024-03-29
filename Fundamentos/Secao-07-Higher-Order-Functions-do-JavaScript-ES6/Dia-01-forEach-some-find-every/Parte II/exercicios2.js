/* Crie uma função que retorne o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

Crie uma função que retorne o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0. */

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };

  const damageDragon = () => dragon.damage = Math.floor(Math.random(15) * dragon.strength);

  const damageWarrior = () => {
    let minDmg = warrior.strength
    let maxDmg = warrior.strength * warrior.weaponDmg
    warrior.damage = Math.floor(Math.random() * (minDmg * maxDmg));
  }

  const mageTurn = () => {
    if (mage.mana < 15) {
      turnMage.damage = 'Mana insuficiente';
      turnMage.mana = 0
    };
    let turnMage = {
      damage: Math.floor(Math.random(mage.intelligence) * (mage.intelligence * 2)),
      mana: (mage.mana - 15),
    };
    return turnMage;
  };

  const gameActions = {
    warriorTurn: (damageWarrior) => {
      const warriorAtack = damageWarrior(warrior);
      dragon.healthPoints -= warriorAtack;
      warrior.damage = warriorAtack;
    }
  };
  
 console.log(gameActions.warriorTurn(damageWarrior));


  module.export = {mage, warrior, dragon, mageTurn};
  module.export = damageDragon, damageWarrior;
  