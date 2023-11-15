let primeiroValor = parseFloat(prompt("Digite o primeiro valor:"))
let segundoValor = parseFloat(prompt("Digite o segundo valor:"))
let operacao = (prompt("escolha a operação desejada: + (Adição) - (Subtração) * (Multiplicação) /(Divisão)"))

switch (operacao){
    case "+":
        let adicao = primeiroValor + segundoValor
        alert(`O resultado é: ${adicao}`)
        break
    case "-":
        let subtracao = primeiroValor - segundoValor
        alert(`O resultado é: ${subtracao}`)
        break
    case "*":
        let multiplicacao = primeiroValor * segundoValor
        alert(`O resultado é: ${multiplicacao}`)
        break
    case "/":
        let divisao = primeiroValor / segundoValor
        let restoDivisao = primeiroValor % segundoValor
        alert(`O resultado é: ${divisao.toFixed(2)} e o resto da divisão é: ${restoDivisao}`)
        break
    default:
        alert("Opção invalida! Favor escolha uma das opções.")
        break

}