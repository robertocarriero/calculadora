// Creamos funciones que van a llamar a los elementos [dentro del  documento (document)] que vamos a usar
//para la calculadora

const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior ,displayValorActual);

//"ForEach": El método forEach() ejecuta la función indicada una vez por cada elemento del array.
//"addEventListener": El método addEventlistener, es un escuchador que indica al navegador que este 
// atento a la interacción del usuario. La ventaja es que se escribe totalmente en el JS, sin necesidad
//de tocar el HTML.

botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
});