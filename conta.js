class Banco {
    constructor(agencia, conta, saldo,tipoConta){
        this._agencia = agencia;
        this._conta = conta;
        this._saldo = saldo;
        this._tipoConta = tipoConta;
    }
    Saldo(){
        return this._saldo

    }
    depositar(valor){
        return this._saldo += valor

    }
    sacar(valor){
       return this._saldo -= valor

    }
    numeroConta(){
        return this._conta
    }

}
let conta1 = new Banco(1234, 52785, 1000, "corrente")
console.log(conta1.Saldo())
console.log(conta1.depositar(200))
console.log(conta1.sacar(100))
console.log(conta1.numeroConta())