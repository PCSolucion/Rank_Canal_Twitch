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

// Función para mostrar la siguiente tabla
function mostrarSiguienteTabla() {
  // Ocultar la tabla actual
  tablas[indiceTablaActual].style.display = "none";
  
  // Obtener el índice de la siguiente tabla
  indiceTablaActual = (indiceTablaActual + 1) % tablas.length;
  
  // Mostrar la siguiente tabla
  tablas[indiceTablaActual].style.display = "block";
}

// Mostrar la primera tabla
tablas[indiceTablaActual].style.display = "block";

// Mostrar las tablas en intervalos de tiempo de 2 minutos (120 segundos)
setInterval(mostrarSiguienteTabla, 120000);