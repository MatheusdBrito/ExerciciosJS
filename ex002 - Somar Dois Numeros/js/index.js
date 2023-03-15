const Somar = document.getElementById('btn_somar');

Somar.addEventListener('click', function(e){
    e.preventDefault();

    var num01 = Number(document.getElementById("num01").value);
    var num02 = Number(document.getElementById("num02").value);
    var resultado = document.getElementById('resultado');

    
    var printResultado = num01 + num02;

    resultado.innerHTML = `${printResultado}`
})