import './style.css';
import Swal from 'sweetalert2';

const ACCESS_TOKEN = '2489353407872709';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const btn = document.querySelector('#button');


// A quantidade máxima de herois da API é 731 e para simular um erro, foi colocado um valor maior da máxima
const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const id = randomId();
    fetch(`${BASE_URL}/${id}`)
        .then((result) => result.json())
        .then((data) => {
            img.src = data.image.url;
            name.innerHTML = data.name;
        })
        .catch((error) => Swal.fire({
            icon: 'error',
            text: error.message,
            title: 'Heroi não encontrado',
            closeButtonText: 'Certo',
        }));
});