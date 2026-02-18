import './k-food-story.js'; // Import the Web Component
import './k-idol-lunch.js'; // Import the K-Pop Idol Lunch Web Component

const kFoodStories = {
    'ko': {
        "김치찌개": "한국인의 소울푸드 김치찌개는 잘 익은 김치와 돼지고기, 두부 등을 넣고 얼큰하게 끓여낸 찌개입니다. 밥과 함께 먹으면 속이 든든해지고, 특히 비 오는 날 더욱 생각나는 맛입니다.",
        "된장찌개": "구수하고 깊은 맛의 된장찌개는 한국의 대표적인 찌개입니다. 발효된 된장을 기본으로 두부, 호박, 양파 등을 넣어 만드는데, 한국의 정을 느낄 수 있는 따뜻한 한 끼 식사입니다.",
        "비빔밥": "오색찬란한 비빔밥은 흰 쌀밥 위에 여러 가지 나물, 고기, 계란 등을 올리고 고추장을 넣어 비벼 먹는 음식입니다. 재료의 신선함과 조화로운 맛이 일품이며, 건강에도 좋습니다.",
        "제육볶음": "매콤달콤한 양념에 돼지고기를 재워 볶아낸 제육볶음은 한국인들이 사랑하는 대표적인 밥반찬입니다. 쌈 채소에 싸서 먹으면 더욱 맛있게 즐길 수 있습니다.",
        "불고기": "달콤짭짤한 양념에 재운 소고기를 구워 먹는 불고기는 한국을 대표하는 음식 중 하나입니다. 부드러운 고기와 감칠맛 나는 양념이 외국인들에게도 인기가 많습니다.",
        "돈까스": "바삭하게 튀겨낸 돼지고기 등심에 달콤한 소스를 얹어 먹는 돈까스는 남녀노소 누구나 좋아하는 메뉴입니다. 한국식 돈까스는 일본식과 달리 소스를 부어 먹는 경우가 많습니다.",
        "초밥": "신선한 해산물과 밥의 조화가 일품인 초밥은 한국에서도 많은 사랑을 받는 일식입니다. 특히 신선한 재료를 사용한 한국의 초밥집들도 많이 있습니다.",
        "파스타": "다양한 소스와 면의 조화가 매력적인 파스타는 전 세계적으로 사랑받는 이탈리아 음식입니다. 한국에서도 다양한 퓨전 파스타를 맛볼 수 있습니다.",
        "햄버거": "간단하면서도 든든한 햄버거는 바쁜 현대인들에게 인기 있는 메뉴입니다. 한국에서는 수제 버거 전문점도 많아 다양한 맛을 즐길 수 있습니다.",
        "샌드위치": "신선한 채소와 햄, 치즈 등을 빵 사이에 넣어 만든 샌드위치는 가볍게 즐기기 좋은 식사입니다. 피크닉이나 브런치 메뉴로도 좋습니다.",
        "쌀국수": "따뜻한 육수에 얇은 면과 숙주, 고기 등을 넣어 먹는 쌀국수는 베트남의 대표적인 음식입니다. 한국에서도 많은 사람들이 즐겨 찾는 메뉴입니다.",
        "순대국": "돼지 내장과 선지로 만든 순대가 들어간 순대국은 얼큰하고 뜨거운 국물 요리입니다. 해장국으로도 좋고, 든든한 한 끼 식사로도 손색이 없습니다.",
        "뼈해장국": "돼지 등뼈를 얼큰하게 끓여낸 뼈해장국은 술 마신 다음 날 속을 풀어주는 데 최고입니다. 부드러운 살코기와 시원한 국물이 일품입니다.",
        "삼겹살": "두툼한 돼지고기를 불판에 구워 김치, 마늘 등과 함께 쌈 싸 먹는 삼겹살은 한국의 대표적인 외식 메뉴입니다. 친구나 가족과 함께 즐기기 좋습니다.",
        "치킨": "바삭하게 튀긴 치킨에 양념을 바르거나 그냥 먹는 치킨은 한국의 야식 문화를 대표하는 음식입니다. 맥주와 함께 즐기는 치맥은 환상의 조합입니다.",
        "피자": "다양한 토핑과 치즈가 올라간 피자는 전 세계적으로 사랑받는 메뉴입니다. 한국에서는 고구마, 불고기 등 독특한 토핑의 피자도 인기가 많습니다."
    },
    'en': {
        "Kimchi Stew": "Kimchi Jjigae, a soul food for Koreans, is a spicy stew made with fermented kimchi, pork, and tofu. It's a hearty meal with rice, especially comforting on a rainy day.",
        "Bean Paste Stew": "Doenjang Jjigae, a savory and deep-flavored stew, is a staple in Korean cuisine. Made with fermented soybean paste, tofu, zucchini, and onions, it's a warm meal that embodies Korean hospitality.",
        "Bibimbap": "Bibimbap, a colorful mixed rice dish, is served with various seasoned vegetables, meat, and an egg, all mixed with gochujang (Korean chili paste). Its fresh ingredients and harmonious flavors are excellent and healthy.",
        "Spicy Pork Stir-fry": "Jeyuk Bokkeum, marinated pork stir-fried in a spicy and sweet sauce, is a beloved side dish in Korea. It's even more delicious when eaten with fresh lettuce wraps.",
        "Bulgogi": "Bulgogi, grilled beef marinated in a sweet and savory sauce, is one of Korea's most iconic dishes. Its tender meat and flavorful marinade are popular even among foreigners.",
        "Pork Cutlet": "Donkatsu, crispy fried pork loin topped with a sweet sauce, is a popular dish enjoyed by all ages. Korean-style donkatsu often comes with sauce poured over it, unlike its Japanese counterpart.",
        "Sushi": "Sushi, a delightful combination of fresh seafood and rice, is a Japanese dish widely loved in Korea. There are many sushi restaurants in Korea that use fresh, high-quality ingredients.",
        "Pasta": "Pasta, an Italian dish with a charming blend of various sauces and noodles, is loved worldwide. In Korea, you can also find a variety of fusion pasta dishes.",
        "Hamburger": "Simple yet filling, hamburgers are a popular choice for busy modern people. Korea boasts many gourmet burger joints offering diverse flavors.",
        "Sandwich": "Sandwiches, made with fresh vegetables, ham, and cheese between slices of bread, are a light and convenient meal, perfect for picnics or brunch.",
        "Rice Noodles": "Pho, a Vietnamese staple, is a dish with thin noodles, bean sprouts, and meat in a warm broth. It's a favorite among many in Korea.",
        "Sundae Soup": "Sundae Guk, a spicy and hot soup made with Korean blood sausage (sundae) and pork offal, is excellent for hangovers and makes for a hearty meal.",
        "Pork Bone Hangover Soup": "Ppyeohaejangguk, a spicy stew made with pork backbone, is the best remedy for a hangover. Its tender meat and refreshing broth are superb.",
        "Samgyeopsal": "Samgyeopsal, thick slices of pork belly grilled on a hot plate and eaten with kimchi and garlic in a lettuce wrap, is a quintessential Korean dining experience, perfect for sharing with friends and family.",
        "Chicken": "Crispy fried chicken, either plain or with sauce, represents Korea's late-night snack culture. Chimaek (chicken and beer) is a fantastic combination.",
        "Pizza": "Pizza, with its various toppings and cheese, is a globally loved dish. In Korea, unique toppings like sweet potato and bulgogi pizza are also very popular."
    }
};

