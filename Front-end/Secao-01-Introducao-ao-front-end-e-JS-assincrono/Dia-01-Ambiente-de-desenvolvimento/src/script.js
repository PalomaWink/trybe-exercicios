import { nanoid } from 'nanoid'
import './style.css'

const passwordBtEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtEl.addEventListener('click', () => {
    displayPasswordEl.innerHTML = nanoid();
});