const counter = document.querySelector(".counter");
const input = document.querySelector(".input");
const button = document.querySelector("button");
const body = document.querySelector("body")

function getLettersCount(text) {
    console.log("function changeLettersCount is called!");

    let letters = 0;
    console.log(text.split(""));
    
    text.split("").map((item, i) => {
        if ((item >= 'A' && item <= 'Z') || (item >= 'a' && item <= 'z')) {
            letters++;
        }
    });
    return letters;
}

function getWordsCount(text) {
    console.log("function changeWordsCount is called!");

    let words = 0;
    text.split("").map((item, i, text) => {
        if (item == ' ' || item == '\n') {
            if ((text[i + 1] >= 'A' && text[i + 1] <= 'Z') || (text[i + 1] >= 'a' && text[i + 1] <= 'z')) {
                words++;
            }
        }
    });
    return words;
}

function getSentencesCount(text) {
    console.log("function changeSentencesCount is called!");

    let sentences = 0;
    text.split("").map((item, i, text) => {
        if (item == '.' || item == '\n' || item == ',') {
            if ((text[i + 1] >= 'A' && text[i + 1] <= 'Z') || (text[i + 1] >= 'a' && text[i + 1] <= 'z') || (text[i + 2] >= 'A' && text[i + 2] <= 'Z') || (text[i + 2] >= 'a' && text[i + 2] <= 'z')) {
                sentences++;
            }
        }
    });
    return sentences;
}

input.addEventListener("keyup", (event) => {
    const counterChildrens = counter.children;
    counterChildrens[0].textContent = "Letters: " + getLettersCount(event.target.value);
    counterChildrens[1].textContent = "Words: " + getWordsCount(event.target.value);
    counterChildrens[2].textContent = "Sentences: " + getSentencesCount(event.target.value);
});

const colors = ["#456123", "#ae3243", "#ff3276", "#432fae", "#7643ff"];
const backgroundColor = ["#23350dff", "#69111dff", "#90123cff", "#1f0f75ff", "#471ac4ff"];

button.addEventListener("click", (event) => {
    let randomIndex = Math.floor(Math.random() * 10) % 5;
    input.setAttribute("style", `background-color: ${colors[randomIndex]}`);
    body.setAttribute("style", `background-color: ${backgroundColor[randomIndex]}`);
});