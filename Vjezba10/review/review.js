const nam = document.getElementById('name');
const locat = document.getElementById('location');
const ins = document.getElementById('reviewinsert');
nam.value= null;
locat.value=null;
ins.value = null;

nam.addEventListener("keydown", myFunctionName);

function myFunctionName() {
    document.getElementById("uname").textContent = nam.value;
}

locat.addEventListener("keydown", myFunctionLocation);

function myFunctionLocation() {
    document.getElementById("ulocation").textContent = locat.value;
}

ins.addEventListener("keydown", myFunctionReview);

function myFunctionReview() {
    document.getElementById("review").textContent = ins.value;
}

document.querySelector('body').addEventListener('keydown', (e)=>{
    console.log(e.key);
});