import * as Utils from './utils.js';

let movie1 = {
    name: "Amadeus",
    year: 1984,
    oscars: 7
}

let movie2 = {
    name: "Lord of the Rings 3",
    year: 2003,
    oscars: 11
}

let movie3 = {
    name: "Parsite",
    year: 2019,
    oscars: 4
}

let movies = [movie1, movie2, movie3];


let calculate = (niz) => {
    let sum = Utils.sumOscars(niz);
    console.log(sum);
}

let a = calculate(movies);