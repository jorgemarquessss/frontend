// console.log("Olá Mundo!");

// // Comentário de linha 
// /* 
//  Comentário de bloco
// */

// //Sempre declarar variável com let ou const
// // Tipos de variáveis
// let nome = "Jorge Marques";
// const PI = 3.14;
// let isRunning = false;
// const pessoa = {
//     nome: "Jorge Marques",
//     idade: 31,
//     profissao: "Desenvolvedor"
// }
// let cores = ["amarelo", "azul", "verde", 1, false, [1, 4, true, {}]]

// console.log(typeof nome)
// console.log(typeof PI)
// console.log(typeof isRunning)
// console.log(typeof pessoa)
// console.log(typeof cores)
// console.log("Nome: ", pessoa.nome)
// console.log("Nome: "+ pessoa.nome)

// let frase = "Meu nome é "+pessoa.nome + ". Eu tenho "+pessoa.idade+ " anos;"
// let frase1 = `Meu nome é ${pessoa.nome}. Eu tenho ${pessoa.idade} anos.`
// console.log(frase)
// console.log(frase1)

// Estrutura de Decisão
// const pessoa = {
//     nome: "Jorge",
//     idade: 31
// }

// if(pessoa.idade <= 0) {
//     console.log("Você ainda não nasceu")
// } else if(pessoa.idade >= 18) {
//     console.log(`A pessoa de nome ${pessoa.nome} é maior de idade`)
// } else {
//     console.log("Menor de idade")
// }

// switch(pessoa.idade) {
//     case 20:
//         console.log("20 anos")
//         break;
//     case 30:
//         console.log("30 anos")
//         break;
//     default:
//         console.log("Idade desconhecida")
//         break;
// }

// // Operador Ternário
// pessoa.idade >= 18 ? console.log("Maior de idade") : console.log("Menor de Idade")


// //Estruturas de Repetição - FOR - WHILE e DO WHILE

// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

// let count = 0;
// let count1 = 0;

// while (count < 5) {
//     console.log(count)
//     count++
// }

// do {
//     console.log(count1)
//     count1++
// } while(count <= 3)



//Funções

function imprimeOi() {
    console.log("OIIII");
}

function imprime(frase){
    let mensagem = frase;
    console.log(mensagem)
}

imprimeOi();
imprime("Olá! Função com parâmetro")

function soma(num1, num2) {
    let resultado = num1 + num2
    return resultado;
}

let result = soma(5,8)
console.log("Resultado da soma: " +soma(1, 5));
console.log("Resultado da soma2: " +result);

// Arrow Function
const multiplica = (num1, num2) => {
    console.log("Resultado: " + num1 * num2)
}

multiplica(2, 5)

const objeto = {
    chave: "valor",
    numero: 53,
    booleano: false,
    obj: {
        chaves: "valores"
    }
}

const impares = [ 1, 3, 5, 7]
const coisas = [1, false, {chave: "valor"}, [0, 1, true]]

const top3 = [
    {
        nome: "Produto 1",
        valor: "35.00"
    },
    {
        nome: "Produto 2",
        valor: "45.00"
    },
    {
        nome: "Produto 3",
        valor: "55.00"
    }
]

top3.forEach(item => console.log(item.nome))