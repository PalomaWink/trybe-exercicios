const currentHour = 17;
let message;

if (currentHour >= 22){
    message = "Não deveriamos comer nada, é hora de dormir";
}
else if (currentHour >= 18){
    message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >= 14 || currentHour < 18){
    message = 'Hora do almoço!!!';
}
else {
    message = 'Hmmm, cheiro de café recém-passado!';
}

console.log (message);
