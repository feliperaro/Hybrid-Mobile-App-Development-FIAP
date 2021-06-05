class Pessoa {
    constructor() {
        this._nome = ''
        this._email = ''
        this._telefone = ''
    }

    get nome() {
        return this._nome
    }

    set nome(value) {
        this._nome = value
    }
}

class PessoaFisica extends Pessoa {

}

class PessoaJuridica extends Pessoa {

}