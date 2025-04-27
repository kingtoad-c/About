console.log("Welcome to kingtoad-c's Portfolio!");

const glitchElements = document.querySelectorAll('.glitch, .glitch-text');
glitchElements.forEach((element) => {
    // Add a glitchy delay effect when the page loads
    setInterval(() => {
        element.style.animation = "glitch-anim 2s infinite linear";
    }, 1000);
});
