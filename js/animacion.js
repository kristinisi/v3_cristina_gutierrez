window.onload = function () {
  var imagenPeces = document.getElementById("imagen-pez");
  var duracion = Math.floor(Math.random() * 6) + 5; // Duración aleatoria entre 5 y 10 segundos
  var desplazamiento = Math.floor(Math.random() * 50) + 25; // Desplazamiento aleatorio entre 25% y 75%

  // Aplicar animaciones con valores aleatorios
  imagenPeces.style.animation =
    "nadar " +
    duracion +
    "s infinite linear, rotar " +
    duracion +
    "s infinite linear";
  imagenPeces.style.left = desplazamiento + "%";
};
