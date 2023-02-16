//Requisito 3
const botaoEntrar = document.getElementById('botao');
const enviarDados = (event) => {
    const email = document.getElementsByClassName('email')[0];
    const senha = document.getElementsByClassName('senha')[0];
    event.preventDefault();
    console.log(email);
    if(email.value === 'tryber@teste.com' && senha.value === '123456'){
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos')
    }
}

botaoEntrar.addEventListener('click', enviarDados);