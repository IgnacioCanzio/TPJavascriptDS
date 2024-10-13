
const esPar = (num) => num % 2 === 0 ? true : false; 

document.addEventListener('DOMContentLoaded', () => { // Asegúrate de que el DOM esté completamente cargado
  document.getElementById('checkButton').addEventListener('click', verificarNumero);
});

function verificarNumero() {
  const numIn = prompt('Ingresa un número:'); // Usar prompt para obtener el número
  
  if (numIn !== null) { // Verificar que el usuario no haya cancelado el prompt
      const numero = Number(numIn); // Convertir la entrada a un número

      // Validar si la entrada es un número
      if (isNaN(numero)) {
          alert("Por favor, ingresa un número válido."); // Mensaje si la entrada no es un número
      } else {
          if (esPar(numero)) { // Verificar si es par
              alert(`El número ${numero} es par.`);
          } else {
              alert(`El número ${numero} es impar.`);
          }
      }
  } else {
      alert("No se ingresó un número."); // Mensaje si el prompt fue cancelado
  }
}

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona los elementos del formulario
    const campoTexto = document.getElementById('campo');
    const btnDeshabilitar = document.getElementById('deshabilitarCampo');
    const btnHabilitar = document.getElementById('habilitarCampo');

    // Evento para deshabilitar el campo
    btnDeshabilitar.addEventListener('click', () => {
        campoTexto.disabled = true;  // Deshabilitar el campo
    });

    // Evento para habilitar el campo
    btnHabilitar.addEventListener('click', () => {
        campoTexto.disabled = false;  // Habilitar el campo
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const guardarBtn = document.getElementById('guardarCorreo');
    const correoGuardadoDiv = document.getElementById('correoGuardado');
    const correoMostrado = document.getElementById('correoMostrado');
    const eliminarBtn = document.getElementById('eliminarCorreo');

    // Función para mostrar el correo guardado
    function mostrarCorreoGuardado() {
        const correoGuardado = localStorage.getItem('correo');
        if (correoGuardado) {
            correoMostrado.textContent = correoGuardado;
            correoGuardadoDiv.style.display = 'block';
            eliminarBtn.style.display = 'inline-block';
        } else {
            correoGuardadoDiv.style.display = 'none';
        }
    }

    // Cargar el correo almacenado al cargar la página
    mostrarCorreoGuardado();

    // Guardar el correo en localStorage
    guardarBtn.addEventListener('click', () => {
        const correo = emailInput.value;
        if (correo) {
            localStorage.setItem('correo', correo);
            mostrarCorreoGuardado();  // Mostrar el correo después de guardarlo
        }
    });

    // Eliminar el correo del localStorage
    eliminarBtn.addEventListener('click', () => {
        localStorage.removeItem('correo');
        correoGuardadoDiv.style.display = 'none';
        eliminarBtn.style.display = 'none';
    });
});

