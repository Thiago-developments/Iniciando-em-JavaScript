
//querySelector indica onde as informações devem ser buscadas dentro de seus contextos.
//textContent manipula especificamente o conteúdo buscando ou inserindo-o 
document.querySelector(".titulo").textContent = "Aparececida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
if( peso <= 0 || peso >=800 || altura <= 0 ||altura >= 3){
    paciente.querySelector(".info-imc").textContent = ("Peso ou altura inválida");
}else{
    var imc = peso /(altura*altura);
    paciente.querySelector(".info-imc").textContent = imc;
}



