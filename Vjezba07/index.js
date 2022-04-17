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

let pticeGrabljivice = [{ ...Orao }, { ...Jastreb }];

const Lastavica = {
    naziv: 'Lastavica',
    duzina: 20,
    rasponKrila: 32,
    tezina: 0.05,
    opis: {
        ukratko: 'porodica ptica koja pripada redu vrapčarki',
        staniste: ['Europa', 'Afrika', 'Sjeverna Amerika', 'Azija', 'Australija', 'Južna Amerika'],
        glavneZnacajke: ['kratak kljun', 'vitko tijelo', 'široka krila']
    },
    sistematika: {
        carstvo: 'Animalia',
        koljeno: 'Chordata',
        razred: 'Aves',
        red: 'Passeriformes',
        porodica: 'Hirundinidae'
    },
};

const Slavuj = {
    naziv: 'Slavuj',
    duzina: 17,
    rasponKrila: 26,
    tezina: 0.027,
    opis: {
        ukratko: 'porodica ptica koja pripada redu vrapčarki',
        staniste: ['Europa', 'Afrika'],
        glavneZnacajke: ['neugledno smeđe perje', 'hrani sitnim kukcima', 'dugorep']
    },
    sistematika: {
        carstvo: 'Animalia',
        koljeno: 'Chordata',
        razred: 'Aves',
        red: 'Passeriformes',
        porodica: 'Muscicapidae'
    },
};

let pticeSelice = [{ ...Lastavica }, { ...Slavuj }];

//2. Zadatak

console.log(...pticeGrabljivice);
console.log(...pticeSelice);

let [orao, jastreb] = pticeGrabljivice;
console.log(`${orao.naziv}\n${orao.duzina}\n${orao.rasponKrila}\n${orao.tezina}\n${orao.opis.ukratko}\n${orao.opis.staniste}\n${orao.opis.glavneZnacajke}\n${orao.sistematika.carstvo}\n${orao.sistematika.koljeno}\n${orao.sistematika.razred}\n${orao.sistematika.red}\n${orao.sistematika.porodica}`);
console.log(`${jastreb.naziv}\n${jastreb.duzina}\n${jastreb.rasponKrila}\n${jastreb.tezina}\n${jastreb.opis.ukratko}\n${jastreb.opis.staniste}\n${jastreb.opis.glavneZnacajke}\n${jastreb.sistematika.carstvo}\n${jastreb.sistematika.koljeno}\n${jastreb.sistematika.razred}\n${jastreb.sistematika.red}\n${jastreb.sistematika.porodica}`);

let [lastavica, slavuj] = pticeSelice;
console.log(`${lastavica.naziv}\n${lastavica.duzina}\n${lastavica.rasponKrila}\n${lastavica.tezina}\n${lastavica.opis.ukratko}\n${lastavica.opis.staniste}\n${lastavica.opis.glavneZnacajke}\n${lastavica.sistematika.carstvo}\n${lastavica.sistematika.koljeno}\n${lastavica.sistematika.razred}\n${lastavica.sistematika.red}\n${lastavica.sistematika.porodica}`);
console.log(`${slavuj.naziv}\n${slavuj.duzina}\n${slavuj.rasponKrila}\n${slavuj.tezina}\n${slavuj.opis.ukratko}\n${slavuj.opis.staniste}\n${slavuj.opis.glavneZnacajke}\n${slavuj.sistematika.carstvo}\n${slavuj.sistematika.koljeno}\n${slavuj.sistematika.razred}\n${slavuj.sistematika.red}\n${slavuj.sistematika.porodica}`);

//3. Zadatak

for (let n of pticeGrabljivice){
    console.log(n.naziv, n.opis);
};

for (let n of pticeSelice){
    console.log(n.naziv, n.opis);
};


//4. Zadatak

console.log(`Prosječna duljina tijela ptica grabljivica: ${(pticeGrabljivice[0].duzina + pticeGrabljivice[1].duzina) / pticeGrabljivice.length} cm`);
console.log(`Prosječna duljina tijela ptica selica: ${(pticeSelice[0].duzina + pticeSelice[1].duzina) / pticeSelice.length} cm`);

let ptice = [{...pticeGrabljivice}, {...pticeSelice}];
console.log(`Prosječna duljina tijela ptica: ${(ptice[0][0].duzina + ptice[0][1].duzina + ptice[1][0].duzina + ptice[1][1].duzina) / 4} cm`);

//5. Zadatak

prosjecnaDuzina = (ptice[0][0].duzina + ptice[0][1].duzina + ptice[1][0].duzina + ptice[1][1].duzina) / 4;
let noviNiz = []

for (let n of ptice){
    for (i = 0; i < 2; i++){
        if (n[i].duzina > prosjecnaDuzina){
            for (const item in n[i]) {
                if(typeof(n[i][item]) == 'number' || item == 'naziv'){
                    const element = {
                        [item] : n[i][item]
                    }
                    let obj = Object.assign(element)
                    noviNiz.push({...obj})
                }   
            } 
        }
    }
};

console.log(noviNiz);