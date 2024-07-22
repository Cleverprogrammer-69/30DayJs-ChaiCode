// Task 1
const paraChangerBtn = document.querySelector(".paraChanger");
const introPara = document.querySelector(".intro")

paraChangerBtn.addEventListener("click",function(){
    introPara.innerHTML = "Today is Day 10 of 30Day Js Challenge"
})

// Task 2
const visiChanger = document.querySelector(".visiChanger");
  const myImage = document.querySelector("#myImage");

  visiChanger.addEventListener("dblclick", () => {
    if (myImage.style.visibility === "hidden") {
      myImage.style.visibility = "visible";
    } else {
      myImage.style.visibility = "hidden";
    }
  });

// Task 3
introPara.addEventListener("mouseover",()=>{
    introPara.style.backgroundColor = "red"
})

// Task 4
introPara.addEventListener("mouseout", ()=>{
    introPara.style.backgroundColor = null
})

// Task 5
const nameField = document.querySelector("#name")
nameField.addEventListener("keydown", (event)=>{
    console.log(event.key)
})

// Task 6 
nameField.addEventListener("keyup", (event)=>{
    introPara.innerHTML = nameField.value
})

// Task 7
const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    let form = registerForm.elements
    let formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.number.value
    }
    console.log(formData)
})

// Task 8
const fruitPara = document.querySelector("#fruit")
const fruits = document.querySelector("#fruits")
fruits.addEventListener("change",()=>{
    fruitPara.innerHTML = fruits.value
})

// Task 9
const countries = document.querySelector("#countries")


countries.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

// Task 10
const parentElement = document.getElementById("parent");

parentElement.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    console.log("Div clicked:", event.target.textContent);
  }
});

const newDiv = document.createElement("div");
newDiv.textContent = 'Lorme ipsum';
parentElement.appendChild(newDiv);

const newDiv1 = document.createElement("div");
newDiv1.textContent = "Lorme ipsum 123";
parentElement.appendChild(newDiv1);