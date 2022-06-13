//1. Zadatak

// document.getElementById('twenty').addEventListener('click',()=>{
//     fetch('https://imdb-api.com/en/API/SearchMovie/k_6vyn5foe/inception 2010')
//     .then(res=> 
//         {console.log(res)
//         res.json()})
//     .catch(err=> console.log(err))
//     })

// document.getElementById('twenty).addEventListener('click',()=>{
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

const list = document.querySelector('#movie-list ul');
const forms = document.forms;

const addForm = forms['add-movie'];

document.getElementById('twenty').addEventListener('click',()=>{
    fetch('https://imdb-api.com/en/API/Top250Movies/k_6vyn5foe')
    .then(res=> res.json())
    .then(data=> {
        for(let i = 0;i<20;i++){
            n = Math.floor((Math.random() * 250) + 1);
            const li = document.createElement('li');
            //document.getElementById('movie-list').innerHTML += `<img src= ${data.items[n].image}> fulltitle: ${data.items[n].fullTitle} year: ${data.items[n].year} IMDb: ${data.items[n].imDbRating}\n`;
            const watched = document.createElement('span');
            watched.className = 'watched'
            watched.innerHTML =  `<img src= ${data.items[n].image}>`
            li.appendChild(watched);

            const textspan = document.createElement('span');
            textspan.className = 'name'
            textspan.textContent = `Title: ${data.items[n].fullTitle}`;
            li.appendChild(textspan);

            const year = document.createElement('span');
            year.className = 'year'
            year.textContent = `Year: ${data.items[n].year}`;
            li.appendChild(year);

            const rate = document.createElement('span');
            rate.className = 'rating';
            rate.textContent = `imDB: ${data.items[n].imDbRating}`;
            li.appendChild(rate);

            const btn = document.createElement('span');
            btn.className = 'delete'
            btn.textContent = "Delete";
            li.appendChild(btn);

            list.appendChild(li);

            if (data.items[n].imDbRating > 8.5) {
                li.style.backgroundColor = "#2BBB44";
            }
        }
    })
    .catch(err=> console.log(err))
    })

    document.querySelector('body').addEventListener('click', (e)=>{
        if (e.target.className == 'delete'){  
          list.removeChild(e.target.parentElement);
        }
      });


addForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    fetch('https://imdb-api.com/en/API/SearchMovie/k_6vyn5foe/'+addForm.querySelector('input[type="text"]').value)
    .then(res=> res.json())
    .then(data=> {
        console.log(data.results);
        for(let i = 0;i<9;i++){
            const li = document.createElement('li');
            //document.getElementById('movie-list').innerHTML += `<img src= ${data.items[n].image}> fulltitle: ${data.items[n].fullTitle} year: ${data.items[n].year} IMDb: ${data.items[n].imDbRating}\n`;
            // const watched = document.createElement('span');
            // watched.className = 'watched'
            // watched.innerHTML =  `<img src= ${data.items.image}>`
            // li.appendChild(watched);

            // const textspan = document.createElement('span');
            // textspan.className = 'name'
            // textspan.textContent = `Title: ${data.items.fullTitle}`;
            // li.appendChild(textspan);

            // const year = document.createElement('span');
            // year.className = 'year'
            // year.textContent = `Year: ${data.items.year}`;
            // li.appendChild(year);

            // const rate = document.createElement('span');
            // rate.className = 'rating';
            // rate.textContent = `imDB: ${data.items.imDbRating}`;
            // li.appendChild(rate);

            // const btn = document.createElement('span');
            // btn.className = 'delete'
            // btn.textContent = "Delete";
            // li.appendChild(btn);

            // list.appendChild(li);

            // if (data.items.imDbRating > 8.5) {
            //     li.style.backgroundColor = "#2BBB44";
            // }
        }
    })
    .catch(err=> console.log(err))
    
    })