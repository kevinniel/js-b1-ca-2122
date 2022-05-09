"use strict";
class Page {

    nom;
    prenom;
    telephone;
    form;
    tbody;

    constructor() {
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateValuesFromForm = this.updateValuesFromForm.bind(this)
        this.showValues = this.showValues.bind(this)
        this.addLine = this.addLine.bind(this)
        this.emptyFields = this.emptyFields.bind(this)

        this.form = document.querySelector("#form");
        this.tbody = document.querySelector("#tbody");

        this.form.addEventListener("submit", this.handleSubmit)
    }

    handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        console.log(1);
        this.updateValuesFromForm();
        console.log(2);
        this.showValues();
        console.log(3);
        this.addLine();
        console.log(4);
        this.emptyFields();
        console.log(5);
    }

    updateValuesFromForm() {
        this.nom = document.querySelector("#nom").value;
        this.prenom = document.querySelector("#prenom").value;
        this.telephone = document.querySelector("#telephone").value;
    }

    showValues() {
        console.log("nom : ", this.nom);
        console.log("prenom : ", this.prenom);
        console.log("telephone : ", this.telephone);
    }

    addLine() {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = this.nom;
        let td2 = document.createElement("td");
        td2.innerText = this.prenom;
        let td3 = document.createElement("td");
        td3.innerText = this.telephone;
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);

        this.tbody.append(tr);
    }

    emptyFields() {
        document.querySelector("#nom").value = "";
        document.querySelector("#prenom").value = "";
        document.querySelector("#telephone").value = "";
    }

}