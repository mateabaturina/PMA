export function zbroji(a, b){
    return a + b;
}

export function square(a){
    let result = a**2;
    return result;
}

let countOscars = 0

export function sumOscars(niz){
    for (let i=0; i<niz.length; i++){
        let {oscars:oscarsMovies} = niz[i];
        countOscars += oscarsMovies;
    }
    return countOscars;
}