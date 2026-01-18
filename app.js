/* app.js - FINAL VERSION (Theme Fix + Permanent History) */

// --- 1. MASTER THEME LOGIC ---
function applyTheme() {
    const theme = localStorage.getItem("theme");
    const isLight = (theme === "light"); 
    
    if (isLight) {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
    updateThemeIcons(isLight);
}

function updateThemeIcons(isLight) {
    const icon1 = document.getElementById("theme-icon");
    const text1 = document.getElementById("theme-text");
    const icon2 = document.getElementById("theme-btn"); 
    
    const sunIcon = "images/icons/icon_sun.png";
    const moonIcon = "images/icons/icon_moon.png";

    if (isLight) {
        if (icon1) icon1.src = moonIcon;
        if (text1) text1.innerText = "Dark";
        if (icon2) icon2.src = moonIcon;
    } else {
        if (icon1) icon1.src = sunIcon;
        if (text1) text1.innerText = "Light";
        if (icon2) icon2.src = sunIcon;
    }
}

function toggleTheme() {
    const isLight = document.body.classList.contains("light-mode");
    if (isLight) {
        localStorage.setItem("theme", "dark");
        document.body.classList.remove("light-mode");
        updateThemeIcons(false);
    } else {
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
        slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('active'); });
        slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('active'); });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// --- 4. AUTO-RUN ON LOAD ---
document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    enableDragScroll();
});

window.addEventListener("pageshow", () => {
    applyTheme();
});


// --- 5. PERMANENT HISTORY LOGIC (Cookie + Storage) ---

// Helper: Set Cookie (Lasts 365 Days)
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Helper: Get Cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function addToHistory(id) {
    // 1. Try to get history from Storage OR Cookie
    let raw = localStorage.getItem('khatoon_history');
    if (!raw) raw = getCookie('khatoon_history');
    
    let history = raw ? JSON.parse(raw) : [];
    
    // 2. Add new ID
    history = history.filter(item => item !== id); // Remove duplicate
    history.unshift(id);                           // Add to top
    if (history.length > 10) history.pop();        // Limit to 10
    
    // 3. Save to BOTH locations
    let strData = JSON.stringify(history);
    localStorage.setItem('khatoon_history', strData);
    setCookie('khatoon_history', strData, 365); // Save for 1 year
}

function getHistory() {
    // 1. Try Storage
    let raw = localStorage.getItem('khatoon_history');
    
    // 2. If Storage is empty, Try Cookie (Backup)
    if (!raw) {
        raw = getCookie('khatoon_history');
        // If we found it in cookie but not storage, restore storage!
        if (raw) localStorage.setItem('khatoon_history', raw);
    }

    return raw ? JSON.parse(raw) : [];
}