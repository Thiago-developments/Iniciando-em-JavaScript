//querySelector indica onde as informações devem ser buscadas dentro de seus contextos.
//textContent manipula especificamente o conteúdo buscando ou inserindo-o
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparececida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  
  let paciente = pacientes[i];
  let peso = paciente.querySelector(".info-peso").textContent;
  let altura = paciente.querySelector(".info-altura").textContent;
  let pesoValido = validaPeso(peso);
  let alturaValida = validaAltura(altura);

  if (!pesoValido && !alturaValida) {
    paciente.querySelector(".info-imc").textContent =
      "Peso e altura inválidos !";
    paciente.classList.add("paciente-invalido");
  } else if (!alturaValida) {
    paciente.querySelector(".info-imc").textContent = "Altura inválida !";
    paciente.classList.add("paciente-invalido");
  } else if (!pesoValido) {
    paciente.querySelector(".info-imc").textContent = "Peso inválido !";
    paciente.classList.add("paciente-invalido");
  }else{
    let imc = calculaImc(peso, altura);
    pacientes[i].querySelector(".info-imc").textContent = imc;
  }
  /*if (peso <= 0 || peso >= 800 || altura <= 0 || altura >= 3) {
    paciente.querySelector(".info-imc").textContent = "Peso ou altura inválidos !";
    paciente.classList.add("paciente-invalido");
  } else {
    let imc = calculaImc(peso, altura);
    pacientes[i].querySelector(".info-imc").textContent = imc;
  }*/
}

function validaPeso(peso) {
  if (peso > 0 && peso < 800) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura < 3) {
    return true;
  } else {
    return false;
  }
}

function validaGordura(gordura){
  if (gordura > 0 || gordura <= 90) {
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = (peso / (altura * altura)).toFixed(2);

  return imc;
}
