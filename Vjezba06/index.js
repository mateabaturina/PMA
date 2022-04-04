//const x = 'rijec';
//console.log(x);
//x = 'novarijec';
//console.log(x);

//let a = 'Riječ';
//let a = 'Nova Riječ';
//a = 'promijenjeno';
//console.log(a);

//var a = 'riječ';

//console.log(typeof(a));

//b = a.toUpperCase();
//console.log(b);

//let m = `2 + 2 = ${2+2}\nnovi redak\n
//riječ a je: ${a};`
//console.log(m);

//let br = 123;
//console.log(`${br}\n ${typeof(br)}`);

let a = 100;
let b = 200;
let c = "300";

var rez = a + b + c;
console.log(rez);
rez = c + a + b;
console.log(rez);
rez = b + c + a;
console.log(rez);

//let noviniz = [1, 2, 3, 4];
//console.log(noviniz);
//console.log(noviniz[1]);
//console.log(noviniz.length);

//let niz = [10];
//let nniz = new Array(10, 2, 3);
//console.log(`niz: ${niz}\n nniz: ${nniz}`);

let niz1 = [1,14,'abc','d',55];
let niz2 = niz1;
niz2[3] = 'ABC';
console.log(`niz1: ${niz1}\n\nniz2: ${niz2}`);

//1. Zadatak
let niz = [1, 2, 3, 4, 5];

for(let i = 0; i < niz.length; i++){
    if ((niz[i]%2) != 0){
        console.log(`niz: ${niz[i]}`);
    }
};

//2. Zadatak
let niz_1 = [1, 2, 3];
let niz_2 = [4, 5, "šest", 7, "8", 9];

console.log(`Duljina niza 1: ${niz_1.length}\n\nDuljina niza 2: ${niz_2.length}`);

//3. Zadatak
let countNumber1 = 0;
let countString1 = 0;
for(let i = 0; i < niz_1.length; i++){
    if (typeof(niz_1[i]) == Number){
        countNumber1++;
    }
    else{
        countString1++;
    }
};

console.log(`niz1 brojčani elementi: ${countNumber1}\n\nniz1 nebrojčani elementi: ${countString1}`);

let countNumber2 = 0;
let countString2 = 0;
for(let i = 0; i < niz_2.length; i++){
    if (typeof(niz_2[i]) == Number){
        countNumber2++;
    }
    else{
        countString2++;
    }
};

console.log(`niz1 brojčani elementi: ${countNumber2}\n\nniz1 nebrojčani elementi: ${countString2}`);
