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
        'site-description-title': {
            'ko': '저희는 어떤 사이트인가요?',
            'en': 'What is Our Site About?'
        },
        'site-description-p1': {
            'ko': '이 웹사이트는 매일의 점심 메뉴 고민을 해결하고, 재미있는 인공지능 기반의 테스트를 통해 사용자의 미식 탐험을 돕기 위해 만들어졌습니다. 우리는 단순한 정보 제공을 넘어, 새로운 기술이 어떻게 일상에 즐거움을 더할 수 있는지 보여주고자 합니다.',
            'en': 'This website was created to solve your daily lunch menu dilemmas and assist users in their culinary exploration through fun AI-based tests. Beyond simply providing information, we aim to show how new technologies can add joy to everyday life.'
        },
        'site-description-p2': {
            'ko': '사용자 친화적인 인터페이스와 유용한 기능들로, 방문하는 모든 분들이 새롭고 즐거운 경험을 하시도록 최선을 다하고 있습니다.',
            'en': 'With user-friendly interfaces and useful features, we strive to ensure that all visitors have a new and enjoyable experience.'
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