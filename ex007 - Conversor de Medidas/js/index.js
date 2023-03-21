const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(e){
    e.preventDefault();

    let medidaUsuario = Number(document.getElementById('medida').value);

    let km = document.getElementById('km');//Quilômetro 
    let hm = document.getElementById('hm');//Hectômetro 
    let dam = document.getElementById('dam');//Decâmetro 
    let dm = document.getElementById('dm');//Decímetro 
    let cm = document.getElementById('cm');//Centímetro 
    let mm = document.getElementById('mm');//Milímetro 

    document.getElementById('Medida_US').innerHTML = `${medidaUsuario} metros, equivale há:`
    km.innerHTML = `${Number(medidaUsuario / 1000)}km (Quilômetros)`;
    hm.innerHTML = `${Number(medidaUsuario / 100)}hm (Hectômetros)`;
    dam.innerHTML = `${Number(medidaUsuario / 10)}dam (Decâmetros)`;
    dm.innerHTML = `${Number(medidaUsuario * 10)}dm (Decímetros)`;
    cm.innerHTML = `${Number(medidaUsuario * 100)}cm (Centímetros)`;
    mm.innerHTML = `${Number(medidaUsuario * 1000)}mm (Milímetros)`;
})