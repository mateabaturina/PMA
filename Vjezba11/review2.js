
// function delayedHello(){
//     console.log('delayed hello....')
// }   

// console.log('Hello world....')
// setTimeout(delayedHello, 1000)
// console.log('hello again!')



//1. Zadatak
const reviews = [
    {user: 'First User', content:'this is the first review'},
    {user: 'Second User', content:'this is the second review'},
    {user: 'Third User', content:'this is the third review'},
    {user: 'Fourth User', content:'this is the fourth review'}
];





function getReviews() {
   
    setTimeout(()=>{
        reviews.forEach((value,index)=>{
            let reviewss = document.querySelector("#reviews");
            let review = document.createElement('div');
            let userName = document.createElement('span');
            let c = document.createElement('p');
            review.className = 'rev';
            c.innerText = value.content;
            userName.className = 'username'; 
            userName.innerText = value.user;
            review.appendChild(userName); 
            review.appendChild(c);
            reviewss.appendChild(review);
        })
    }, 3000);
}

// getReviews();

//2. Zadatak

function createReview(rev, callback){
    reviews.push(rev);
    setTimeout(()=>{
        callback;
    }, 2000);
}

//createReview({user:'new review',content:'content of the new review'},getReviews());

//3. Zadatak

// const nam = document.getElementById('username');
// const ins = document.getElementById('reviewinsert');
// nam.value= null;
// ins.value = null;

// nam.addEventListener("keydown", myFunctionName);

// function myFunctionName() {
//     let name = nam.value;
//     return name
// }

// ins.addEventListener("keydown", myFunctionReview);

// function myFunctionReview() {
//     let revie = ins.value;
//     return revie
// }

// function newReview(){
//     return new Promise((resolve, reject)=>{
//         let name = myFunctionName();
//         let review = myFunctionReview();

//         let r = {user: name, content:review};

//         if(name.length>=5){
//             resolve(reviews.push(r));
//             setTimeout(()=>{
//                 reviews.forEach((value,index)=>{
//                     if(index == (reviews.length - 1)){
//                         let reviewss = document.querySelector("#reviews");
//                         let review = document.createElement('div');
//                         let userName = document.createElement('span');
//                         let c = document.createElement('p');
//                         review.className = 'rev';
//                         c.innerText = value.content;
//                         userName.className = 'username'; 
//                         userName.innerText = value.user;
//                         review.appendChild(userName); 
//                         review.appendChild(c);
//                         reviewss.appendChild(review);
//                     }
//                 }) 
//             }, 3000);
//         }
//         else{
//             reject('username is too short');
//         }
//     })
// }

// document.querySelector('body').addEventListener('click', (e)=>{
//     if (e.target.value == "Add Review"){  
//       newReview();
//     }
//   });

//4. Zadatak

function getniz(){
    return new Promise((resolve, reject)=>{
        let greska = false;
        if(!greska){
            resolve('Funkcija je uspješno izvršena');
        }
        else{
            reject('dogodila se greška');
        }
    })
}

getniz()
.then((res)=>{
    getReviews()
    console.log(res + "\n" + "Broj objekata: " + reviews.length)
})
.catch((err)=>{
    console.log(err)
})

//5. Zadatak

const nam = document.getElementById('username');
const ins = document.getElementById('reviewinsert');
nam.value= null;
ins.value = null;

nam.addEventListener("keydown", myFunctionName);

function myFunctionName() {
    let name = nam.value;
    return name
}

ins.addEventListener("keydown", myFunctionReview);

function myFunctionReview() {
    let revie = ins.value;
    return revie
}

async function newReview(){
    return new Promise((resolve, reject)=>{
        let name = myFunctionName();
        let review = myFunctionReview();

        let r = {user: name, content:review};

        if(name.length>=5){
            try {
                resolve(reviews.push(r));
                setTimeout(()=>{
                    reviews.forEach((value,index)=>{
                        if(index == (reviews.length - 1)){
                            let reviewss = document.querySelector("#reviews");
                            let review = document.createElement('div');
                            let userName = document.createElement('span');
                            let c = document.createElement('p');
                            review.className = 'rev';
                            c.innerText = value.content;
                            userName.className = 'username'; 
                            userName.innerText = value.user;
                            review.appendChild(userName); 
                            review.appendChild(c);
                            reviewss.appendChild(review);
                        }
                    }) 
                }, 3000);
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            reject('username is too short');
        }
    })
}

document.querySelector('body').addEventListener('click', (e)=>{
    if (e.target.value == "Add Review"){  
      newReview();
    }
  });