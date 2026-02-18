// k-menu-test.js
import { translations, currentLang, setLanguage, kFoodStories } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    const quizQuestionsContainer = document.getElementById('quiz-questions');
    const quizResultsSection = document.getElementById('quiz-results');
    const recommendedMenuElement = document.getElementById('recommended-menu');
    const menuStoryElement = document.getElementById('menu-story');
    const startQuizButton = document.getElementById('start-quiz-button');
    const submitQuizButton = document.getElementById('submit-quiz-button');
    const retakeQuizButton = document.getElementById('retake-quiz-button');

    let currentQuestionIndex = 0;
    let userAnswers = [];

    const quizData = [
        {
            id: 'question1',
            question: 'question1', // Refers to key in translations object
            options: [
                { text: 'question1-option1', value: 'spicy' },
                { text: 'question1-option2', value: 'sweet' },
                { text: 'question1-option3', value: 'savory' },
                { text: 'question1-option4', value: 'sour' }
            ]
        },
        {
            id: 'question2',
            question: 'question2',
            options: [
                { text: 'question2-option1', value: 'soup' },
                { text: 'question2-option2', value: 'rice' },
                { text: 'question2-option3', value: 'noodles' },
                { text: 'question2-option4', value: 'fried' }
            ]
        },
        {
            id: 'question3',
            question: 'question3',
            options: [
                { text: 'question3-option1', value: 'alone' },
                { text: 'question3-option2', value: 'friends' },
                { text: 'question3-option3', value: 'partner' },
                { text: 'question3-option4', value: 'family' }
            ]
        },
        {
            id: 'question4',
            question: 'question4',
            options: [
                { text: 'question4-option1', value: 'bts' },
                { text: 'question4-option2', value: 'blackpink' },
                { text: 'question4-option3', value: 'newjeans' },
                { text: 'question4-option4', value: 'straykids' }
            ]
        }
    ];

    function renderQuestion() {
        if (currentQuestionIndex < quizData.length) {
            const question = quizData[currentQuestionIndex];
            quizQuestionsContainer.innerHTML = `
                <div class="quiz-question-card container">
                    <h3 class="question-text">${translations[question.question][currentLang]}</h3>
                    <div class="options-container">
                        ${question.options.map((option, index) => `
                            <label class="quiz-option">
                                <input type="radio" name="question-${question.id}" value="${option.value}" data-index="${index}">
                                <span>${translations[option.text][currentLang]}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
            // Attach event listeners to newly rendered radio buttons
            quizQuestionsContainer.querySelectorAll(`input[name="question-${question.id}"]`).forEach(input => {
                input.addEventListener('change', (event) => {
                    userAnswers[currentQuestionIndex] = event.target.value;
                    // Automatically go to next question or show submit button
                    if (currentQuestionIndex < quizData.length - 1) {
                        currentQuestionIndex++;
                        renderQuestion();
                    } else {
                        submitQuizButton.style.display = 'block';
                        startQuizButton.style.display = 'none'; // Hide start button when submit is visible
                    }
                });
            });
            startQuizButton.style.display = 'none'; // Hide start button once quiz begins
            submitQuizButton.style.display = 'none'; // Hide submit button until last question answered
        } else {
            // All questions answered, show submit if not already
            submitQuizButton.style.display = 'block';
            startQuizButton.style.display = 'none';
        }
    }

    function calculateResult() {
        const results = {};
        userAnswers.forEach(answer => {
            results[answer] = (results[answer] || 0) + 1;
        });

        // Simple mapping from quiz answers to menu types
        let recommendedCategory = '';
        if (results['spicy'] || results['fried']) recommendedCategory = 'spicyAndFried';
        else if (results['soup']) recommendedCategory = 'soup';
        else if (results['rice']) recommendedCategory = 'rice';
        else if (results['noodles']) recommendedCategory = 'noodles';
        else if (results['sweet'] || results['savory']) recommendedCategory = 'sweetAndSavory';
        else recommendedCategory = 'default'; // Fallback

        const menuRecommendations = {
            spicyAndFried: ["김치찌개", "제육볶음", "돈까스", "치킨"],
            soup: ["된장찌개", "순대국", "뼈해장국", "쌀국수"],
            rice: ["비빔밥", "불고기"],
            noodles: ["파스타", "쌀국수"],
            sweetAndSavory: ["불고기", "돈까스", "피자"],
            default: translations.lunchMenus[currentLang]
        };

        const availableMenus = menuRecommendations[recommendedCategory] || menuRecommendations['default'];
        const finalRecommendation = availableMenus[Math.floor(Math.random() * availableMenus.length)];

        recommendedMenuElement.textContent = finalRecommendation;
        menuStoryElement.textContent = kFoodStories[currentLang]?.[finalRecommendation] || kFoodStories['ko']?.[finalRecommendation] || (currentLang === 'ko' ? '이 메뉴에 대한 스토리가 없습니다.' : 'No story available for this menu.');

        quizQuestionsContainer.style.display = 'none';
        submitQuizButton.style.display = 'none';
        quizResultsSection.style.display = 'block';
    }

    startQuizButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        userAnswers = [];
        quizQuestionsContainer.style.display = 'block';
        quizResultsSection.style.display = 'none';
        renderQuestion();
    });

    submitQuizButton.addEventListener('click', calculateResult);

    retakeQuizButton.addEventListener('click', () => {
        quizResultsSection.style.display = 'none';
        startQuizButton.style.display = 'block';
        currentQuestionIndex = 0;
        userAnswers = [];
        quizQuestionsContainer.innerHTML = ''; // Clear questions
    });

    // Initial setup on page load
    setLanguage(currentLang);
    // Hide questions and results initially, show start button
    quizQuestionsContainer.style.display = 'none';
    quizResultsSection.style.display = 'none';
    startQuizButton.style.display = 'block';

    // Apply language to quiz-specific elements when language changes
    window.addEventListener('languageChange', () => {
        setLanguage(currentLang); // Re-apply all translations
        if (quizQuestionsContainer.style.display !== 'none') {
            renderQuestion(); // Re-render current question with new language
        }
        if (quizResultsSection.style.display !== 'none') {
            // Re-calculate and display result if it's already shown
            calculateResult(); // This will re-render results with current language
        }
    });
});