// Task 1
const mainHeading = document.querySelector("#mainHeading").innerHTML =
  "Day-9 JS by chai aur code";
// Task 2
const btn = document.querySelectorAll(".authBtn")[0].style.backgroundColor = "skyblue"

// Task 3
const newDiv = document.createElement("div")
newDiv.innerHTML = "I'm the new div!"
newDiv.classList.add(".newDiv")
document.body.appendChild(newDiv);

// Task 4
const tech = document.querySelector(".tech")
const newListItem = document.createElement("li")
newListItem.innerHTML = "NodeJs"
tech.appendChild(newListItem)

// Task 5
const singupBtn = document.querySelectorAll(".authBtn")[1]
function removeSignup (){
  singupBtn.remove();
}

// Task 6
const lastElemOfBody = document.body.lastChild
function removeLastElem(){
  lastElemOfBody.remove()
}

// Task 7
const newSrc = "2.jpg"

const image = document.querySelector("img")
function imageChanger (){
  image.setAttribute("src", newSrc)
}

// Task 8 

function magic(){
  image.classList.add("myImg")
  setTimeout(() => {
    image.classList.remove("myImg");
  }, 2000);
}

// Task 9
const paragraph = document.querySelector(".impText")
const actionBtn = document.querySelector("#para")
actionBtn.addEventListener("click", ()=>{
  paragraph.innerHTML = "intro paragraph"
})

// Task 10 
actionBtn,addEventListener("mouseover",()=>{
  actionBtn.style.borderColor = "red"
})