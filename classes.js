
class Crayon {

    // attributs (caractéristiques)
    couleur;
    poid;
    taille;
    volume;
    texte;
    bouchon = true;

    // méthodes (fonctionnalités)
    constructor(couleur, poid) {
        this.couleur = couleur
        this.poid = poid
        console.log("crayon créé");
    }

    decapuchoner () {
        this.bouchon = false;
    }

    recapuchoner () {
        this.bouchon = true;
    }

    ecrire (texte) {
        this.texte = texte;
        console.log(this.texte);
    }

}

let a = new Crayon("bleu", "30kg");
console.log(a.couleur);
console.log(a.poid);
a.ecrire("toto");