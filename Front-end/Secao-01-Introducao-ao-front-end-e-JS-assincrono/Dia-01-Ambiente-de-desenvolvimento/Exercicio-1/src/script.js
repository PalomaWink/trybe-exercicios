import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const copyBtn = document.getElementsByClassName('copy')[0];

passwordBtEl.addEventListener('click', () => {
    displayPasswordEl.innerHTML = nanoid();
});

copyBtn.addEventListener('click', () => {
    copy(displayPasswordEl.innerText);
    alert('Senha copiada!');
});