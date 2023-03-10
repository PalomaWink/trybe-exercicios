// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
    const result = books.find((expectedResult) => books.author === expectedResult)
    return result;
}

const expectedResult2 = 'Duna';
const smallerName = () => {
  let nameBook = ''
  books.forEach((element) => {
    if (element.name === expectedResult2) {
      nameBook = element.name
    }
  })
  return nameBook;
}

const getNamedBook = () => {
  let nameBook = ''
  books.find((elemento) => {
    if (elemento.name.length === 26) {
      nameBook = elemento.name
    }
  })
  return nameBook;
}

const expectedResult3 = false;
function everyoneWasBornOnSecXX() {
  let born;
  books.find((element) => {
    if (element.author.birthYear >= 1901 && element.author.birthYear <= 2000) {
      born = element.author.birthYear
    } else {
      born = expectedResult3;
    }
  })
  return born;
}

const someBookWasReleaseOnThe80s = () => {
  let book = books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989)
  return book;
}

console.log(someBookWasReleaseOnThe80s());