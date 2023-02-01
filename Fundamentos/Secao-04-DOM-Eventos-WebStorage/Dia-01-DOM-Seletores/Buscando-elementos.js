const ex1 = document.getElementById('elementoOndeVoceEsta'); //Acessei o elemento
        const pai = ex1.parentElement; //acessando o parentElement eu acesso o elemento pai, a partir de onde eu estava
        pai.style.color = 'pink';//acessando ele eu consigo atribuir caracteristicas de CSS
        
        const primeiroFilhoDoFilho = ex1.firstElementChild;
        primeiroFilho.innerText = 'primeiroFilhoDoFilho';

        const primeiroFilho = pai.firstElementChild;

        const primeiroFilho2 = ex1.previousElementSibling;

        const text = ex1.nextSibling;

        const terceiroFilho = ex1.nextElementSibling;

        const terceiroFilho2 = pai.lastElementChild.previousElementSibling;