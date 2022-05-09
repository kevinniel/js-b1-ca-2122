// CALLBACK
// function printToto(toto, callback) {
//     console.log(toto);
//     callback();
// }

// printToto("toto", function(){
//     console.log("tata");
// });

// PROMESSE
// const maPromesse = new Promise((resolve, reject) => {
//     console.log("maPromesse");
//     setTimeout(() => {
//         resolve('toto');
//     }, 3000);
// });

// maPromesse
//     .then(function(){
//         console.log(1)
//     })
//     .then(maPromesse)
//     .then(function(){
//         console.log(2)
//     })

// ASYNC AWAIT
async function toto() {
    setTimeout(() => {
        return "toto";
    }, 3000);
}

let x = toto();
console.log(x);
