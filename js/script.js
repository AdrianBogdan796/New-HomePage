console.log("Witam serdecznie.");

let button = document.querySelector(".button");
let img = document.querySelector("img");

button.addEventListener("click", () => {
    img.remove();
});

let button2 = document.querySelector(".button2");
let table = document.querySelector("table");

button2.addEventListener("click", () => {
    table.classList.toggle("dark");

    if (table.classList.contains("dark")) {
        button2.innerText = "Zmień kolor tabeli na ciemny";
    } else {
        button2.innerText = "Zmień kolor tabeli na jasny";
    }
});