import './style.css';
import validator from 'validator';

const inputField = document.querySelector('#value');
const selectField = document.querySelector('#options');
const btnValidation = document.querySelector('#button');
const textField = document.querySelector('#answer')

btnValidation.addEventListener('click', (event) => {
    event.preventDefault();

    const campos = {
        cpf: validator.isTaxID(inputField.value, 'pt-BR'),
        email: validator.isEmail(inputField.value),
    };
    textField.innerHTML = `A validação retornou ${campos[selectField.value]}`
})
