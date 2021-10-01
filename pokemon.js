/*//El nombre de la clase la primera letra tiene que ser mayuscula
class Pokemon {
    name = ""; 
    type = ""
    evolutions = [];

    //El constructor nos ayuda ainicializar los valores de nuestro objeto
    constructor(name, type, evolutions) {
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    attack() {
        return `${this.name}, esta atacando`;
    }

    //Metodo
    evolve(evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }

        return message;
    }
}

const Bulbasaur = new Pokemon("Bulbasaur", "Planta", ["Ivysaur", "Venusaur"]);
const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);


console.log(`-------------***${Bulbasaur.name}***-------------`);

// Bulbasaur
console.log(`${Bulbasaur.name} es de tipo ${Bulbasaur.type}`);
console.log(Bulbasaur.attack());
console.log(Bulbasaur.evolve(0));
console.log(Bulbasaur.evolve(1));

console.log(`-------------***${Charmander.name}***-------------`);

// Charmander
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));

console.log(`-------------***${Squirtle.name}***-------------`);

// Squirtle
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));*/


//Encapsulamiento
/*class Pokemon {
    //Atributos privados
    #name = ""; 
    #type = ""
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    //Para hcer cualquier cambio debe pasar por estos metodos (set)
    //Necesita parmetros por que es el valor que asigna
    set name(name) {
        if (name == '') {
            this.#name = 'No existe';
        } else {
            this.#name = name;
        }
    }

    set type(type) {
        this.#type = type;
    }

    set evolutions(evolutions) {
        this.#evolutions = evolutions;
    }

    //Estos metodos sirven para obtener los valores
    get name() {
        return this.#name;
    }

    get type() {
        return this.#type;
    }

    get evolutions() {
        return this.#evolutions;
    }


    attack() {
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";
        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }
}


const Bulbasaur = new Pokemon("Bulbasaur", "Planta", ["Ivysaur", "Venusaur"]);
const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

console.log(`-------------***${Bulbasaur.name}***-------------`);
console.log(`${Bulbasaur.name} es de tipo ${Bulbasaur.type}`);
console.log(Bulbasaur.attack());
console.log(Bulbasaur.evolve(0));
console.log(Bulbasaur.evolve(1));

Bulbasaur.name = '';
console.log(`${Bulbasaur.name}`);

console.log(`-------------***${Charmander.name}***-------------`);
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));

console.log(`-------------***${Squirtle.name}***-------------`);
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));


console.log(`Mi nombre es ${Charmander.name}`);
Charmander.name = "Charmander";
console.log(`Mi nuevo nombre es ${Charmander.name}`);
*/

class Pokemon {
    //Atributos privados
    #name = ""; 
    #type = ""
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    //Para hcer cualquier cambio debe pasar por estos metodos (set)
    //Necesita parmetros por que es el valor que asigna
    set name(name) {
        if (name == '') {
            this.#name = 'No existe';
        } else {
            this.#name = name;
        }
    }

    set type(type) {
        this.#type = type;
    }

    set evolutions(evolutions) {
        this.#evolutions = evolutions;
    }

    //Estos metodos sirven para obtener los valores
    get name() {
        return this.#name;
    }

    get type() {
        return this.#type;
    }

    get evolutions() {
        return this.#evolutions;
    }


    attack() {
        return `${this.#name}, esta atacando`;
    }

    evolve(evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";
        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }
}

//Esta heredando de la clase Pokemon
class TypeFire extends Pokemon {
    constructor(name, evolutions) {
        //Va a rellenar desde el padre
        super(name, 'fire', evolutions)
    }

    //Metodo
    message() {
        return `Hola, soy ${this.name} y soy de tipo Fuego` ;
    }
}

const Charmander = new TypeFire('Charmander', ['Charmeleon', 'Charizar']);
console.log(Charmander.message());

Charmander.name = 'Gato';
console.log(Charmander.message());