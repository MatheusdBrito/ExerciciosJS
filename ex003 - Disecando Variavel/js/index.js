const Botao = document.querySelector("#enviar");

Botao.addEventListener('click', function(e){
    e.preventDefault();
    var palavra = document.getElementById('palavra').value;
    
    var verificaTipoprimitivo = typeof palavra;
    var PrinttipoPrimitivo = document.getElementById('tipodavariavel').innerHTML = verificaTipoprimitivo;

    var verificaEspacos = palavra.indexOf(' ') >= 0;
    var PrintEspacos = document.getElementById('espacos').innerHTML = verificaEspacos;

    var verificaNumero = !isNaN(palavra.replace(/\s/g,''));//Função retorna o resultado amigavel para a funçao isNan// 'Cachorro' não é um numero == true -- '5' não é um numero = false
    var printNumero = document.getElementById('numero').innerHTML = verificaNumero;

    const regex = /[0-9]/;
    let verificaAlfabetico = !regex.test(palavra);
    var printAlfabrtico = document.getElementById('alfabetico').innerHTML = verificaAlfabetico;
    
    function verificaSomenteMaiusculas(palavra){
        return /^[A-Z]+$/.test(palavra.replace(/\s/g,''));
    }
    document.getElementById('Maiusculo').innerHTML = verificaSomenteMaiusculas(palavra);

    function verificaSomenteMinusculas(palavra){
        return /^[a-z]+$/.test(palavra.replace(/\s/g,''));
    }
    document.getElementById('Minuscula').innerHTML = verificaSomenteMinusculas(palavra);

    function verificaCapitalizado(palavra){
        return /^[A-Z][a-z]*$/.test(palavra);
    }
    document.getElementById('Capitalizado').innerHTML = verificaCapitalizado(palavra);
})