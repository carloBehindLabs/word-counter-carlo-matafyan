const counter = document.querySelector(".counter");
const input = document.querySelector(".input");
const button = document.querySelector("button");

let letters = 0;
let words = 0;
let sentences = 0;

function changeLettersCount(text) {}

function changeWordsCount(text) {}

function changeSentencesCount(text) {}

input.addEventListener("keyup", (event) => {
    console.log(event.target.value);
    
    changeLettersCount(event.target.value);
    changeWordsCount(event.target.value);
    changeSentencesCount(event.target.value);

    const counterChildrens = counter.children;
    counterChildrens[0].textContent = "Letters: " + letters;
    counterChildrens[1].textContent = "Words: " + words;
    counterChildrens[2].textContent = "Sentences: " + sentences;
});

const colors = ["#456123", "#ae3243", "#ff3276", "#432fae", "#7643ff"];

button.addEventListener("click", (event) => {
    let randomIndex = Math.floor(Math.random() * 10) % 5;
    input.setAttribute("style", `background-color: ${colors[randomIndex]}`);
});