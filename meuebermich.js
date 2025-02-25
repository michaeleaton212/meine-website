const cursor = document.getElementById("cursor");

if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // Fügt den Hover-Effekt hinzu
    document.querySelectorAll(".button, .container, .card1, h1, h2, h3, h4").forEach(element => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add("hovered");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("hovered");
        });
    });
} else {
    console.warn("Element '#cursor' not found.");
}
