let hpNaruto = 320;
let chakraNaruto = 120;

let hpSasuke = 280;
let chakraSasuke = 120;

let turnoNaruto = true;
let juegoTerminado = false;

// ACTUALIZAR
function actualizar() {
  document.getElementById("naruto-hp").textContent = hpNaruto;
  document.getElementById("naruto-chakra").textContent = chakraNaruto;

  document.getElementById("sasuke-hp").textContent = hpSasuke;
  document.getElementById("sasuke-chakra").textContent = chakraSasuke;

  document.getElementById("naruto-hp-barra").style.width = (hpNaruto / 320 * 100) + "%";
  document.getElementById("naruto-chakra-barra").style.width = (chakraNaruto / 120 * 100) + "%";

  document.getElementById("sasuke-hp-barra").style.width = (hpSasuke / 280 * 100) + "%";
  document.getElementById("sasuke-chakra-barra").style.width = (chakraSasuke / 120 * 100) + "%";
}

// LOG
function escribir(texto) {
  let log = document.getElementById("log");
  let linea = document.createElement("div");
  linea.textContent = texto;
  log.appendChild(linea);
}

// ACCIONES
function accion(tipo) {

  if (turnoNaruto == false || juegoTerminado) return;

  // RECARGAR
  if (tipo == "recargar") {
    chakraNaruto = Math.min(chakraNaruto + 40, 120);
    escribir("Naruto recargó chakra");
    actualizar();
    turnoNaruto = false;
    setTimeout(turnoSasuke, 700);
    return;
  }

  // ATAQUES
  if (tipo == "golpe" && chakraNaruto >= 10) {
    chakraNaruto -= 10;
    hpSasuke = Math.max(0, hpSasuke - 20);
    escribir("Naruto usó golpe");
  }

  if (tipo == "kunai" && chakraNaruto >= 18) {
    chakraNaruto -= 18;
    hpSasuke = Math.max(0, hpSasuke - 28);
    escribir("Naruto lanzó kunai");
  }

  if (tipo == "jutsu" && chakraNaruto >= 30) {
    chakraNaruto -= 30;
    hpSasuke = Math.max(0, hpSasuke - 40);
    escribir("Naruto usó Rasengan");
  }

  actualizar();

  // GANADOR
  if (hpSasuke <= 0) {
    escribir("Naruto gana");
    juegoTerminado = true;
    return;
  }

  turnoNaruto = false;
  setTimeout(turnoSasuke, 700);
}

// TURNO SASUKE
function turnoSasuke() {

  if (juegoTerminado) return;

  if (chakraSasuke < 15) {
    chakraSasuke = Math.min(chakraSasuke + 40, 120);
    escribir("Sasuke recarga chakra");
  } else {
    let random = Math.random();

    if (random < 0.5) {
      chakraSasuke -= 15;
      hpNaruto = Math.max(0, hpNaruto - 18);
      escribir("Sasuke usó Chidori");
    } else {
      chakraSasuke -= 10;
      hpNaruto = Math.max(0, hpNaruto - 15);
      escribir("Sasuke pateó");
    }
  }

  actualizar();

  // GANADOR
  if (hpNaruto <= 0) {
    escribir(" Sasuke gana");
    juegoTerminado = true;
    return;
  }

  turnoNaruto = true;
}

function reiniciar() {
  // valores iniciales
  hpNaruto = 320;
  chakraNaruto = 120;

  hpSasuke = 280;
  chakraSasuke = 120;

  turnoNaruto = true;
  juegoTerminado = false;

  // limpiar log
  document.getElementById("log").innerHTML = "";

  actualizar();
  escribir("Nueva pelea iniciada");
}

// INICIO
actualizar();
window.accion = accion;