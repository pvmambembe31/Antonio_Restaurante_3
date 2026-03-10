function openModal(title,desc){

let modal=document.getElementById("modal")
let box=document.getElementById("modalBox")

box.innerHTML=`

<h2>${title}</h2>
<p>${desc}</p>

`

modal.classList.add("active")

}

document.getElementById("modal").addEventListener("click",function(e){

if(e.target.id==="modal"){
this.classList.remove("active")
}

})