const kPopIdolLunchData = {
    'ko': {
        "BTS-정국": { name: "정국", group: "BTS", menu: "불고기 햄버거" },
        "BLACKPINK-리사": { name: "리사", group: "BLACKPINK", menu: "팟타이" },
        "NewJeans-하니": { name: "하니", group: "NewJeans", menu: "떡볶이" },
        "EXO-백현": { name: "백현", group: "EXO", menu: "치킨" },
        "TWICE-나연": { name: "나연", group: "TWICE", menu: "김치볶음밥" },
        "SEVENTEEN-호시": { name: "호시", group: "SEVENTEEN", menu: "초밥" },
        "ITZY-류진": { name: "류진", group: "ITZY", menu: "샐러드 파스타" },
        "TXT-연준": { name: "연준", group: "TXT", menu: "매운 갈비찜" },
        "aespa-카리나": { name: "카리나", group: "aespa", menu: "마라탕" },
        "StrayKids-필릭스": { name: "필릭스", group: "Stray Kids", menu: "김치찌개" }
    },
    'en': {
        "BTS-Jungkook": { name: "Jungkook", group: "BTS", menu: "Bulgogi Burger" },
        "BLACKPINK-Lisa": { name: "Lisa", group: "BLACKPINK", menu: "Pad Thai" },
        "NewJeans-Hanni": { name: "Hanni", group: "NewJeans", menu: "Tteokbokki" },
        "EXO-Baekhyun": { name: "Baekhyun", group: "EXO", menu: "Chicken" },
        "TWICE-Nayeon": { name: "Nayeon", group: "TWICE", menu: "Kimchi Fried Rice" },
        "SEVENTEEN-Hoshi": { name: "Hoshi", group: "SEVENTEEN", menu: "Sushi" },
        "ITZY-Ryujin": { name: "Ryujin", group: "ITZY", menu: "Salad Pasta" },
        "TXT-Yeonjun": { name: "Yeonjun", group: "TXT", menu: "Spicy Braised Short Ribs" },
        "aespa-Karina": { name: "Karina", group: "aespa", menu: "Mala Tang" },
        "StrayKids-Felix": { name: "Felix", group: "Stray Kids", menu: "Kimchi Stew" }
    }
};

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
    },
    // Quiz Translations for k-menu-test.html
    'quiz-heading': {
        'ko': '나에게 맞는 K-메뉴 찾기 테스트',
        'en': 'Find Your K-Menu Quiz'
    },
    'quiz-description': {
        'ko': '몇 가지 질문을 통해 당신의 K-Food 취향을 분석하고 완벽한 메뉴를 찾아드립니다!',
        'en': 'Analyze your K-Food preferences with a few questions and find your perfect menu!'
    },
    'start-quiz-button': {
        'ko': '테스트 시작',
        'en': 'Start Quiz'
    },
    'submit-quiz-button': {
        'ko': '결과 보기',
        'en': 'Show Results'
    },
    'results-heading': {
        'ko': '당신에게 추천하는 K-메뉴는?',
        'en': 'Your Recommended K-Menu is?'
    },
    'retake-quiz-button': {
        'ko': '테스트 다시 하기',
        'en': 'Retake Quiz'
    },
    'home-link': {
        'ko': '메인 페이지로 돌아가기',
        'en': 'Back to Main Page'
    },
    'question1': {
        'ko': '어떤 맛을 선호하시나요?',
        'en': 'What flavors do you prefer?'
    },
    'question1-option1': { 'ko': '매운 맛', 'en': 'Spicy' },
    'question1-option2': { 'ko': '달콤한 맛', 'en': 'Sweet' },
    'question1-option3': { 'ko': '짭짤한 맛', 'en': 'Savory' },
    'question1-option4': { 'ko': '새콤한 맛', 'en': 'Sour' },

    'question2': {
        'ko': '어떤 종류의 식사를 좋아하시나요?',
        'en': 'What kind of meal do you like?'
    },
    'question2-option1': { 'ko': '따뜻한 국물', 'en': 'Warm Soup' },
    'question2-option2': { 'ko': '든든한 밥', 'en': 'Hearty Rice Dish' },
    'question2-option3': { 'ko': '간단한 면', 'en': 'Simple Noodles' },
    'question2-option4': { 'ko': '튀긴 음식', 'en': 'Fried Food' },

    'question3': {
        'ko': '누구와 함께 먹고 싶으신가요?',
        'en': 'Who do you want to eat with?'
    },
    'question3-option1': { 'ko': '혼자서 편하게', 'en': 'Alone comfortably' },
    'question3-option2': { 'ko': '친구와 수다 떨며', 'en': 'Chatting with friends' },
    'question3-option3': { 'ko': '연인과 오붓하게', 'en': 'Intimately with a partner' },
    'question3-option4': { 'ko': '가족과 푸짐하게', 'en': 'Generously with family' },

    'question4': {
        'ko': '어떤 K-POP 아티스트를 좋아하시나요?',
        'en': 'Which K-POP artist do you like?'
    },
    'question4-option1': { 'ko': 'BTS (방탄소년단)', 'en': 'BTS' },
    'question4-option2': { 'ko': 'BLACKPINK (블랙핑크)', 'en': 'BLACKPINK' },
    'question4-option3': { 'ko': 'NewJeans (뉴진스)', 'en': 'NewJeans' },
    'question4-option4': { 'ko': '스트레이 키즈', 'en': 'Stray Kids' }
};

