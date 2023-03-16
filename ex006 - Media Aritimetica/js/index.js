const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(e){
    e.preventDefault();

    let nota01 = Number(document.getElementById('nota01').value);
    let nota02 = Number(document.getElementById('nota02').value);

    let resposta = document.getElementById('media').innerHTML = `Sua média é: ${((nota01 + nota02)/2).toFixed(2)}`
})