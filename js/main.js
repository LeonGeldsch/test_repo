const typewriterContainer = document.querySelector('.typewriter-text');

var welcomeText = "Hello, I am Leon. A Webdeveloper from Hamburg/Germany.";

console.log(welcomeText);

function typeWriterType (container, text) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            container.innerHTML += text[i];
        }, i*100);
    }
}

typeWriterType(typewriterContainer, welcomeText);