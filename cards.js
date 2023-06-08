//1-Hacer un layout simple en el que haya 3 cards y cambiar a través de la manipulación del DOM el color del título de las mismas.
//Tu codigo aqui:
// Obtener todas las tarjetas
var cards = document.querySelectorAll('.card');

// Recorrer las tarjetas y agregar un evento de clic a cada una
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        // Obtener el título de la tarjeta actual
        var title = card.querySelector('.card-title');
        
        // Generar un color aleatorio en formato hexadecimal
        var color = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Cambiar el color del título de la tarjeta
        title.style.color = color;
    });
});


// Obtener el botón por su ID
var button = document.getElementById('my-button');

// 2. Agregar un evento de clic al botón
button.addEventListener('click', function () {
    console.log('Hola');
});


var stars = document.getElementsByClassName('star');

// Agregar un evento de clic a cada estrella
for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function () {
        // Obtener el índice de la estrella actual
        var currentIndex = Array.from(this.parentNode.children).indexOf(this);


        //3-Realizar unas cards que contengan cinco estrellas clicables para hacer una review.
//Tu codigo aqui:

        // Recorrer todas las estrellas anteriores y encenderlas
        for (var j = 0; j <= currentIndex; j++) {
            this.parentNode.children[j].classList.add('active');
        }
    });
}


// Obtener todas las tarjetas
var cards = document.querySelectorAll('.card');

// Definir las familias de series de TV
var seriesFamilies = [
    ['Simpsons Family', 'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'],
    ['American Dad Family', 'Stan', 'Francine', 'Steve', 'Hayley', 'Roger'],
    ['Futurama Family', 'Fry', 'Leela', 'Bender', 'Professor Farnsworth', 'Zoidberg'],
    ['Family Guy Family', 'Peter', 'Lois', 'Stewie', 'Brian', 'Meg'],
    ['South Park Family', 'Stan', 'Kyle', 'Cartman', 'Kenny', 'Butters']
];

// Recorrer las tarjetas y generar las listas dinámicamente
cards.forEach(function (card, index) {
    // Obtener el título de la tarjeta actual
    var title = card.querySelector('.card-title');
    // Obtener el índice correspondiente a la tarjeta actual
    var seriesFamilyIndex = index;

    // Verificar si la tarjeta actual debe tener una familia de series de TV
    if (seriesFamilyIndex >= 0 && seriesFamilyIndex < seriesFamilies.length) {
        // Obtener la familia de series de TV correspondiente al índice
        var seriesFamily = seriesFamilies[seriesFamilyIndex];

        // Cambiar el título de la tarjeta
        title.textContent = seriesFamily[0];

        // Crear una nueva lista
        var list = document.createElement('p');

        //4. Recorrer los elementos de la familia de series de TV y agregarlos a la lista
        for (var i = 1; i < seriesFamily.length; i++) {
            var listItem = document.createElement('p');
            listItem.textContent = seriesFamily[i];
            list.appendChild(listItem);
        }

        // Agregar la lista a la tarjeta
        card.appendChild(list);
    }
});



