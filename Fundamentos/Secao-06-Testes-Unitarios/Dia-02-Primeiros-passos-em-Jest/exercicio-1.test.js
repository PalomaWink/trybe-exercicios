const myRemove = require('./exercicio-1');

describe('Verificando a função myRemove', () => {
  it('Verificando se a chamada da função traz o retorno esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ])
  });

  it('Verifique se a chamada da função NÃO retorna', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4])
  });
})