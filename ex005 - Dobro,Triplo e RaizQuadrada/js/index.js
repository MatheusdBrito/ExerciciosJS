const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(e){
    e.preventDefault();
    let numeroDigitado = document.getElementById('numeroUsuario').value;
    
    let printDobro = document.getElementById('dobro'). innerHTML = `O dobro de ${numeroDigitado} é: ${numeroDigitado * 2}.`;

    let printTriplo = document.getElementById('triplo').innerHTML = `O triplo de ${numeroDigitado} é: ${numeroDigitado * 3}.`;

    let printRaizQuadrada = document.getElementById('raizQuadrada').innerHTML = `A raiz quadrada de ${numeroDigitado} é: ${(Math.sqrt(numeroDigitado).toFixed(2)).replace('.', ',')}`;

    //Animacao Onclick - 
    let WhiteBox = document.querySelectorAll('.box');
    WhiteBox[0].style.top = "120px";
})