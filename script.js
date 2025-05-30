function validarForm(){
    const inputNome =document.querySelector("#txt_nome");
    const inputTurma =document.querySelector("#turma");
    if (inputNome.value == ""){
        exibirErr("erro");
        return false;
    };
     if (inputTurma.value == ""){
        exibirErr("erro");
        return false;
    };
    return true;
};
function salvar(){
    if( validarForm() == false){
        return exibirErr("erro");
    }
    const nome = document.querySelector("#txt_nome");
    const idade = document.querySelector("#idade");
    exibirMsg("salvo com sucesso")
   
};
function exibirMsg(msg){
    const divmsg = document.querySelector("#msg");
    divmsg.innerHTML = msg;
};
function exibirErr(msg){
    const divmsg = document.querySelector("#msg");
    divmsg.innerHTML = msg;
atividade();
}