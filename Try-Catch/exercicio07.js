try {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"))
    let numero2 = parseFloat(prompt("Digite o segundo número:"))

    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Por favor, digite números válidos.")
    }

    let resultado = numero1 / numero2

    console.log("O resultado da operação é: " + resultado)
} catch (excecao) {
    console.error("Ocorreu um erro: " + excecao.message)
} finally {
    console.log("Executando o bloco finally.")
}