//primjer1
//click event
'use strict'

const box = document.getElementById('color');
let change = (a) => {
    box.style.backgroundColor = a;
    box.style.color= 'white';
    box.innerText = `the color is ${a}`;

}
document.getElementById('change1').addEventListener('click', (e)=>{
    //console.log(e);
    change('blue');
});

document.getElementById('change2').addEventListener('click',()=>{
    change('red');
});