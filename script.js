function generateStars() {
    const starfield = document.getElementById('starfield');
    starfield.innerHTML = '';

    const starCount = 200;
    const fragment = document.createDocumentFragment();

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 3 + 1;
        const x = Math.random() * windowWidth;
        const y = Math.random() * windowHeight;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${Math.random() * 2}s`;

        const color = `hsl(${Math.random() * 360}, 100%, 80%)`;
        star.style.backgroundColor = color;

        fragment.appendChild(star);
    }

    starfield.appendChild(fragment);
}

var titleText = "username";
var displayText = "";
var isTyping = true;
var index = 0;

function loop() {
    if (isTyping) {
        displayText += titleText[index++];
        if (index === titleText.length) {
            isTyping = false;
        }
    } else {
        displayText = displayText.slice(0, -1);
        if (displayText.length === 0) {
            isTyping = true;
            index = 0;
        }
    }
    document.title = displayText;
}

setInterval(loop, 200);

window.onload = generateStars;
window.onresize = generateStars;
