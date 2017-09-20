class MensagemView{

    constructor() {
        this._elemento = elemento;
    }

    _template(model) {

        return `<p class="alert alert-info"> ${model.texto}`;
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}