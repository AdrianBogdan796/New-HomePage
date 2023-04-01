{
    const welcome = () => {
        console.log("Witam serdecznie.");
        }
        
        const toggleBackground = () => {
            table.classList.toggle("dark");
        
            if (table.classList.contains("dark")) {
                changeBackgroundButton.innerText = "Zmień kolor tabeli na ciemny";
            } else {
                changeBackgroundButton.innerText = "Zmień kolor tabeli na jasny";
            }
        }
        
        welcome();
        
        const button = document.querySelector(".button");
        const img = document.querySelector("img");
        
        button.addEventListener("click", () => {
            img.remove();
        });
        
        const changeBackgroundButton = document.querySelector(".button2");
        const table = document.querySelector("table");
        
        changeBackgroundButton.addEventListener("click", toggleBackground);
}