let currentLang = localStorage.getItem('lang') || 'ko';

export function setLanguage(lang) {
    document.documentElement.lang = lang;
    for (const id in translations) {
        const element = document.getElementById(id);
        if (element && id !== 'lunchMenus') { // Skip lunchMenus array
            element.textContent = translations[id][lang];
        }
    }
    // Handle specific elements in k-menu-test.html if they exist
    const quizHeading = document.getElementById('quiz-heading');
    if (quizHeading) quizHeading.textContent = translations['quiz-heading'][lang];
    const quizDescription = document.getElementById('quiz-description');
    if (quizDescription) quizDescription.textContent = translations['quiz-description'][lang];
    const startQuizButton = document.getElementById('start-quiz-button');
    if (startQuizButton) startQuizButton.textContent = translations['start-quiz-button'][lang];
    const submitQuizButton = document.getElementById('submit-quiz-button');
    if (submitQuizButton) submitQuizButton.textContent = translations['submit-quiz-button'][lang];
    const resultsHeading = document.getElementById('results-heading');
    if (resultsHeading) resultsHeading.textContent = translations['results-heading'][lang];
    const retakeQuizButton = document.getElementById('retake-quiz-button');
    if (retakeQuizButton) retakeQuizButton.textContent = translations['retake-quiz-button'][lang];
    const homeLink = document.querySelector('.home-link');
    if (homeLink) homeLink.textContent = translations['home-link'][lang];


    // Update K-Food story component language
    const kFoodStoryElement = document.querySelector('k-food-story');
    if (kFoodStoryElement) {
        kFoodStoryElement.setAttribute('lang', lang);
    }

    // Update K-Pop Idol Lunch component language
    const kPopIdolLunchElement = document.querySelector('k-idol-lunch');
    if (kPopIdolLunchElement) {
        kPopIdolLunchElement.setAttribute('lang', lang);
    }
    languageToggleButton.textContent = (lang === 'ko' ? 'EN' : 'KO');
}

