document.getElementById("hirozental-menu").addEventListener("click", () => {
    document.getElementById("aside").style.display = "block";
    document.getElementById("else").style.display = "none";
})
document.getElementById("close").addEventListener("click", () => {
    document.getElementById("aside").style.display = "none";
    document.getElementById("else").style.display = "block";
})

