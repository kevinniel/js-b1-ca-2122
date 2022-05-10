class Table {
    tbody;

    constructor() {
        this.tbody = document.querySelector('#tbody');
        this.lines = [];
    }

    createLine(name, firstname, phone) {
        this.lines.push(new TableLine(name, firstname, phone, this.tbody));
    }
}