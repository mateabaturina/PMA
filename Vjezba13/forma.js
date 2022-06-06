document.getElementById('getdata').addEventListener('click',function(e){
    e.preventDefault()
    console.log('fetch...')
    //GET zahtjev
    fetch(
        'http://192.168.203.220:8080/users'
    )
    .then(res=> {
        return res.json()
        }).then(data=> console.log(data)).catch(err => console.log(err))
}) 

// document.getElementById('username').addEventListener('click', function(e){
//     const postData = {

//     }
// })

document.getElementById('getuserid').addEventListener('click',function(e){
    e.preventDefault()
    let id = document.getElementById('userid').value
    console.log('id');
    fetch('http://192.168.203.220:8080/users/$1',[id])
    .then(res=>res.json())
    .then(data=>console.log(data[0]))
    .catch(err=>console.log(err))
})