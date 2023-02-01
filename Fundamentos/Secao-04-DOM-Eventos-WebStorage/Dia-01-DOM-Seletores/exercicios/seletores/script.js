const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const taskEmergenci = document.getElementsByClassName('emergency-tasks')[0];
taskEmergenci.style.backgroundColor = 'rgb(255, 218, 185)';

const faixa = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < faixa.length; i += 1){
    faixa[i].style.backgroundColor = 'rgb(165, 0, 243)';
}

const taskEmergenciImp = document.querySelector('.no-emergency-tasks');
taskEmergenciImp.style.backgroundColor = 'rgb(251, 236, 93)';

const segFaixa = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < segFaixa.length; i += 1){
    segFaixa[i].style.backgroundColor = 'rgb(32, 178, 170)';
}

const foot = document.getElementById('footer-container');
foot.style.backgroundColor = 'rgb(26, 58, 55)';