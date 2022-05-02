import * as Utils from './utils.js';
import * as Oscars from './oscars.js';

// console.log(Utils.zbroji(2, 13));
// console.log(Utils.square(5));

Oscars.a;

// pozdrav();

// function pozdrav(){
//     console.log("Pozdrav!");
// }



// //alert(pozdrav);

// pozdrav();

// let zbroj = zbroji(13, 2);
// console.log(zbroj);

// // anonimna funkcija

// let hello = function() {
//     console.log("Hello!");
// }

// hello();

// let osoba = {
//     ime: "Ana",
//     dob: 31,
//     pozdrav: function(){
//         console.log("Pozdrav od Ane!");
//     }
// }

// let {pozdrav:pozdravosoba} = osoba;
// pozdravosoba();

// osoba.pozdrav();

// zadatak 1.

let person1 = {
    name: "Jack",
    age: 31,
    joke: function(){
        return "Why did the chicken cross the road? To get to the other side";
    }
}

let person2 = {
    name: "Rose",
    age: 28,
    joke: function(){
        return "Why did the duck cross the road? To get to the other side";
    }
}

let person3 = {
    name: "Anthony",
    age: 32,
    joke: function(){
        return "Why did the dog cross the road? To get to the other side";
    }
}

let person4 = {
    name: "Kate",
    age: 28,
    joke: function(){
        return "Why did the cat cross the road? To get to the other side";
    }
}

let niz = [person1, person2, person3, person4];

function sala(niz) {
    for (let i=0; i<niz.length; i++){
        if(i % 2 != 0) {
            let {joke:jokeperson} = niz[i];
            console.log(jokeperson());
        }
    }
}

sala(niz);

// arrow funkcija

let hello = () => console.log("Hello!");

hello();

//console.log(square(5));

// function square(a) {
//     let result = a**2;
//     return result;
// }

// let square = function(a) {
//     let result = a**2;
//     return result;
// }

// zadatak 2.
//1.
let employee = {
    name: "Ann",
    age: 21,
    adress:{
        city: "New York"
    },
    salary: 4560
}

let rise = (e) => {
    return e += 0.1 * e;
}

let {salary:salaryemployee} = employee;

console.log(rise(salaryemployee));

//2.
let {name:nameemployee} = employee;
let {adress:adressemployee} = employee;
let {city:cityemployee} = adressemployee;

let data = (ime, grad) => {
    console.log(ime);
    console.log(grad);
}

data(nameemployee, cityemployee);

//3.
let employee1 = {
    name: "Jake",
    age: 21,
    adress:{
        city: "New York"
    },
    salary: 2530
}

let employee2 = {
    name: "Steven",
    age: 21,
    adress:{
        city: "New York"
    },
    salary: 5560
}

let employee3 = {
    name: "Marc",
    age: 21,
    adress:{
        city: "New York"
    },
    salary: 3000
}

let zaposlenici = [employee1, employee2, employee3];
let averageSalary = 0;

function averagePlaca(niz) {
    for (let i=0; i<niz.length; i++){
        let {salary:salaryemployee} = niz[i];
        averageSalary += salaryemployee;
        if (i == niz.length - 1){
            console.log(averageSalary/(niz.length));
        }      
    }
}

averagePlaca(zaposlenici);

// zadatak 3.