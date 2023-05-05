console.log("JS08 Clases");

// ------ Crear una clase -----------------
// Para el nombre se usa la notación Pascal-Case (UpperCamelCase)

class Car{

    // Método constructor
    constructor(nameCar, brand, price ){
        console.log("Has creado un nuevo objeto " + nameCar);
        this.name =  nameCar;
        this.brand = brand;
        this.price = price;
    }
    igniteEngine = (state) => state? "Engine is on": "Engine is off"
    //igniteEngine(){}

    //Agregar una función que escriba las características del auto
    getDescription(){
        return `${this.name} de ${this.brand} cuesta ${this.price}`;
    }
}

// -----------Usar la clase para instanciar(crear) objetos
// para instanciar se usa new NombreClase

const elantra = new Car("Elantra","Hyundai", 450_000);
const aveo = new Car("Aveo","Chevrolet", 250_000);

console.log( elantra );
console.log( aveo );
console.log( elantra.name + " " + elantra.igniteEngine(true) );
console.log( elantra.getDescription());