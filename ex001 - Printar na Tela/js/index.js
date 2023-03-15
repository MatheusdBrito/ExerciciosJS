const botao = document.getElementById("enviar");

botao.addEventListener('click', function(e){
    e.preventDefault();

    var nome = document.getElementById('nome').value;

    document.getElementById('resposta').innerHTML = `É um prazer te conhecer ${nome}`;
    
})