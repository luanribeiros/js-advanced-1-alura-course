class View {

    constructor() {
        this._elemento = elemento;
    }

    template() {
        throw new Error('O método template deve sesr implementado');
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}