const items = document.querySelectorAll(".menu-item")
const popup = document.getElementById("popup")

const title = document.getElementById("popup-title")
const desc = document.getElementById("popup-desc")
const img = document.getElementById("popup-img")

items.forEach(item => {

item.addEventListener("click", () => {

title.innerText = item.dataset.title
desc.innerText = item.dataset.desc
img.src = item.dataset.img

popup.style.display = "flex"

})

})

popup.addEventListener("click", (e) => {

if(e.target === popup){

popup.style.display = "none"

}

})