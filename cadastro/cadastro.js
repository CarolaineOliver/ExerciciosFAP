/* Tipos das variavéis:
Nome = "String"
Salario = Number (float)
Idade = Number (int)
Diploma = Boolean
*/

/*
let nome = "Carolaine"
let salario = 1550.25
let idade = 28
let diploma = resposta == "s" ? "Sim" : "Não"
*/

let nome = prompt("Digite seu nome:")
let salario = parseFloat(prompt("Digite seu salario:"))
let idade = parseInt(prompt("Digite sua idade:"))
let diploma = prompt("Possui diploma? s ou n") == "s" ? "Sim" : "Não"

alert(`Dados informados:  ${nome}, ${salario}, ${idade}, ${diploma}.`)