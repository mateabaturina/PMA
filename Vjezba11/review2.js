
// function delayedHello(){
//     console.log('delayed hello....')
// }   

// console.log('Hello world....')
// setTimeout(delayedHello, 1000)
// console.log('hello again!')



//zadatak
const reviews = [
    {user: 'First User', content:'this is the first review'},
    {user: 'Second User', content:'this is the second review'},
    {user: 'Third User', content:'this is the third review'},
    {user: 'Fourth User', content:'this is the fourth review'}
];





function getReviews() {
   
    setTimeout(()=>{
        reviews.forEach((value,index)=>{
            // let d = document.appendChild('div');
            // d.className = 'rev';
            // d.innerText = reviews.value.user;
            // let s = document.appendChild('span');
            // s.className = 'username';
            // createReview(value.user, value.content);
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

getReviews();

function createReview(rev, callback){
    reviews.append(rev);
    setTimeout(()=>{
        callback
    })
}

createReview({user:'new review',content:'content of the new review'},getReviews);

