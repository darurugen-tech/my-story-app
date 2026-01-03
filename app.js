/* app.js - FINAL VERSION */

// ==========================================
// 1. THEME TOGGLE LOGIC
// ==========================================
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("theme-icon");
    const text = document.getElementById("theme-text");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        // LIGHT MODE
        localStorage.setItem("theme", "light");
        if (icon) icon.src = "images/icons/icon_moon.png";
        if (text) text.innerText = "Dark";
    } else {
        // DARK MODE
        localStorage.setItem("theme", "dark");
        if (icon) icon.src = "images/icons/icon_sun.png";
        if (text) text.innerText = "Light";
    }
}

// RUN ON STARTUP: Check saved theme
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        const icon = document.getElementById("theme-icon");
        const text = document.getElementById("theme-text");
        if (icon) icon.src = "images/icons/icon_moon.png";
        if (text) text.innerText = "Dark";
    }
});


// ==========================================
// 2. BOOKMARK DRAWER LOGIC (New!)
// ==========================================

// A. OPEN THE DRAWER
function openBookmarks() {
    toggleBookmarks(); // Slide it up
    displayBookmarks(); // Fill it with items
}

// B. TOGGLE (OPEN/CLOSE) ANIMATION
function toggleBookmarks() {
    const drawer = document.getElementById('bookmark-drawer');
    const overlay = document.getElementById('bookmark-overlay');
    
    // Safety check: Does the drawer exist in HTML?
    if (!drawer || !overlay) {
        console.error("Bookmark drawer HTML is missing in index.html!");
        return;
    }

    // Toggle CSS classes to make it slide
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
}

// C. SAVE BOOKMARK (Called from view.html)
function saveBookmark(id, title, type, cover) {
    let bookmarks = JSON.parse(localStorage.getItem("khatoon_bookmarks")) || [];

    // Check if already saved
    let exists = bookmarks.find(b => b.id === id);
    if (exists) {
        alert("Already bookmarked!");
        return;
    }

    // Add new bookmark
    bookmarks.push({ id, title, type, cover });
    localStorage.setItem("khatoon_bookmarks", JSON.stringify(bookmarks));
    
    // Update the list if the drawer is open
    displayBookmarks();
}

// D. DISPLAY BOOKMARKS (Fills the list)
function displayBookmarks() {
    const listDiv = document.getElementById("bookmark-list");
    if (!listDiv) return; // Stop if not found

    listDiv.innerHTML = ""; // Clear old list
    
    // Get saved data
    let bookmarks = JSON.parse(localStorage.getItem('khatoon_bookmarks')) || [];

    // 1. Show Empty Message
    if (bookmarks.length === 0) {
        listDiv.innerHTML = "<div style='text-align:center; color:gray; padding:20px;'>No saved stories yet!</div>";
        return;
    }

    // 2. Create HTML for each bookmark
    bookmarks.forEach((item, index) => {
        let div = document.createElement("div");
        div.className = "bookmark-item";
        div.innerHTML = `
            <img src="${item.cover}" onclick="location.href='view.html?id=${item.id}'">
            
            <div class="bookmark-info" onclick="location.href='view.html?id=${item.id}'">
                <div style="font-weight:bold; color:white;">${item.title}</div>
                <div style="font-size:12px; color:gray;">${item.type.toUpperCase()}</div>
            </div>
            
            <button class="btn-remove" onclick="removeBookmark(${index})">🗑 Remove</button>
        `;
        listDiv.appendChild(div);
    });
}

// E. REMOVE BOOKMARK
function removeBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem('khatoon_bookmarks')) || [];
    
    // Delete the item at this index
    bookmarks.splice(index, 1); 
    
    // Save the new list back to storage
    localStorage.setItem('khatoon_bookmarks', JSON.stringify(bookmarks));
    
    // Refresh the visual list immediately
    displayBookmarks();
}

// --- SEARCH LOGIC ---

// 1. Trigger search when user presses "Enter"
function handleSearch(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

// 2. The Search Function
function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (!query) return; // Do nothing if empty

    // Redirect to the World page, but with a special "search" mode
    location.href = `world.html?type=search&q=${query}`;
}

// --- DRAG TO SCROLL FUNCTION ---
function enableDragScroll() {
    const sliders = document.querySelectorAll('.scroll-container');

    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active'); // Change cursor to 'grabbing'
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
            if (!isDown) return; // Stop if we are not clicking
            e.preventDefault();  // Stop selecting text
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fastness (change 2 to 3 for faster)
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}