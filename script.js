document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".link");
    links.forEach((link, index) => {
        link.style.animationDelay = `${1.5 + index * 0.1}s`;
        link.addEventListener("mouseover", () => {
            link.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
        link.addEventListener("mouseout", () => {
            link.style.boxShadow = "none";
        });
    });
});
