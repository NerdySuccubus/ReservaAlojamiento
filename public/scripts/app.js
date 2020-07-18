'use strict';

console.log("App.js is running");

var app = {
    title: 'Hoteles',
    subtitle: 'Reserva',
    options: []
};

var user = {
    name: 'Shina',
    age: 25,
    location: 'Buenos Aires'
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {};

// DESDE ACÁ VA LO QUE SE RENDERIZA

// var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);

var appRoot = document.getElementById("app");

var numbers = [55, 101, 1000];

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle,
            ' '
        ),
        app.options.lenght > 0 ? 'Here are your options' : 'No options',
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
