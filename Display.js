class Display {
    constructor(displayValorAnterior ,displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador =  new Calculadora();
        this.tipoOperacion = undefined; //"undefined" va a guardar el tipo de operacion que esta usando el usuario
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '%',
            multiplicar: 'x',
        }
    }

    // Creamos un metodo de nuestra clase para borrar en el display un valor uno por uno
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    // Creamos otro metodo para el boton "C" que es borrar todo o limpiar el display
    borrarTodo(){
        this.valorActual = ''; // Cuando borramos seteamos a ningun valor
        this.valorAnterior = '';// Cuando borramos seteamos a ningun valor
        this.tipoOperacion = undefined;
        // Acualimazos el display con:
        this.imprimirValores();
    }

    

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual ||this.valorAnterior;
        this.valorActual ='';
        this.imprimirValores();
    }


    // Creamos un metodo para ir agregando numero uno al lado del otro. Y si usamos decimales 
    // el punto se accione una sola vez por eso usamos eo condicional "if"
    agregarNumero(numero) {
        // Preguntamos si ya hay un punto entonces no agragar otro
        if (numero === '.' && this.valorActual.includes('.')) return //"includes() "El método includes()
        // determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda
        this.valorActual = this.valorActual.toString() + numero.toString();
        //"toString()": El método toString() retorna una cadena representando el código fuente de la función.
        this.imprimirValores();
    }

    imprimirValores() {
        //"Textcontent":La propiedad textContent de la interfaz Node representa 
        //el contenido de texto de un nodo y sus dencendientes
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = ` ${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    // hasta ahora todo lo que hace la calculadora es ingreso de numeros, decimale, borrado uno por
    // uno de los numeros y limpieza de pantalla o display
    //Pero todavia no hace ningun calculo
    // Para hacer calculos : Vamos agragar otro metodo que va a tomar los valores que se cargan en el
    // display y darse a la calculadora para que haga el calculo

    // Entonces agregamos otro metodo en nuestra clase diplay que se llama "calcular"

    calcular(){
        // creamos una variable para que los valores dejen de ser un string y se conviertan en numero
        // por eso parseamos la variable, para que deje de ser un str y pase a se un number
        const valorAnterior =  parseFloat(this.valorAnterior);

        // Hacemos lo mismo con valor actual
        const valorActual= parseFloat(this.valorActual);

        //Ahora preguntamos si valorActual y valorAnterior no son number hace un return, porque no hace 
        //ninguna operacion para eso usamos "isNan"
        //"isNaN": isNaN es una función de alto nivel y no está asociada a ningún objeto. isNaN intenta 
        //convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; 
        //en caso contrario, devuelve false. Esta función es útil ya que el valor NaN no puede se probado 
        //correctamente con operadores de igualdad
        if(isNaN(valorActual) || isNaN(valorAnterior)) return;

        // En el caso que si tengan valores osea sean number
        // Se llama al metodo calular y se lo relaciona con la operacion que haya elegido el usuario
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

    // Este metodo nos sirve para hacer las operaciones
    // ahora hay que hacer un metodo que relacione los botones con las operciones
}
    