document.addEventListener('DOMContentLoaded', () => {
    const recommendationParagraph = document.getElementById('recommendation');
    const recommendButton = document.getElementById('recommendButton');
    const themeToggleButton = document.getElementById('theme-toggle');
    const languageToggleButton = document.getElementById('language-toggle');
    const body = document.body;
    const kFoodStoryElement = document.querySelector('k-food-story'); // Get the Web Component instance
    const kPopIdolLunchElement = document.querySelector('k-idol-lunch'); // Get the Web Component instance

    // Set initial stories for the Web Component
    if (kFoodStoryElement) {
        kFoodStoryElement.setStories(kFoodStories);
    }

    // Set initial idol data for the Web Component
    if (kPopIdolLunchElement) {
        kPopIdolLunchElement.setIdolData(kPopIdolLunchData);
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

    if (recommendButton) { // Check if recommendButton exists (it won't on k-menu-test.html)
        recommendButton.addEventListener('click', () => {
            const menus = translations.lunchMenus[currentLang];
            const randomIndex = Math.floor(Math.random() * menus.length);
            const recommendedMenu = menus[randomIndex];
            recommendationParagraph.textContent = recommendedMenu;

            // Update the K-Food Story Web Component
            if (kFoodStoryElement) {
                kFoodStoryElement.setAttribute('menu-name', recommendedMenu);
            }
        });
    }
});

export { translations, currentLang, kFoodStories, kPopIdolLunchData };