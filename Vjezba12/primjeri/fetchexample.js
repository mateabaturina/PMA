//registrirajte se na accu weather API i upišite svoj ključ na lokacijama
// document.getElementById('collect').addEventListener('click',()=>{
//         fetch('http://dataservice.accuweather.com/locations/v1/regions?apikey={vaš ključ}')
//         .then(res=>
//             {
//                 console.log(res)
//                 return res.json()    
//             } )
//         .then(data=> {
//             // document.getElementById('data').innerText=;
//             console.log(data)
//             for (let c of data)
//             {
//                 console.log(`Region ID:${c.ID }\t Region Name: ${c.EnglishName}`)

//                 if (c.ID ==='EUR'){
//                     fetch(`http://dataservice.accuweather.com/locations/v1/countries/EUR?apikey={vaš ključ}`)
//                     .then(res=>res.json())
//                     .then(
//                         data=>{
//                             console.log(data)
//                             fetch(`http://dataservice.accuweather.com/locations/v1/adminareas/HR?apikey={vaš ključ}`)
//                             .then(res=>res.json())
//                             .then( data=>
//                                 console.log(data)
//                             )
//                             .catch(err=>console.log(err))
//                         }
//                     )
//                     .catch(err=>console.log(err))
//                 } }
        
            
//         })
//         .catch(err=> console.log(err))
//         })

document.getElementById('topm').addEventListener('click',()=>{
    fetch('https://imdb-api.com/en/API/Top250Movies/k_y7i1dnif')
    .then(res=> res.json())
    .then(data=> {

        //ispisati prvih 10 podataka
        console.log(data)
        console.log(data.items)
        for(let i = 0;i<10;i++){
            document.getElementById('data').innerText += `fulltitle: ${data.items[i].fullTitle}\n`;
  
        }
    })
    .catch(err=> console.log(err))
    })