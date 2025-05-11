document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");

    title.addEventListener("mouseenter", () => {
        title.classList.add("glitch-effect");
    });

    title.addEventListener("mouseleave", () => {
        title.classList.remove("glitch-effect");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.location.href = "index.html"; // Redirect to Portfolio after 3s
    }, 5000);
});
