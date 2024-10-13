document.addEventListener('DOMContentLoaded', () => { // Asegúrate de que el DOM esté completamente cargado
    document.getElementById('checkOtherButton').addEventListener('click', ingresarNombre);
});

function ingresarNombre() {
    const nombre = prompt('¿Cuál es tu nombre?'); // Usar prompt para obtener el nombre
    if (nombre) { // Verificar que el usuario no haya cancelado el prompt
        alert(`¡Hola, ${nombre}!`); // Saludo al usuario
    } else {
        alert("No se ingresó un nombre."); // Mensaje si el prompt fue cancelado
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('checkButton2').addEventListener('click', ingresar100);
});

function ingresar100() {
    let numero; 
    do {
        const numeroInput = prompt('Ingresa un número mayor a 100');
        numero = Number(numeroInput); // Convertir la entrada a número
    } while (numero <= 100 || isNaN(numero)); // Mantener el ciclo si el número no es mayor a 100 o no es un número válido

    alert(`¡Ingresaste un número mayor a 100!`); // Mensaje cuando el número es mayor a 100
}

// Función para cambiar el color de los párrafos a azul
function cambiarColor() {
    const paragraphs = document.querySelectorAll('p'); // Selecciona todos los párrafos
    paragraphs.forEach(paragraph => {
        paragraph.style.color = 'blue'; // Cambia el color a azul
    });
}

// Agregar el evento al primer botón
document.getElementById('btn1').addEventListener('click', cambiarColor);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formulario').addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío del formulario
        const textoIngresado = document.getElementById('texto').value; // Obtiene el valor del input
        alert(`Has ingresado: ${textoIngresado}`); // Muestra la alerta con el texto ingresado
        document.getElementById('texto').value = ''; // Limpia el input
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona la lista
    const lista = document.getElementById('milista');

    // Obtiene todos los elementos <li> dentro de la lista
    const items = lista.getElementsByTagName('li');

    // Agrega un evento click a cada elemento <li>
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            console.log(this.textContent); // Muestra el texto del elemento clickeado en la consola
        });
    }
});


