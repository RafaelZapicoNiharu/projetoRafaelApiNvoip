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
            "diaNasc": '28',
            "anoNasc": '2003',
            "numero": "32999934287",
        },
    ]
}
form.addEventListener("submit", (event) => {
    event.preventDefault();                                 //fazer campo pra inserir a API key 
    let data = form.dataNascimento.value;
  console.log(data);
    pesquisaFuncionarios(data).forEach(aniversariante => {
        let mensagem = `Cara(o) ${aniversariante.nome}, nos da Impeto desejamos a voce um Feliz Aniversario!`
            + form.Mensagem.value;a
        mandarSMS(mensagem, aniversariante.numero);
  }); 
 

})
function mandarSMS(message, number) {  //função para enviar o sms
    const APIkey = "cfcd20849c853cfcd208495d565ef66e7"; //insira sua apikey aqui para poder utilizar o serviço
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
    let aniversariantes = [];
    let dataparte = data.split('-');
    console.log(dataparte);
    for (var funcionarios in exemplosFunc) {
        console.log(funcionarios);
    }
    console.log(aniversariantes);
    return aniversariantes;
}




