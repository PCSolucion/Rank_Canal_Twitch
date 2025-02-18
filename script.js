// Obtener todas las tablas por sus identificadores
var tablas = [
  document.getElementById("genesis"),
  document.getElementById("dinastia"),
  document.getElementById("piedraestelar")
];

// Establecer el índice de la tabla actual en 0 (primera tabla)
var indiceTablaActual = 0;

// Ocultar todas las tablas excepto la primera
for (var i = 1; i < tablas.length; i++) {
  tablas[i].style.display = "none";
}

// Función para mostrar la siguiente tabla con efectos de fade out y fade in
function mostrarSiguienteTabla() {
  // Ocultar la tabla actual con efecto de fade out
  tablas[indiceTablaActual].classList.add("fade-out");
  setTimeout(() => {
    tablas[indiceTablaActual].style.display = "none";
    tablas[indiceTablaActual].classList.remove("fade-out");

    // Obtener el índice de la siguiente tabla
    indiceTablaActual = (indiceTablaActual + 1) % (tablas.length + 1);

    if (indiceTablaActual === tablas.length) {
      // Si hemos mostrado todas las tablas, esperar 30 minutos antes de reiniciar
      setTimeout(() => {
        indiceTablaActual = 0;
        mostrarSiguienteTabla();
      }, 30 * 60 * 1000);
    } else {
      // Mostrar la siguiente tabla con efecto de fade in
      tablas[indiceTablaActual].style.display = "block";
      tablas[indiceTablaActual].classList.add("fade-in");
      setTimeout(() => {
        tablas[indiceTablaActual].classList.remove("fade-in");
      }, 1000);

      // Mostrar las tablas en intervalos de tiempo de 30 segundos
      setTimeout(mostrarSiguienteTabla, 30 * 1000);
    }
  }, 1000); // Duración del efecto de fade out
}

// Mostrar la primera tabla con efecto de fade in
tablas[indiceTablaActual].style.display = "block";
tablas[indiceTablaActual].classList.add("fade-in");
setTimeout(() => {
  tablas[indiceTablaActual].classList.remove("fade-in");
}, 1000);

// Iniciar la secuencia de tablas
setTimeout(mostrarSiguienteTabla, 30 * 1000);