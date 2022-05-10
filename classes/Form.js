class Form {
    
    form;

    nameField;
    firstnameField;
    phoneField;

    name;
    firstname;
    phone;

    constructor(table) {
        this.table = table;
        this.form = document.querySelector('#form');

        this.nameField = this.form.querySelector('#nom');
        this.firstnameField = this.form.querySelector('#prenom');
        this.phoneField = this.form.querySelector('#telephone');

        this.manageSubmitForm();
    }

    manageSubmitForm() {
        let _this = this;

        this.form.addEventListener("submit", function(event){
            event.preventDefault();

            _this.updateValues();
            _this.table.createLine(_this.name, _this.firstname, _this.phone);
        })
    }

    updateValues() {
        this.name = this.nameField.value;
        this.firstname = this.firstnameField.value;
        this.phone = this.phoneField.value;
    }
}