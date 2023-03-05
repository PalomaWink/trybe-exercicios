const myFizzBuzz = require('./exercicio-2');

describe('Verifica se a função myFizzBuzz tem o retorno esperado', () => {
    it('Verifica se a função retorna os valores divisiveis por 3 e por 5', () => {
        expect(myFizzBuzz(30)).toBe('fizzbuzz')
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
        expect(myFizzBuzz(45)).toBe('fizzbuzz')
    });

    it('Verifica se a função retorna os valores divisiveis por 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
        expect(myFizzBuzz(12)).toBe('fizz')
        expect(myFizzBuzz(18)).toBe('fizz')
    });

    it('Verifica se a função retorna os valores divisiveis por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
        expect(myFizzBuzz(20)).toBe('buzz')
        expect(myFizzBuzz(25)).toBe('buzz')
    });

    it('Verifica se a função retorna os valores esperados para os números que NÃO são divisiveis por 3 nem por 5', () => {
        expect(myFizzBuzz(2)).toEqual(2)
        expect(myFizzBuzz(7)).toEqual(7)
        expect(myFizzBuzz(11)).toEqual(11)
    });

    it('Verifica se retorna falso ao passar um parâmetro diferente de número', () => {
        expect(myFizzBuzz('')).toBeFalsy()
    });
})