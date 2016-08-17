'use strict'

module.exports = function () {

    class Tarefa {
        constructor() {
            console.log("tarefa instanciada!");
        }

        mostrarId() {
            console.log(23);
        }

        static carregarTodas() {
            console.log("carregando todas as tarefas..");
        }
    }

    console.log(typeof Tarefa); // function
    let tarefa = new Tarefa(); // "tarefa instanciada!"
    tarefa.mostrarId(); // 23
    Tarefa.carregarTodas(); // "carregando todas as tasks.."

    class Carro {
        constructor(name) {

            this.name = name;

            console.log("Criando um novo carro");
        }

        get fullName() {
            return this.name += " - Carrão!"
        }

        set fullName(value) {
            this.name = value;
        }
    }

    class Porsche extends Carro {
        constructor(name) {
            super(name);
            console.log("Criando um Porsche");
        }
    }

    let c = new Porsche("Carro do KV");
    console.log(c.fullName);
    // Criando um novo carro
    // Criando um Porsche

}