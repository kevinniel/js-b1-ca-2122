class TableLine {

    tr;
    td1;
    td2;
    td3;
    td4;
    btnEdit;
    btnDelete;

    constructor(name, firstname, phone, tbody) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = name;
        let td2 = document.createElement("td");
        td2.innerText = firstname;
        let td3 = document.createElement("td");
        td3.innerText = phone;
        let td4 = document.createElement("td");
        td4.append(this.addEditButton());
        td4.append(this.addDeleteButton());
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tbody.append(tr);
    }

    addEditButton() {
        this.btnEdit = document.createElement("button");
        this.btnEdit.innerText = "modifier";
        return this.btnEdit;
    }

    addDeleteButton() {
        this.btnDelete = document.createElement("button");
        this.btnDelete.innerText = "supprimer";
        return this.btnDelete;
    }

    removeLine() {
        this.tr.remove();
    }

}