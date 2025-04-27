console.log("Welcome to kingtoad-c's Portfolio!");

const glitchElements = document.querySelectorAll('.glitch, .glitch-text');
glitchElements.forEach((element) => {
    setInterval(() => {
        element.style.animation = "glitch-anim 2s infinite linear";
    }, 10000);
});
