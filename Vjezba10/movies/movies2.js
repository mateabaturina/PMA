const list = document.querySelector('#movie-list ul');
const forms = document.forms;


// dodavanje filma
const addForm = forms['add-movie'];


addForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  //upisana vrijednost u textbox
   const movieToAdd = addForm.querySelector('input[type="text"]').value;

   //Vaše rješenje napišite ispod ove linije....
   //potrebno je dodati li s nazivom filma
   //te botun s opcijom za brisanje

  const li = document.createElement('li');

  const watched = document.createElement('span');
  watched.className = 'watched'
  li.appendChild(watched);

  const textspan = document.createElement('span');
  textspan.className = 'name'
  textspan.textContent = movieToAdd;
  li.appendChild(textspan);

  const btn = document.createElement('span');
  btn.className = 'delete'
  btn.textContent = "Delete";
  li.appendChild(btn);

  list.appendChild(li);
  changeColor();
});

document.querySelector('body').addEventListener('click', (e)=>{
  console.log(e);
  console.log(e.target);
  console.log(e.type);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.parentElement);
});

document.querySelector('body').addEventListener('click', (e)=>{
  if (e.target.className == 'delete'){  
    list.removeChild(e.target.parentElement);
  }
});

document.querySelector('body').addEventListener('click', (e)=>{
  if (e.target.className == 'watched'){  
    e.target.style.backgroundColor = "#8FDE31";
  }
});

function changeColor() {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i++) {
    if(i % 2 == 0) { 
      list[i].style.color = "#8FDE31";
    }
    else {
      list[i].style.backgroundColor = "#2BBB44";
    }
  }
}
