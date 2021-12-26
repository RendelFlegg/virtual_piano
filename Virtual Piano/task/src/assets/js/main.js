function message(key) {
    console.log(`The '${key.toUpperCase()}' is pressed`);
}

function playAudio(key) {
    let audio = new Audio(`media/${key.toUpperCase()}.mp3`);
    audio.play();
}

const pianoKeys = ["a", "s", "d", "f", "g", "h", "j", "w", "e", "t", "y", "u"];

document.addEventListener("keydown", (event) => {
    if (pianoKeys.includes(event.key)){
        message(event.key);
        playAudio(event.key);
    } else{
        console.log("Press piano keypad key");
    }
})
