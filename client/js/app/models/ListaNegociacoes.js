class ListaNegociacoes{

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacoes);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}