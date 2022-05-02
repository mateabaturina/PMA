const list = document.querySelector('#movie-list ul');
const forms = document.forms;

// dodavanje filma na listu
const addForm = forms['add-movie'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  //upisana vrijednost u textbox
  const movieToAdd = addForm.querySelector('input[type="text"]').value;
  
  //Rješenje dodajte ispod ove linije...

});

//ovdje implementirajte funkciju za promjenu boje
