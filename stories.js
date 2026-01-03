const db = {
    // ==========================================
    // COMICS (1 to 5)
    // ==========================================
    "comic_01": {
        id: "comic_01", type: "comic",
        title: "Hero High", cover: "images/covers/cover_comic_01.jpg",
        // ✅ ADD THIS LINE:
        badge: "UP",
        author: "KhaToon Team", stats: "Action • 👁️ 1M",
        desc: "A boy joins a high school for superheroes...",
        episodes: { 1: ["images/comic_01/ep1.jpg"], 2: ["images/comic_01/ep2.jpg"] }
    },
    "comic_02": {
        id: "comic_02", type: "comic",
        title: "Love Alarm", cover: "images/covers/cover_comic_02.jpg",
        author: "Romance Studio", stats: "Romance • 👁️ 500k",
        desc: "An app that alerts you if someone loves you.",
        episodes: { 1: ["images/comic_02/ep1.jpg"] }
    },
    "comic_03": {
        id: "comic_03", type: "comic",
        title: "Ghost Hunter", cover: "images/covers/cover_comic_03.jpg",
        author: "Spooky Team", stats: "Horror • 👁️ 200k",
        desc: "Hunting ghosts in the city.",
        episodes: { 1: ["images/comic_03/ep1.jpg"] }
    },
    "comic_04": {
        id: "comic_04", type: "comic",
        title: "Shadow Run", cover: "images/covers/cover_comic_04.jpg",
        author: "Sci-Fi Lab", stats: "Sci-Fi • 👁️ 15k",
        desc: "Running from the shadows.",
        episodes: { 1: ["images/comic_04/ep1.jpg"] }
    },
    "comic_05": {
        id: "comic_05", type: "comic",
        title: "Cat Cafe", cover: "images/covers/cover_comic_05.jpg",
        author: "Meow Works", stats: "Comedy • 👁️ 88k",
        desc: "A cafe run by cats.",
        episodes: { 1: ["images/comic_05/ep1.jpg"] }
    },

    // ==========================================
    // NOVELS (1 to 5)
    // ==========================================
    "novel_01": {
        id: "novel_01", type: "novel",
        type: "novel",
        title: "កុលាបប៉ៃលិន (Kolab Pailin)",
        cover: "images/covers/cover_novel_01.jpg",
        // ✅ ADD THIS LINE:
        badge: "NEW",
        author: "ញ៉ុក ថែម",
        year : "ព.ស ២៥០៤, គ.ស ១៩៦",
        stats: "Romance • 👁️ 50k",
        summary: "រឿង កុលាបប៉ៃលិន ឆ្លុះបញ្ចាំងពីជីវិតតស៊ូរបស់ ចៅចិត្រ យុវជនក្រីក្រម្នាក់ដែលពោរពេញដោយភាពស្មោះត្រង់ និងការខិតខំប្រឹងប្រែង។ តាមរយៈការធ្វើជាកម្មករជីកត្បូងនៅទឹកដីប៉ៃលិន ចៅចិត្របានប្រើប្រាស់សេចក្ដីល្អដើម្បីយកឈ្នះរាល់ឧបសគ្គ មើលងាយ និងការរើសអើង រហូតអាចទទួលបានសេចក្ដីថ្លៃថ្នូរ និងស្នេហាពិតពី ឃុននារី ដែលជាបុត្រីម្ចាស់ផ្ទះ។ វាគឺជាមេរៀនជីវិតដ៏មានតម្លៃអំពី តម្លៃនៃមនុស្ស គឺស្ថិតនៅលើអំពើល្អ។",
        desc: "A classic Khmer love story exploring social classes and virtue.",
        
        episodes: {
            // Chapter
            1: ["images/novel_01/ch1_p1.jpg", "images/novel_01/ch1_p2.jpg", "images/novel_01/ch1_p3.jpg"],
            2: ["images/novel_01/ch2_p1.jpg", "images/novel_01/ch2_p2.jpg"],
            3: ["images/novel_01/ch3_p1.jpg", "images/novel_01/ch3_p2.jpg"],
            4: ["images/novel_01/ch4_p1.jpg", "images/novel_01/ch4_p2.jpg"],
            5: ["images/novel_01/ch5_p1.jpg", "images/novel_01/ch4_p2.jpg"],

            // ✅ ADD NEW CHAPTER HERE (Don't forget the comma above!)
            3: [
                "images/novel_01/ch3_p1.jpg",
                "images/novel_01/ch3_p2.jpg",
                "images/novel_01/ch3_p3.jpg"
            ]
        }
    },
    "novel_02": {
        id: "novel_02", type: "novel",
        title: "The King", cover: "images/covers/cover_novel_02.jpg",
        author: "History Buff", stats: "Action • 👁️ 12k",
        desc: "The rise of a king.",
        episodes: { 1: ["images/novel_02/ch1.jpg"] }
    },
    "novel_03": {
        id: "novel_03", type: "novel",
        title: "My Destiny", cover: "images/covers/cover_novel_03.jpg",
        author: "Drama Queen", stats: "Drama • 👁️ 5k",
        desc: "Finding destiny.",
        episodes: { 1: ["images/novel_03/ch1.jpg"] }
    },
    "novel_04": {
        id: "novel_04", type: "novel",
        title: "Blue Sky", cover: "images/covers/cover_novel_04.jpg",
        author: "Sky Walker", stats: "Life • 👁️ 2k",
        desc: "Looking at the blue sky.",
        episodes: { 1: ["images/novel_04/ch1.jpg"] }
    },
    "novel_05": {
        id: "novel_05", type: "novel",
        title: "Silent Voice", cover: "images/covers/cover_novel_05.jpg",
        author: "Mystery Man", stats: "Mystery • 👁️ 9k",
        desc: "A voice in the dark.",
        episodes: { 1: ["images/novel_05/ch1.jpg"] }
    },

    // ==========================================
    // STORIES (1 to 5)
    // ==========================================
    // --- STORY 01 (5 Chapters, 2 Languages) ---
    "story_01": {
        id: "story_01",
        type: "story",
        title: "The Magic Bear",
        cover: "images/covers/cover_story_01.jpg",
        author: "Kids Tales",
        stats: "Kids • 👁️ 1.2k",
        desc: "A little bear finds a magic pot of honey.",
        badge: "UP",

        // KHMER CHAPTERS
        episodes_kh: {
            1: ["images/story_01/kh_ep1_p1.jpg", "images/story_01/kh_ep1_p2.jpg"],
            2: ["images/story_01/kh_ep2_p1.jpg"],
            3: ["images/story_01/kh_ep3_p1.jpg"],
            4: ["images/story_01/kh_ep4_p1.jpg"],
            5: ["images/story_01/kh_ep5_p1.jpg"]
        },

        // ENGLISH CHAPTERS
        episodes_en: {
            1: ["images/story_01/en_ep1_p1.jpg", "images/story_01/en_ep1_p2.jpg"],
            2: ["images/story_01/en_ep2_p1.jpg"],
            3: ["images/story_01/en_ep3_p1.jpg"],
            4: ["images/story_01/en_ep4_p1.jpg"],
            5: ["images/story_01/en_ep5_p1.jpg"]
        }
    },
    
    "story_02": {
        id: "story_02",
        type: "story",
        title: "Rabbit's Dream",
        cover: "images/covers/cover_story_02.jpg",
        author: "Bunny Hop",
        stats: "Fantasy • 👁️ 800",
        desc: "A rabbit goes to the moon.",

        // KHMER CHAPTERS
        episodes_kh: {
            1: ["images/story_02/kh_ep1_p1.jpg", "images/story_02/kh_ep1_p2.jpg"],
            2: ["images/story_02/kh_ep2_p1.jpg"],
            3: ["images/story_02/kh_ep3_p1.jpg"],
            4: ["images/story_02/kh_ep4_p1.jpg"],
            5: ["images/story_02/kh_ep5_p1.jpg"]
        },
    },
    "story_03": {
        id: "story_03", type: "story",
        title: "Lost Boy", cover: "images/covers/cover_story_03.jpg",
        author: "Sad Tales", stats: "Drama • 👁️ 2.1k",
        desc: "Lost in the woods.",
        content_en: ["images/story_03/en_p1.jpg"],
        content_kh: ["images/story_03/kh_p1.jpg"]
    },
    "story_04": {
        id: "story_04", type: "story",
        title: "Little Star", cover: "images/covers/cover_story_04.jpg",
        author: "Night Sky", stats: "Kids • 👁️ 50",
        desc: "A star falls down.",
        content_en: ["images/story_04/en_p1.jpg"],
        content_kh: ["images/story_04/kh_p1.jpg"]
    },
    "story_05": {
        id: "story_05", type: "story",
        title: "Jungle Friends", cover: "images/covers/cover_story_05.jpg",
        author: "Animal Planet", stats: "Adventure • 👁️ 120",
        desc: "Friends in the jungle.",
        content_en: ["images/story_05/en_p1.jpg"],
        content_kh: ["images/story_05/kh_p1.jpg"]
    }
};