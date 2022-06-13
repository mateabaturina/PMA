const list = document.querySelector('#movie-list ul');
const forms = document.forms;

// dodavanje filma na listu
const addForm = forms['add-movie'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  //upisana vrijednost u textbox
  const movieToAdd = addForm.querySelector('input[type="text"]').value;
  
  //Rješenje dodajte ispod ove linije...

  const li = document.createElement('li');

  const textspan = document.createElement('span');
  textspan.className = 'name'
  textspan.textContent = movieToAdd;
  li.appendChild(textspan);

  const year = document.createElement('span');
  year.className = 'year'
  year.textContent = " Godina izdanja";
  li.appendChild(year);

  list.appendChild(li);

});

//ovdje implementirajte funkciju za promjenu boje

let parni = document.querySelectorAll('#movie-list li:nth-of-type(even)');
let neparni = document.querySelectorAll('#movie-list li:nth-of-type(odd)');

var changeColor = function (a, b) {
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = b;
    };
};

changeColor(parni, '#45ffaa');
changeColor(neparni, 'red')

var changeGodina = function () {
  let godina = document.querySelectorAll(".year");
  for (let i = 0; i < godina.length; i++) {
    godina[i].style.fontWeight = "bolder";
  };
};

changeGodina();

let heade = document.getElementById('page-banner');

var changeColorHeader = function (a, b) {
    a.style.backgroundColor = b;
};

changeColorHeader(heade, "#45ffaa");