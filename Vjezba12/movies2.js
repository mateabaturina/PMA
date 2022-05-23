//1. Zadatak

// document.getElementById('twenty').addEventListener('click',()=>{
//     fetch('https://imdb-api.com/en/API/SearchMovie/k_6vyn5foe/inception 2010')
//     .then(res=> 
//         {console.log(res)
//         res.json()})
//     .catch(err=> console.log(err))
//     })

// document.getElementById('twenty').addEventListener('click',()=>{
//     fetch('https://imdb-api.com/en/API/Top250Movies/k_6vyn5foe')
//     .then(res=> res.json())
//     .then(data=> {
//         // console.log(data)
//         // console.log(data.items)
//         for(let i = 0;i<20;i++){
//             console.log(`fulltitle: ${data.items[i].fullTitle} year: ${data.items[i].year} IMDb: ${data.items[i].imDbRating}\n`);
    
//         }
//     })
//     .catch(err=> console.log(err))
//     })

//2. Zadatak

document.getElementById('twenty').addEventListener('click',()=>{
    fetch('https://imdb-api.com/en/API/Top250Movies/k_6vyn5foe')
    .then(res=> res.json())
    .then(data=> {
        for(let i = 0;i<20;i++){
            n = Math.floor((Math.random() * 250) + 1);
            document.getElementById('movie-list').innerText += `fulltitle: ${data.items[n].fullTitle} year: ${data.items[n].year} IMDb: ${data.items[n].imDbRating}\n`;
    
        }
    })
    .catch(err=> console.log(err))
    })

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