const tb = document.getElementById('text');
tb.value = null;


tb.addEventListener('keyup',(e)=>{
    console.log(e.key.toString());
    console.log(tb.value);
    // document.getElementById('textdisplayed').innerText = tb.value;

    // document.getElementById('textdisplayed').innerText+= e.key.toString();
    document.getElementById('textdisplayed').innerText = e.target.value;

})

document.getElementById('changeText').addEventListener('click',()=>{
    const lbl =  document.getElementById('displaylabel');
    lbl.innerText = tb.value;
    lbl.style.color = "red";
});