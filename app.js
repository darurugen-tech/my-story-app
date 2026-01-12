/* app.js - FINAL VERSION (Fixes Theme Lag) */

// --- 1. MASTER THEME LOGIC ---
function applyTheme() {
    const theme = localStorage.getItem("theme");
    const isLight = (theme === "light"); // Default is Dark, so check if Light
    
    // Apply to Body
    if (isLight) {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }

    // Update Icons (Checks for both IDs used in your pages)
    updateThemeIcons(isLight);
}

function updateThemeIcons(isLight) {
    // ID used in Index.html
    const icon1 = document.getElementById("theme-icon");
    const text1 = document.getElementById("theme-text");
    
    // ID used in View.html and Read.html
    const icon2 = document.getElementById("theme-btn"); 
    
    // Image Paths
    const sunIcon = "images/icons/icon_sun.png";
    const moonIcon = "images/icons/icon_moon.png";

    if (isLight) {
        // We are in Light Mode -> Show Moon (to switch to Dark)
        if (icon1) icon1.src = moonIcon;
        if (text1) text1.innerText = "Dark";
        if (icon2) icon2.src = moonIcon;
    } else {
        // We are in Dark Mode -> Show Sun (to switch to Light)
        if (icon1) icon1.src = sunIcon;
        if (text1) text1.innerText = "Light";
        if (icon2) icon2.src = sunIcon;
    }
}

function toggleTheme() {
    const isLight = document.body.classList.contains("light-mode");
    
    if (isLight) {
        // Switch to Dark
        localStorage.setItem("theme", "dark");
        document.body.classList.remove("light-mode");
        updateThemeIcons(false);
    } else {
        // Switch to Light
        localStorage.setItem("theme", "light");
        document.body.classList.add("light-mode");
        updateThemeIcons(true);
    }
}

// --- 2. SEARCH LOGIC ---
function handleSearch(event) {
    if (event.key === 'Enter') performSearch();
}

function performSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    
    const query = input.value.trim();
    if (!query) return;
    
    // Redirect to World Page
    location.href = `world.html?type=search&q=${encodeURIComponent(query)}`;
}

// --- 3. DRAG SCROLL LOGIC ---
function enableDragScroll() {
    const sliders = document.querySelectorAll('.scroll-container');
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// --- 4. AUTO-RUN ON LOAD (THE FIX) ---

// Run when page loads normally
document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    enableDragScroll();
});

// Run AGAIN when page is shown from "Back" history (Fixes the Lag)
window.addEventListener("pageshow", () => {
    applyTheme();
});

/* Add this to the bottom of app.js */

// --- HISTORY LOGIC ---
function addToHistory(id) {
    let history = JSON.parse(localStorage.getItem('khatoon_history')) || [];
    
    // Remove if already in list (so we can move it to the top)
    history = history.filter(item => item !== id);
    
    // Add to beginning of array
    history.unshift(id);
    
    // Limit to 10 items
    if (history.length > 10) history.pop();
    
    localStorage.setItem('khatoon_history', JSON.stringify(history));
}

function getHistory() {
    return JSON.parse(localStorage.getItem('khatoon_history')) || [];
}