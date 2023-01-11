const form = document.forms[0];
const exemplosFunc = [ 
        {
            "nome": "Maria José",
            "mesNasc": '10',
            "diaNasc": '28',
            "anoNasc": '2003',
            "numero": "32998363728",
        }, {
            "nome": "Tifanny Wilson",
            "mesNasc": '09',
            "diaNasc": '03',
            "anoNasc": '2003',
            "numero": "3299934888",
        }, {
            "nome": "Patricia Almeida",
            "mesNasc": '10',
            "diaNasc": '28',
            "anoNasc": '2003',
            "numero": "32999934287",
        }
    ];

    
    form.Mensagem.addEventListener("keypress", function(evento) {
        
      if(!validaA(evento)){ evento.preventDefault};
      const maximo = 76;
      tamanhoDigitado = form.Mensagem.value.length;     
      if(tamanhoDigitado >= maximo) {
          evento.preventDefault();
          window.alert("Tamanho máximo atingido");

      }
     
        
    });
    function validaA(event){
        const letra = String.fromCharCode(event.keyCode);
        const padroes = '[a-zA-Z!-9]';
        if (letra.match(padroes)) {
        return true;
    }
    }
    

form.addEventListener("submit", (event) => {
    event.preventDefault();                                 //fazer campo pra inserir a API key 
    const data = form.dataNascimento.value;
  console.log(data);
   const chave = form.apeikey.value;
    pesquisaFuncionarios(data).forEach(aniversariante => {
        const mensagem = `Cara(o) ${aniversariante.nome}, nos da Niharu desejamos a voce um Feliz Aniversario!`
            + form.Mensagem.value;
        mandarSMS(mensagem, aniversariante.numero, chave);
  }); 
 

})
function mandarSMS(message, number, chave) {  //função para enviar o sms
    const APIkey = chave; //insira sua apikey aqui para poder utilizar o serviço
    const BaseURL = "https://api.nvoip.com.br/v2/sms";
    const URL = BaseURL + "?napikey=" + APIkey;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const bodyParameters = {
        numberPhone: number,
        message: message,
        flashSms: false
    };

    const parameters = { method: 'POST', headers: headers, body: JSON.stringify(bodyParameters) };
    fetch(URL, parameters)
        .then(function(response){
            console.log(response);
            window.alert("Mensagens enviadas!")
        }).catch(function (err) {
            console.error(err);
            window.alert("Mensagens não enviadas, ocorreu um erro!")
        });
}
function pesquisaFuncionarios(data) { //acha os funcionarios que fazem aniversario naquele dia
    const aniversariantes = [];
    const dataparte = data.split('-');
    console.log(dataparte);
     exemplosFunc.forEach(func => {

        if(func.mesNasc==dataparte[1]){
            if(func.diaNasc==dataparte[2]){
                aniversariantes.push(func);
            }
        }
         
     
   });
    console.log(aniversariantes);
    return aniversariantes;
}




