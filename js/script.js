const form = document.forms[0];
const exemplosFunc = { //lista de funcionarios para exemplo
    "funcionarios": [
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
            "diaNasc": '29',
            "anoNasc": '2003',
            "numero": "3299934287",
        },
    ]
}
form.addEventListener("submit", (event) => {
    event.preventDefault();                                 //fazer campo pra inserir a API key 
   // let data = form.dataNascimento.value;
 // console.log(data);
  //  pesquisaFuncionarios(data).forEach(aniversariante => {
    //    let mensagem = `Cara(o) ${aniversariante.nome}, nos da Impeto desejamos a voce um Feliz Aniversario!`
        //    + form.Mensagem.value;
       // mandarSMS(mensagem, '32998363728');
  //  }); 
  let mensagem = "tubarao te amo";
  let numero = "(32)998363728";
  mandarSMS(mensagem, numero);
})
function pesquisaFuncionarios(data) { //acha os funcionarios que fazem aniversario naquele dia
    let aniversariantes = [];
    let dataparte = data.split('-');
    for (var funcionarios in exemplosFunc) {
        if (funcionarios.mesNasc == dataparte[1]) {
            if (funcionarios.diaNasc == dataparte[2]) {
                aniversariantes.push(funcionarios);
            }
        }
    }
    return aniversariantes;
}
function mandarSMS(mensagem, numero) {  //função para enviar o sms
    let APIkey = "cfcd20849c853cfcd208495d565ef66e7"; //insira sua apikey aqui para poder utilizar o serviço
    let BaseURL = "https://api.nvoip.com.br/v2/sms";
    let URL = BaseURL + "?napikey=" + APIkey;
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    var bodyParameters = {
        numberPhone: numero,
        message: mensagem,
        flashSms: false
    };
    var parameters = { method: 'POST', headers: headers, body: JSON.stringify(bodyParameters) };
    fetch(URL, parameters)
        .then(resolve => {
            console.log(resolve);
            window.alert("Mensagens enviadas!")
        }).catch(function (erro) {
            console.error(erro);
            window.alert("Mensagens não enviadas, ocorreu um erro!")
        });
}




