// var = global = accessible partout dans le code
// let = portée bloc
// const = comme le "let" = MAIS = pour les tableaux et fonctions et objets

var nom;
var prenom;
var telephone;
var form;
var tbody;

form = document.querySelector("#form");
tbody = document.querySelector("#tbody");

form.addEventListener("submit", function(event){
    event.preventDefault();
    updateValuesFromForm();
    showValues();
    addLine(nom, prenom, telephone);
    emptyFields();
});

function updateValuesFromForm() {
    nom = document.querySelector("#nom").value;
    prenom = document.querySelector("#prenom").value;
    telephone = document.querySelector("#telephone").value;
}

function showValues() {
    console.log("nom : ", nom);
    console.log("prenom : ", prenom);
    console.log("telephone : ", telephone);
}

function addLine(a, b, c) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = a;
    let td2 = document.createElement("td");
    td2.innerText = b;
    let td3 = document.createElement("td");
    td3.innerText = c;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tbody.append(tr);
}

function emptyFields() {
    document.querySelector("#nom").value = "";
    document.querySelector("#prenom").value = "";
    document.querySelector("#telephone").value = "";
}
