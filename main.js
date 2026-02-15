document.addEventListener('DOMContentLoaded', () => {
    const recommendationParagraph = document.getElementById('recommendation');
    const recommendButton = document.getElementById('recommendButton');
    const themeToggleButton = document.getElementById('theme-toggle');
    const languageToggleButton = document.getElementById('language-toggle');
    const body = document.body;

    const translations = {
        'page-title': {
            'ko': '오늘의 점심 메뉴 추천',
            'en': 'Today\'s Lunch Menu Recommendation'
        },
        'main-heading': {
            'ko': '오늘의 점심 메뉴 추천',
            'en': 'Today\'s Lunch Menu Recommendation'
        },
        'recommendation': {
            'ko': '버튼을 눌러 추천 메뉴를 받아보세요!',
            'en': 'Press the button to get a recommendation!'
        },
        'recommendButton': {
            'ko': '메뉴 추천받기',
            'en': 'Get Menu Recommendation'
        },
        'foodTestButton': {
            'ko': '밥 vs 면 테스트하기',
            'en': 'Rice vs Noodles Test'
        },
        'contact-form-title': {
            'ko': '제휴 문의',
            'en': 'Partnership Inquiry'
        },
        'label-name': {
            'ko': '이름:',
            'en': 'Name:'
        },
        'label-email': {
            'ko': '이메일:',
            'en': 'Email:'
        },
        'label-message': {
            'ko': '메시지:',
            'en': 'Message:'
        },
        'submit-contact-form': {
            'ko': '문의 보내기',
            'en': 'Send Inquiry'
        },
        'comments-title': {
            'ko': '댓글',
            'en': 'Comments'
        },
        'lunchMenus': {
            'ko': [
                "김치찌개", "된장찌개", "비빔밥", "제육볶음", "불고기",
                "돈까스", "초밥", "파스타", "햄버거", "샌드위치",
                "쌀국수", "순대국", "뼈해장국", "삼겹살", "치킨", "피자"
            ],
            'en': [
                "Kimchi Stew", "Bean Paste Stew", "Bibimbap", "Spicy Pork Stir-fry", "Bulgogi",
                "Pork Cutlet", "Sushi", "Pasta", "Hamburger", "Sandwich",
                "Rice Noodles", "Sundae Soup", "Pork Bone Hangover Soup", "Samgyeopsal", "Chicken", "Pizza"
            ]
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ko';

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        for (const id in translations) {
            const element = document.getElementById(id);
            if (element && id !== 'lunchMenus') { // Skip lunchMenus array
                element.textContent = translations[id][lang];
            }
        }
        languageToggleButton.textContent = (lang === 'ko' ? 'EN' : 'KO');
    }

    setLanguage(currentLang); // Initial language setup

    languageToggleButton.addEventListener('click', () => {
        currentLang = (currentLang === 'ko' ? 'en' : 'ko');
        localStorage.setItem('lang', currentLang);
        setLanguage(currentLang);
    });

    // Theme toggle functionality
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        themeToggleButton.textContent = isDarkMode ? '☀️' : '🌙';
    });

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.textContent = '🌙';
    }

    recommendButton.addEventListener('click', () => {
        const menus = translations.lunchMenus[currentLang];
        const randomIndex = Math.floor(Math.random() * menus.length);
        recommendationParagraph.textContent = menus[randomIndex];
    });
});