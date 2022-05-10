class Engine {

    table;
    form;

    constructor() {
        this.table = new Table();
        this.form = new Form(this.table);
    }

}