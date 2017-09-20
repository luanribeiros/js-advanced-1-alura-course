class View {

    constructor() {
        this._elemento = elemento;
    }

    update(model) {

        this._elemento.innerHTML = this._template(model);
    }
}