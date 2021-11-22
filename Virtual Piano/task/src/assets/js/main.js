function message(key){
    console.log(`The '${key.toUpperCase()}' is pressed`);
}

const pianoKeys = ["a", "s", "d", "f", "g", "h", "j"];

document.addEventListener("keydown", (event) => {
    if (pianoKeys.includes(event.key)){
        message(event.key);
    } else{
        console.log("Press piano keypad key");
    }
})
