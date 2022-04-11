// const zgrada = {
//     ime : 'aaa',
//     visina : 720,
//     stanari: [{
//         ime: 'Ana', dob: 25},
//         {ime: 'Petar', dob: 21}]
// };

//let ime = zgrada.ime;
//let {ime, visina} = zgrada;
//console.log(ime);
//console.log(visina);
//console.log(typeof(zgrada.ime));

//const ime = zgrada.ime;
//const visina = zgrada.visina;

//const {povrsina = '500'} = zgrada;
//console.log(povrsina);

//const{ime, visina} = zgrada;
//const {ime: naziv} = zgrada;
//console.log(naziv);

//console.log(zgrada);

// const hero = {
//     heroname: 'Batman',
//     realName: 'Bruce Wayne',
//     adress: {
//         city: 'Gotham City'
//     }
// };

//let clone = {}
//for (let p in hero){
//    clone[p] = hero[p];
//    console.log(p);
//    console.log(hero[p]);
//}

//let clone = {...hero};
//console.log(clone);
//clone.adress.city = 'Split';
//console.log(clone);
//console.log(hero);
//clone.heroname = 'Superman';
//console.log(hero);
//console.log(clone);

// const Tigar = {
//     naziv: 'Tigar',
//     velicina: '4m',
//     podvrste: ['sibirski', 'juznokorejski', 'balijski'],
// };

// const Cat = {
//     naziv: 'Macka',
//     velicina: '0.6m',
//     podvrste: ['himalajska', 'europska kratkodlaka', 'orijentalna'],
// };

// const {naziv, podvrste} = Tigar;
// console.log(naziv);
// console.log(podvrste.length);

// let niz = ['Ana', 'Anić', 31];
// console.log(niz);
// // let {}
// let [ime, prezime, dob] = niz;
// console.log(`${ime}\n${prezime}\n${dob}`);
// console.log(...niz);

// for (let n of niz){
//     console.log(n);
// };

// for (let n in niz){
//     console.log(n);
// };

//1. Zadatak

const Orao = {
    naziv: 'Orao',
    duzina: 80,
    rasponKrila: 210,
    tezina: 5,
    opis: {
        ukratko: 'porodica velikih ptica grabljivica',
        staniste: ['Euroazija', 'Afrika', 'Sjeverna Amerika', 'Meksiko'],
        glavneZnacajke: ['savinut kukast kljun', 'oštre kandže na nogama', 'hrane se većim životinjama']
    },
    sistematika: {
        carstvo: 'Animalia',
        koljeno: 'Chordata',
        razred: 'Aves',
        red: 'Falconiformes',
        porodica: 'Accipitridae'
    },
};

const Jastreb = {
    naziv: 'Jastreb',
    duzina: 55,
    rasponKrila: 100,
    tezina: 1,
    opis: {
        ukratko: 'ptica grabljivica iz porodice jastrebova',
        staniste: ['Azija', 'Kanada'],
        glavneZnacajke: ['savinut kukast kljun', 'oštre kandže na nogama', 'hrane se većim životinjama']
    },
    sistematika: {
        carstvo: 'Animalia',
        koljeno: 'Chordata',
        razred: 'Aves',
        red: 'Accipitrifomes',
        porodica: 'Accipitridae'
    },
};

let pticeGrabljivice = [];