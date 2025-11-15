const inputElem = document.getElementById("input-js");
const buttonElem = document.getElementById("button-js");

inputElem.addEventListener("input", onChangeBtnContent)
function onChangeBtnContent(event) {
    buttonElem.textContent = event.target.value
}



const imgElem = document.querySelector(".gallery-img-js");
imgElem.src = "./images/evening-city.jpg"
imgElem.alt = "An evening city"



const linkElem = document.querySelector(".box-link");
const picElem = document.querySelector(".box-img");
linkElem.href = "https://www.instagram.com/accounts/login/";
picElem.alt = "a photo of a sunset"



const listElem = document.querySelector(".list");
listElem.firstElementChild.textContent = "A new sentence"
