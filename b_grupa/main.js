const list = document.querySelector('#popis');

document.getElementById("btnUcitaj").addEventListener('click', function(e) {
    e.preventDefault()

    fetch('http://localhost:4000/studenti')
    .then(res=> {return res.json()})
    //.then(data => console.log(data))
    .then(data => {
        for(let i=0; i<data.length; i++){
            const li = document.createElement('li');

            const studentid = document.createElement('span');
            studentid.className = "id"
            studentid.textContent = `id: ${data[i].id}`
            li.appendChild(studentid);

            const studentname = document.createElement('span');
            studentname.className = "student"
            studentname.textContent = ` - student: ${data[i].student} - `
            li.appendChild(studentname);

            const details = document.createElement('button');
            details.className = "btndetails"
            details.textContent = "Detalji"
            li.appendChild(details);

            list.appendChild(li);
        }
    })
    .catch(err => console.log(err))
})

const list2 = document.querySelector('#detalji');

document.querySelector('body').addEventListener('click', (e)=>{
    if(e.target.className == 'btndetails') {
        const n = document.getElementsByClassName("id");
        fetch('http://localhost:4000/studenti/$1', [n])
        .then(res => {return res.json()})
        //.then(data=>console.log(data))
        .then(data=>{
            const stid = document.createElement('li');
            stid.className = "id";
            stid.textContent = `ID: ${data.id}\n`
            list2.appendChild(stid);

            const st = document.createElement('li');
            st.className = "student"
            st.textContent = `\nstudent: ${data.student}\n`
            list2.appendChild(st);

            const raz = document.createElement('li');
            raz.className = "razina"
            raz.textContent = `Razina: ${data.detalji.studij.razina}`
            list2.appendChild(raz);

            const smj = document.createElement('li');
            smj.className = "smjer"
            smj.textContent = `Smjer: ${data.detalji.studij.smjer}`
            list2.appendChild(smj);

            const red = document.createElement('li');
            red.className = "redovni"
            red.textContent = `Redovni: ${data.detalji.redovni}`
            list2.appendChild(red);

            const li = document.createElement('li');
            const erase = document.createElement('button');
            erase.className = "btnBrisi"
            erase.textContent = " Brisi"
            li.appendChild(erase);
            list2.appendChild(li);
        })
        .catch(err=>console.log(err))
    }
})

document.querySelector('body').addEventListener('click', (e)=>{
    if(e.target.className == "btnBrisi") {
        // let m = document.querySelector("id").value;
        // console.log("m")
        list.removeChild(e.target.parentElement);
        fetch('http://localhost:4000/studenti/101',
        {method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }})
        .then(res=>{return res.json()})
        .then(data=>console.log(data))
        .catch(err=>console.log(err))

    }
})