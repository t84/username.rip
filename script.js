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


window.onload = generateStars;
window.onresize = generateStars;
