const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");

let tempoRestanteSegundos = 3 * 60 * 60 + 42 * 60 + 34;

function atualizarContador() {
    const diasRestantes = Math.floor(tempoRestanteSegundos / (24 * 3600));
    const horasRestantes = Math.floor((tempoRestanteSegundos % (24 * 3600)) / 3600);
    const minutosRestantes = Math.floor((tempoRestanteSegundos % 3600) / 60);
    const segundosRestantes = tempoRestanteSegundos % 60;

    diasElemento.textContent = String(diasRestantes).padStart(2, "0");
    horasElemento.textContent = String(horasRestantes).padStart(2, "0");
    minutosElemento.textContent = String(minutosRestantes).padStart(2, "0");
    segundosElemento.textContent = String(segundosRestantes).padStart(2, "0");

    if (tempoRestanteSegundos > 0) tempoRestanteSegundos--;
}

setInterval(atualizarContador, 1000);
atualizarContador();