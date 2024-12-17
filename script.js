function generateStars() {
    const starfield = document.getElementById('starfield');
    
    starfield.innerHTML = '';
    
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        
        star.style.animationDelay = `${Math.random() * 2}s`;

        const color = `hsl(${Math.random() * 360}, 100%, 80%)`;
        star.style.backgroundColor = color;

        starfield.appendChild(star);
    }
}

window.onload = generateStars;

window.onresize = generateStars;
