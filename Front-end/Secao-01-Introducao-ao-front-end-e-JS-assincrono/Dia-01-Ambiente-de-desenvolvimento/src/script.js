import { nanoid } from 'nanoid'

const passwordBtEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtEl.addEventListener('click', () => {
    displayPasswordEl.innerHTML = nanoid()
})