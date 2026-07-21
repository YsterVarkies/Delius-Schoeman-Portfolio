function scrollToElement(element){
    document.getElementById(element).scrollIntoView({
        behavior: "smooth",
        block:"start"
    });
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the document click from firing
    navLinks.classList.toggle("active");
});

// Close when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Close when clicking anywhere else
document.addEventListener("click", (e) => {
    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});