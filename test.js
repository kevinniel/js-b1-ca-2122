class Toto {

    constructor() {
        this.sayHello();
    }

    sayHello() {
        this.printHello();
    }

    printHello() {
        this.showHello();
    }

    showHello() {
        console.log("hello");
    }


}

new Toto();