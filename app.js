/* app.js - FINAL MASTER VERSION */

// --- 1. MASTER THEME LOGIC ---
function applyTheme() {
    const theme = localStorage.getItem("theme");
    const isLight = (theme === "light");
    
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
    
    if (isLight) {
        if (icon1) icon1.src = "images/icons/icon_moon.png";
        if (text1) text1.innerText = "Dark";
        if (icon2) icon2.src = "images/icons/icon_moon.png";
    } else {
        if (icon1) icon1.src = "images/icons/icon_sun.png";
        if (text1) text1.innerText = "Light";
        if (icon2) icon2.src = "images/icons/icon_sun.png";
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

// Run immediately when page loads
document.addEventListener("DOMContentLoaded", applyTheme);


// --- 2. SEARCH LOGIC ---
function handleSearch(event) {
    if (event.key === 'Enter') performSearch();
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (!query) return;
    location.href = `world.html?type=search&q=${query}`;
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