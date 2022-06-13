let asid = document.querySelector('.aside');
asid.style.backgroundColor = "#EF2FD2"

let heade = document.querySelector('.header');
heade.style.backgroundColor = "#5D0750"

let naslov0 = document.querySelectorAll(".title");

for (let i = 0; i < naslov0.length; i++) {
    if(i == 1){
        let subtitle = document.createElement('p');
        subtitle.innerText = "Podnaslov";
        subtitle.style.fontSize = "medium";
        naslov0[i].appendChild(subtitle);
    }
};


let foote = document.querySelector('.footer');
foote.style.backgroundColor = "#5D0750";

let tekst2 = document.getElementById('text2');
tekst2.style.backgroundColor = "#FA703C";

let contentcel = document.querySelectorAll('.contentcell');
for (let i = 0; i < contentcel.length; i++) {
    contentcel[i].style.border = "5px solid black";
};

let evenLis = document.querySelectorAll('#menu li:nth-of-type(even)');

let naslovi = document.querySelectorAll('.title');

var changeColor = function (a, b) {
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = b;
    };
};

changeColor(evenLis, "orange");
changeColor(naslovi, "#D6EB22");

let naslov = document.querySelectorAll(".title");

var podnaziv = function (a) {
    for (let i = 0; i < a.length; i++) {
        let subtitle = document.createElement('p');
        subtitle.innerText = "Podnaslov";
        subtitle.style.fontSize = "medium";
        a[i].appendChild(subtitle);
    };
};

