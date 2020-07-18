console.log("App.js is running");


const app = {
    title: 'Hoteles',
    subtitle: 'Reserva',
    options: []
}


const user ={
    name: 'Shina',
    age: 25,
    location: 'Buenos Aires'
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () =>{
    
}

// DESDE ACÁ VA LO QUE SE RENDERIZA

// var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);

var appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];


const render = () =>{
    const template = (
    <div>
        <h1>{app.title}</h1>

        {app.subtitle && <p>{app.subtitle} </p>}
        
        { app.options.lenght > 0 ? 'Here are your options' : 'No options'}
        <p>{app.options.length}</p>

        <button onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        
        <ol>

        {
            app.options.map((option)=> <li key={option}>{option}</li>)
        }

        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        
    </div>
);
ReactDOM.render(template, appRoot);


}

render();