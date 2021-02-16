//querySelector indica onde as informações devem ser buscadas dentro de seus contextos.
//textContent manipula especificamente o conteúdo buscando ou inserindo-o
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparececida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

  let paciente = pacientes[i];
  let peso = paciente.querySelector(".info-peso").textContent;
  let altura = paciente.querySelector(".info-altura").textContent;

  if (peso <= 0 || peso >= 800 || altura <= 0 || altura >= 3) {
    paciente.querySelector(".info-imc").textContent = "Peso ou altura inválidos !";
    paciente.classList.add("paciente-invalido");
  } else {
    let imc = (peso / (altura * altura)).toFixed(1);
    pacientes[i].querySelector(".info-imc").textContent = imc;
  }
}
console.log(peso);

var adicionapaciente = document.querySelector("#adicionar-paciente");
adicionapaciente.addEventListener("click",function(event){
    event.preventDefault();
    console.log("Botão pressionado");
} )

