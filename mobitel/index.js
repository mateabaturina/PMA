// function myFunction() {
//     if(document.getElementById('mobitel').checkValidity()){
//         let a = document.getElementById('mobitel');
//         a.style.border = "5px solid red";
//     }
//     else if(document.getElementById('ser_broj').checkValidity()){
//         let b = document.getElementById('ser_broj');
//         b.style.border = "5px solid red";
//     }
//     else if(document.getElementById('vlasnik').checkValidity()){
//         let c = document.getElementById('vlasnik');
//         c.style.border = "5px solid red";
//     }
// }

function myFunction() {
//     let niz = ['mobitel', 'ser_broj', 'vlasnik'];
//     for (let i = 0; i<3; i++){
//         if(document.getElementById(niz[i]).validity.valueMissing || document.getElementById(niz[i]).validity.tooShort){
//             console.log("Too long");
//             var a = document.getElementById(niz[i]);
//             a.style.border = "5px solid red";
//         }
// }
    if(document.getElementById('mobitel').checkValidity() && document.getElementById('mobitel').value.length>=3 && document.getElementById('ser_broj').checkValidity() && document.getElementById('ser_broj').value.length==6 &&  document.getElementById('vlasnik').checkValidity()){
        console.log("ok");
        console.log(document.getElementById('ser_broj').value.length);
    }
    else{
        let niz = ['mobitel', 'ser_broj', 'vlasnik'];
        for (let i = 0; i<3; i++){
            if(document.getElementById(niz[i]).validity.valueMissing || document.getElementById(niz[i]).validity.tooShort){
                let a = document.getElementById(niz[i]);
                a.style.border = "5px solid red";
                console.log(niz[i]);
            }
        }
    }
}

function deleteFunction() {
    let niz = ['mobitel', 'ser_broj', 'vlasnik'];
        for (let i = 0; i<3; i++){
            document.getElementById(niz[i]).value = '';
        }
}