const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
    const text = inputText.value.trim();

    if(text.length == 0){
        alert("Input cannot be empty");
        return;
    }
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const isPalidrome = cleanText === cleanText.split("").reverse("").join("");
    const message= isPalidrome ? '<span>yes. </span> Its a Pelidrome!': '<span>Nope </span>Not a Pelindrome';

    result.innerHTML = message;
    result.classList.remove("error", "success");
    setTimeout(()=>{
        result.classList.add(isPalidrome ? "success" : "error");
    }, 10);
});