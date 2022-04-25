export function zbroji(a, b){
    return a + b;
}

export function square(a){
    let result = a**2;
    return result;
}

countOscars = 0

export function sumOscars(niz){
    for (i=0; i<niz.length; i++){
        let {oscars:oscarsMovies} = niz[i];
        countOscars += oscarsMovies;
    }
    return countOscars;
}