let progressBar = document.querySelector(".progress-bar");
//-----------------BARRA DE PROGRESO------------------
document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los campos del formulario
  let formFields = document.querySelectorAll(
    ".formulario input, .formulario textarea"
  );
  // Calcular el número total de campos
  let totalFields = formFields.length;

  // Función para actualizar la barra de progreso
  function updateProgressBar() {
    // Contar los campos completados
    let completedFields = 0;
    formFields.forEach(function (field) {
      if (field.validity.valid) {
        completedFields++;
      }
    });

    // Calcular el porcentaje de progreso
    let progressPercentage = (completedFields / totalFields) * 100;

    // Actualizar la barra de progreso
    progressBar.style.width = progressPercentage + "%";
    progressBar.setAttribute("aria-valuenow", progressPercentage);
  }

  // Escuchar eventos de entrada en los campos del formulario
  formFields.forEach(function (field) {
    field.addEventListener("input", updateProgressBar);
  });
});

//-----------------VALIDACIONES------------------
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//-----------------CUADRO DIÁLOGO------------------
document.getElementById("reservar").addEventListener("click", function (event) {
  // Validar el formulario aquí antes de mostrar el diálogo de confirmaciónlet nombre = document.getElementById("nombre").value;
  let apellido1 = document.getElementById("apellido1").value;
  let apellido2 = document.getElementById("apellido2").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;
  let personas = document.getElementById("personas").value;
  let mensaje = document.getElementById("mensaje").value;
  let tarjeta = document.getElementById("tarjeta").value;
  let caducidad = document.getElementById("caducidad").value;
  let seguridad = document.getElementById("seguridad").value;
  let titular = document.getElementById("titular").value;
  let importe = document.getElementById("importe").value;

  // Si todos los datos son válidos, mostrar el cuadro de diálogo de confirmación
  if (
    nombre &&
    apellido1 &&
    apellido2 &&
    fecha &&
    hora &&
    personas &&
    mensaje &&
    tarjeta &&
    caducidad &&
    seguridad &&
    titular &&
    importe
  ) {
    event.preventDefault(); // Evita el envío automático del formulario
    document.getElementById("confirmDialog").style.display = "block";
  } else {
    // Mostrar un mensaje de error o realizar otras acciones si los datos no son válidos
    alert("Por favor, complete todos los campos antes de reservar.");
  }
});

// Agrega un evento de clic al botón "Sí" en el cuadro de diálogo de confirmación
const confirmarReserva = document.getElementById("confirmarReserva");
const reservaCompletada = document.getElementById("reservaCompletada");
confirmarReserva.addEventListener("click", function () {
  // Cerrar la ventana modal
  document.getElementById("confirmDialog").style.display = "none";
  //Abrir la nueva ventana de la reserva completada
  console.log(reservaCompletada);
  reservaCompletada.style.display = "block";
  // Limpiar el formulario
  document.querySelector(".formulario").reset();
  //Limpiar barra de progreso
  progressBar.style.width = 0 + "%";
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("confirmDialog").style.display = "none";
});

document
  .querySelector(".closeConfirmacion")
  .addEventListener("click", function () {
    reservaCompletada.style.display = "none";
  });
