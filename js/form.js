var adicionapaciente = document.querySelector("#adicionar-paciente");
adicionapaciente.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteDoFormulario(form);

  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "" ;
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function exibeMensagensDeErro(erros) {
  let ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "" ;

  erros.forEach(function (erro) {
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome deve ser preenchido");
  }
  if (paciente.peso.length == 0) {
    erros.push("O peso deve ser preenchido");
  }
  if (paciente.altura.length == 0) {
    erros.push("A altura deve ser preenchida");
  }
  if (paciente.gordura.length == 0) {
    erros.push("O percentual de gordura deve ser preenchido");
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso inválido");
  }
  if (!validaAltura(paciente.altura)) {
    erros.push("Altura inválida");
  }
  if (!validaGordura(paciente.gordura)) {
    erros.push("Percentual de gordura inválido")
  }

  return erros;
}


