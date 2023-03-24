
         
        var print_preco_dollar = document.getElementById('preco_dollar');
        var print_preco_euro = document.getElementById('preco_euro');
        var print_bitcoin_preco = document.getElementById('preco_bitcoin');
        

        //Função para Pegar o Preço das Moedas com a Data Atual
        //URL da API
        const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL';
        fetch(url)
        .then(response => response.json())
        .then(moedaspreco => {
 
            let dolar_preco = Number(moedaspreco.USDBRL.bid);
            let euro_preco = Number(moedaspreco.EURBRL.bid);
            let biticoin_preco = Number(moedaspreco.BTCBRL.bid);
 
            print_preco_dollar.innerHTML = 'R$ </br>' + (dolar_preco.toFixed(2)).replace('.',',');
            print_preco_euro.innerHTML = 'R$ </br>' + (euro_preco.toFixed(2)).replace('.',',');
            print_bitcoin_preco.innerHTML = 'R$ </br>' + (biticoin_preco.toFixed(2)).replace('.',',');
            })
         
        
        const enviar = document.getElementById('enviar');
        
    
        var data = new Date();
        var dataAtual = String(`${data.getFullYear()}-${String(data.getMonth()).padStart(2,'0')}-${String(data.getDate()).padStart(2,'0')}`);//Pega a data do Usuario, além de deixar ela pronta para o html
        var data_usuario = document.getElementById('data_usuario');

        function setarData(){
            data_usuario.value = dataAtual;//Seta a data do Input Type Date - Como a data atual do Usuario, por padrão

            //Função para deixar o Usuario Setar a Data da Cotação
            enviar.addEventListener('click', function(e){
                e.preventDefault();
                dataAtual = (document.getElementById('data_usuario').value).replace(/[^0-9]/g, '');
                console.log(dataAtual)

                let urlUsdBrl = `https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=${dataAtual}&end_date=${dataAtual}`;
                fetch(urlUsdBrl)
                    .then(response => response.json())
                    .then(moedasDiaPreco => {
                        let dolar_preco = Number(moedasDiaPreco[0].bid);
                        print_preco_dollar.innerHTML ='R$ </br>' +(dolar_preco.toFixed(2)).replace('.',',');
                    })

                let urlEurBrl = `https://economia.awesomeapi.com.br/json/daily/EUR-BRL/?start_date=${dataAtual}&end_date=${dataAtual}`;
                fetch(urlEurBrl)
                    .then(response => response.json())
                    .then(moedasDiaPreco => {
                        let euro_preco = Number(moedasDiaPreco[0].bid);
                        print_preco_euro.innerHTML = 'R$ </br>' +(euro_preco.toFixed(2)).replace('.',',');
                    })

                let urlBtcBrl = `https://economia.awesomeapi.com.br/json/daily/BTC-BRL/?start_date=${dataAtual}&end_date=${dataAtual}`;
                fetch(urlBtcBrl)
                    .then(response => response.json())
                    .then(moedasDiaPreco => {
                        let biticoin_preco = Number(moedasDiaPreco[0].bid);
                        print_bitcoin_preco.innerHTML = 'R$ </br>' + (biticoin_preco.toFixed(2).replace('.',','))
                    })
                })
            }
        setarData();

        