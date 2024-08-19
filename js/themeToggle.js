// themeToggle.js

export function initThemeToggle() {
    // Check and apply the system's preferred color scheme on initial load
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");
    const currentTheme = storedTheme ? storedTheme : (prefersDarkScheme ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", currentTheme);
    updateToggleButton(currentTheme);

    // Event listener for theme toggle button
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateToggleButton(newTheme);
}

function updateToggleButton(theme) {
    const toggleButton = document.getElementById("theme-toggle");
    if (theme === "dark") {
        toggleButton.textContent = "🌜";
    } else {
        toggleButton.textContent = "🌞";
    }
}
