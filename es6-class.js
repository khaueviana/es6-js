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
        constructor() {
            console.log("Criando um novo carro");
        }
    }

    class Porsche extends Carro {
        constructor() {
            super();
            console.log("Criando um Porsche");
        }
    }

    let c = new Porsche();
    // Criando um novo carro
    // Criando um Porsche

}