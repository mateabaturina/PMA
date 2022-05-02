let asid = document.querySelector('.aside');
asid.style.backgroundColor = "#EF2FD2"

let heade = document.querySelector('.header');
heade.style.backgroundColor = "#5D0750"

let intr = document.querySelector('.intro');
heade.innerHTML = `<h1>University <br> Art Gallery <br> Podnaslov</h1>
<div class="intro">
            The arts in the collection of the modern art gallery all 
            started from a spark of inspiration. Visit us and find out if these
            pieces will inspire you.  
        
        </div>`;

let foote = document.querySelector('.footer');
foote.style.backgroundColor = "#5D0750";

let tekst2 = document.getElementById('text2');
tekst2.style.backgroundColor = "#FA703C";

let contentcel = document.querySelectorAll('.contentcell');
for (let i = 0; i < contentcel.length; i++) {
    contentcel[i].style.border = "5px solid black";
};

// let list = document.querySelector('#menu>li');



// let naslov = document.querySelectorAll('.title');
// naslov.style.color = "#D6EB22";
