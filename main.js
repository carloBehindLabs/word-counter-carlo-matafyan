const counter = document.querySelector(".counter");
const input = document.querySelector(".input");
const button = document.querySelector("button");
const body = document.querySelector("body")

function getLettersCount(text) {
    let letters = 0;    
    text.split("").forEach((item) => {
        if ((item >= 'A' && item <= 'Z') || (item >= 'a' && item <= 'z')) {
            letters++;
        }
    });
    return letters;
}

function getWordsCount(text) {
    let words = 0;
    text.split(/\s+/).forEach((item) => {
        if (item) words++;
    });
    return words;
}

function getSentencesCount(text) {
    let sentences = 0;
    text.split(/[.!?]+/).forEach((item) => {
        if (item.trim().length > 0) sentences++;
    });
    return sentences;
}

input.addEventListener("keyup", (event) => {
    const counterChildrens = counter.children;
    
    counterChildrens[0].textContent = "Letters: " + getLettersCount(event.target.value);
    counterChildrens[1].textContent = "Words: " + getWordsCount(event.target.value);
    counterChildrens[2].textContent = "Sentences: " + getSentencesCount(event.target.value);
});

button.addEventListener("click", (event) => {
    const colors = ["#456123", "#ae3243", "#ff3276", "#432fae", "#7643ff"];
    const backgroundColor = ["#192709ff", "#450911ff", "#590723ff", "#100647ff", "#260c70ff"];
    let randomIndex = Math.floor(Math.random() * 10) % 5;
    input.setAttribute("style", `background-color: ${colors[randomIndex]}; color: ${backgroundColor[randomIndex]}`);
    body.setAttribute("style", `background-color: ${backgroundColor[randomIndex]}`);
    button.setAttribute("style", `background-color: ${colors[randomIndex]}; color: ${backgroundColor[randomIndex]}`);
    counter.children[0].setAttribute("style", `background-color: ${backgroundColor[randomIndex]}`);
});