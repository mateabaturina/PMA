console.log("prvi rezultat");
// setTimeout(rez, 2000);
console.log("treći rezultat");

//rez();

let niz = ['prvi', 'drugi', 'treci'];

function rez(){
    setTimeout(()=>{
        // for(le of niz){
        //     console.log(el);
        // }
        niz.forEach((value,index)=>{
            console.log(value);
        })
    }, 2000);
}

function getniz(){
    return new Promise((resolve, reject)=>{
        let greska = false;
        if(!greska){
            resolve('ispis niza');
        }
        else{
            reject('dogodila se greška');
        }
    })
}

//getniz().then(rez).catch(()=> console.log('Dogodila se greška!'));

getniz()
.then((res)=>{
    rez()
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})