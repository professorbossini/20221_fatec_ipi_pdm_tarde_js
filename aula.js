const nome = "João"
const idade = 17
const objeto = { nome, idade }
// let calc = {
//     soma: (a, b) => a + b,
//     subtracao: function (a, b){
//         return a - b
//     }
// }

// console.log (calc.soma(2, 3))
// console.log (calc.subtracao (5, 4))



// //uma concessionaria que tem
// //cnpj e endereco
// //e carros em estoque
// //cada carro tem marca, modelo e ano de fab.

// let c = {
//     cnpj: '11122211100001-45',
//     endereco: {
//         logradouro: 'Rua A',
//         numero: 10,
//         bairro: "Vila J"
//     },
//     veiculos: [
//         {
//             marca: 'Ford',
//             modelo: 'Ka',
//             ano: 2012,
//             revisoes: [
//                 {
//                     data: '12/02/2013',
//                     consultor: 'André'
//                 },
//                 {
//                     data: '14/02/2014',
//                     consultor: 'Pedro'
//                 }
//             ]
//         }, 
//         {
//             marca: 'Volks',
//             modelo: 'Nivus',
//             ano: 2020
//         }, 
//         {
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             ano: 2021
//         }
//     ]
// }
// //exibir o nome Pedro
// console.log (c.veiculos[0].revisoes[1].consultor)



// let p = {
//     nome: "Maria",
//     idade: 22,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 12
//     }
// }
// console.log (p.nome)
// console.log (p['idade'])
// console.log (p.endereco.logradouro)
// console.log (p['endereco'].numero)
// console.log (p['endereco']['numero'])
// console.log (p.endereco['numero'])



// //pares chave/valor
// let pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log (pessoa.nome)
// console.log (pessoa['idade'])

// Javascript Object Notation
// JSON


// const triplo = (n) => { 
//     const r = n + n
//     r = r + n
//     return (
//         r + 2 + r + 2 + r + 2 + r + 2
//     );
// }
// console.log(triplo(2))

// const dobro = n => n * 2
// const dobro = function (n){
//     return n * 2
// }
// console.log (dobro(5))


//arrow functions
// const hello = () => console.log("Hello")
// console.log(hello())

// const triplo = function (n = 1){
//     return n * 3
// }
// console.log (triplo())
// console.log(triplo(2))

// void m (int a){

// }

// void m (int a, int b){

// }
// m(1);
// m(2, 3);

// const dobro = function (n){
//     return 2 * n
// }
// console.log (dobro (5))

// function soma (a, b){
//     return a + b
// }
// const res = soma (2, 3)
// console.log (res)

// function hello (){
//     console.log ("Oi")
// }
// hello()
// function hello (nome){
//     console.log ("Hello, " + nome)
// }
// hello ("João")



// const valores = [1, 2, 3, 4]
// //reduce
// const soma = valores.reduce((ac, v) => ac + v)

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// const todosComecamComA = nomes.every ((n) => n.startsWith("A"))
// console.log(todosComecamComA)


// console.log("Começando a executar...")

// const res = nomes.map ((x) => x.length)
// console.log(res)

// const res = nomes.map((nome) => {nome.charAt(0)})

// console.log (res)

//utilizando a map, escreva um trecho de código que produz
//um vetor que contém os comprimentos das strings existentes
//[9, 7, 7, 4, 8]

// //arrow function
// //estamos verificando se o nome começa com A
// const resultante = nomes.filter((n) => {
//     return n.startsWith("A")
// })
// console.log(resultante)

// void f (int a, float b){

// }
// f(1, 2)
// class Pessoa{

//     public void andar (){

//     }

//  0   variavel = andar;
// }

// const nomes = [1, 2]
// console.log (nomes)
// nomes[0] = 3
// console.log(nomes)
// nomes[225] = "oi"
// console.log(nomes.length)
// //int v [10];
// v1 = []
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = "abc"

// console.log(v1.length)
// console.log (v1)

// for (let i = 0; i < v1.length; i++){
//     console.log (v1[i])
// }




// const a = []
// const b = a
// console.log (a === b)

// Thread.stop()

// console.log ([] === [])

// console.log (1 == [true])

// console.log (1 == [1, 1])

// console.log ([] == false)

// console.log (null == undefined)

// console.log (null == null)

//console.log(1 == [1])

// console.log (true == 1)


// console.log (1 == 1)
// console.log (1 == "1")
// console.log (1 === 1)
// console.log (1 === "1")


// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// // console.log(n3)

// const n4 = n1 + Number(n2)
// console.log(n4)



// var idade = 18
// console.log ("Oi, " + nome)
// if (idade >= 18){
//     //içamento hoist
//     var nome = "José"
//     console.log ("Parabéns, " + nome + ", você pode dirigir")
// }
// console.log ("Até, " + nome)

// var linguagem = "Java"
// console.log (`Aprendendo ` + linguagem)
// var linguagem = "Javascript"
// // printf ("Aprendendo %s", linguagem)
// console.log (`Aprendendo ${linguagem}`)
// int a;
// int a;


// const nome = "José"
// // nome = "Ana"
// // const n
// const endereco = 'Rua K, 10'
// const sobrenome = `Silva`


// let a = 2
// let b = "abc"
// a = true
// a = "abc"

// var c = 2 + 3
// var d = "abcd"





