var _CONTENT = [ 
    "HELLO, MY NAME IS RODOLFO MORA, SOFTWARE ENGINEER"
];

// Frase actual en proceso
var _PART = 0;

// Número de carácter de la frase actual en proceso
var _PART_INDEX = 0;

// Almacena el identificador devuelto por setInterval
var _INTERVAL_VAL;

// Elemento que contiene el texto
var _ELEMENT = document.querySelector("#text-container");

// Elemento de cursor
var _CURSOR = document.querySelector("#cursor");

// Implementa el efecto de escritura
function Type() { 
    // Obtener una subcadena con 1 carácter añadido
    var texto = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = texto;
    _PART_INDEX++;

    // Si se ha mostrado la frase completa, comenzar a borrar la frase después de un tiempo
    if (texto === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Delete, 100);
        }, 3000);
    }
}

// Implementa el efecto de borrado
function Delete() {
    // Obtener una subcadena con 1 carácter eliminado
    var texto = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = texto;
    _PART_INDEX--;

    // Si la frase ha sido borrada, comenzar a mostrar la siguiente frase
    if (texto === '') {
        clearInterval(_INTERVAL_VAL);

        // Si la frase actual era la última, mostrar la primera, de lo contrario, pasar a la siguiente
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;
        
        _PART_INDEX = 0;

        // Comenzar a mostrar la siguiente frase después de un tiempo
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Iniciar el efecto de escritura al cargar
_INTERVAL_VAL = setInterval(Type, 150);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const additionalOffset = 20; // Puedes ajustar este valor según tus necesidades
            const targetOffset = targetElement.offsetTop - navbarHeight - additionalOffset;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
});