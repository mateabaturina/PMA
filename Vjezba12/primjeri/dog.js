document.getElementById('get').addEventListener('click',()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>{
        console.log(res);
        return res.json()})
    .then( data=>{
        console.log(data)
        document.getElementById('dogphoto').innerHTML = `<img src= ${data.message}>` 
})
    .catch(err=>console.log(err))
})