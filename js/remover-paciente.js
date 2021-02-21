var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
var ct = 0;
tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function () {
    event.target.parentNode.remove();
  }, 1000);

  ct++;
  console.log("Fui clicado" + " " + ct);
});

/*pacientes.forEach(function (paciente) {
  paciente.addEventListener("dblclick", function(){
    this.remove();
  });
});
*/
