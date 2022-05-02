let prviparagraf = document.getElementById('prvip');
let prvi = document.querySelector('.red');
console.log(prvi);

let crveni = document.querySelectorAll('.red');
console.log(crveni);

let lista = document.getElementById('somelist');
lista.innerHTML += `
<li>novi el1</li>
<li>novi el2</li>`;