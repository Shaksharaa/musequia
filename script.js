
console.log("Welcome to Muséquia! ☾");

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
    category.addEventListener("click", () => {
        alert("Welcome to " + category.textContent.trim());
    });
});
