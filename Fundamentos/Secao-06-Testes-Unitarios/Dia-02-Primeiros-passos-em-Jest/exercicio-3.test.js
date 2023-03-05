const {encode, decode} = require('./exercicio-3')

describe('Testes com functions', () => {
  it('Verificando se a função encode e decode são funções', () => {
    expect(typeof encode).toBe('function')
    expect(typeof decode).toBe('function')
  });

  it('Verifica se a função encode e decode retorna os valores esperados', () => {
    expect(encode('Paralelepipedo')).toBe('P1r1l2l2p3p2d4');
    expect(encode('Ana Paula')).toBe('An1 P15l1');
    expect(decode('4v4')).toBe('ovo');
    expect(decode('l1s1nh1')).toBe('lasanha');
  });

  it('Verifica se para as demais letras e números, não há conversão', () => {
    expect(encode('pdwlghyt')).toBe('pdwlghyt')
    expect(decode('67890')).toBe('67890')
  });

  it('Verifica se a string passada como parâmetro tem o mesmo número de caracteres que a string retornada', () => {
    expect(encode('espaço').length).toBe(6)
    expect(decode('l1s1nh1').length).toBe(7)
  });
})