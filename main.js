document.addEventListener('DOMContentLoaded', () => {
    const recommendationParagraph = document.getElementById('recommendation');
    const recommendButton = document.getElementById('recommendButton');

    const lunchMenus = [
        "김치찌개",
        "된장찌개",
        "비빔밥",
        "제육볶음",
        "불고기",
        "돈까스",
        "초밥",
        "파스타",
        "햄버거",
        "샌드위치",
        "쌀국수",
        "순대국",
        "뼈해장국",
        "삼겹살",
        "치킨",
        "피자"
    ];

    recommendButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * lunchMenus.length);
        recommendationParagraph.textContent = lunchMenus[randomIndex];
    });
});