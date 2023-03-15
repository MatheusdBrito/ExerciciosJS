var opX = 0;

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    opX = 0;
}

function operations(num){
    if(opX == 0){
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        opX = 1;
    }else{
        var numero = document.getElementById('resultado').innerHTML = 'Função não disponivel..'
        opX = 0;
    }
}

function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        opX = 0;
    }else(
        document.getElementById('resultado').innerHTML = 'Nada para Calcular...'
    )
}
