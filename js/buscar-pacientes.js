var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
  console.log("buscando pacientes...");
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function () {
    let erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      console.log(xhr.responseText);
      let resposta = xhr.responseText;
      let pacientes = JSON.parse(resposta);
      console.log(pacientes);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      erroAjax.classList.remove("invisivel");
    }
  });
  xhr.send();
});
