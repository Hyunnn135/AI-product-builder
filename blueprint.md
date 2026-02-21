# Project Blueprint: Lunch Menu Recommender

## Overview
This project is a simple web application that provides random lunch menu recommendations to the user. It is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Current Plan
### Version 2.1: K-Culture Content & Design Refinement
*   **Purpose:** To enrich the user experience for foreign visitors interested in Korean culture by adding K-food related content and to refine the overall visual design. The "밥 vs 면 테스트하기" feature will be removed due to reduced relevance.
*   **Key Changes:**
    *   **Content Addition (K-Culture Focus):**
        *   **K-Food 메뉴별 스토리텔링:** Integrate a section displaying cultural stories, origins, or interesting facts about the recommended lunch menu. This will be implemented as a Web Component for reusability.
        *   **나에게 맞는 K-메뉴 찾기 심리 테스트:** Create an interactive quiz that recommends Korean dishes based on user preferences (tastes, moods, K-Pop biases). This will be a new dedicated page.
        *   **K-POP 아이돌이 즐겨 먹는 점심:** Add a section showcasing lunch menus favored by popular K-Pop idols, implemented as a Web Component.
    *   **Feature Removal:**
        *   **"밥 vs 면 테스트하기"**: Completely remove `test.html`, and all related links, buttons, and styles from `index.html`, `main.js`, and `style.css`.
    *   **Visual Design Refinement:**
        *   **Color Palette Update:** Change the primary purple color scheme to a more trendy and calming blue/green tone to enhance the modern aesthetic. Adjust corresponding dark mode colors.

## Project Outline
### Version 2.3: Microsoft Clarity Integration
*   **Purpose:** To gain deeper insights into user behavior and interactions on the website using Microsoft Clarity.
*   **Key Changes:**
    *   **Microsoft Clarity Script Insertion:** The Microsoft Clarity tracking script with ID `vkovn49wnp` has been added to the `<head>` section of all HTML pages: `index.html`, `about.html`, `k-menu-test.html`, `privacy.html`, and `terms.html`.
    *   **Data Collection:** Enables heatmaps, session recordings, and insights to improve user experience and identify usability issues.

### Version 2.2: Google Analytics Integration
*   **Purpose:** To track and analyze website traffic and user behavior using Google Analytics.
*   **Key Changes:**
    *   **Google Tag (gtag.js) Insertion:** The Google Analytics tag (`gtag.js`) with ID `G-6FY5JZZYR6` has been added immediately after the opening `<head>` tag in all HTML pages: `index.html`, `about.html`, `k-menu-test.html`, `privacy.html`, and `terms.html`.
    *   **Data Collection:** Configured to collect standard web stream data to provide insights into page views, user engagement, and other key metrics.

### Version 2.1: K-Culture Content & Design Refinement
*   **Purpose:** To enrich the user experience for foreign visitors interested in Korean culture by adding K-food related content and to refine the overall visual design. The "밥 vs 면 테스트하기" feature will be removed due to reduced relevance.
*   **Key Changes:**
    *   **Content Addition (K-Culture Focus):**
        *   **K-Food 메뉴별 스토리텔링:** Integrate a section displaying cultural stories, origins, or interesting facts about the recommended lunch menu. This will be implemented as a Web Component for reusability.
        *   **나에게 맞는 K-메뉴 찾기 심리 테스트:** Create an interactive quiz that recommends Korean dishes based on user preferences (tastes, moods, K-Pop biases). This will be a new dedicated page.
        *   **K-POP 아이돌이 즐겨 먹는 점심:** Add a section showcasing lunch menus favored by popular K-Pop idols, implemented as a Web Component.
    *   **Feature Removal:**
        *   **"밥 vs 면 테스트하기"**: Completely remove `test.html`, and all related links, buttons, and styles from `index.html`, `main.js`, and `style.css`.
    *   **Visual Design Refinement:**
        *   **Color Palette Update:** Change the primary purple color scheme to a more trendy and calming blue/green tone to enhance the modern aesthetic. Adjust corresponding dark mode colors.

### Version 2.0: Modern & Trendy Redesign
*   **Purpose:** To overhaul the visual design of the website, aligning it with modern and trendy aesthetics as per the "Visual Design" and "Bold Definition" guidelines.
*   **Design Philosophy:** The new design will be clean, vibrant, and interactive, focusing on a premium user experience. It will incorporate expressive typography, a rich color palette, subtle textures, and interactive elements with depth.
*   **Key Changes:**
    *   **Typography:**
        *   **Font:** Implement "Pretendard" from Google Fonts, a modern and highly readable font suitable for both Korean and English.
        *   **Hierarchy:** Establish a clear visual hierarchy with varying font weights and sizes for headings, paragraphs, and buttons.
    *   **Color Palette:**
        *   Introduce a new, vibrant, and energetic color palette.
        *   Define distinct color schemes for both light and dark modes using CSS variables.
    *   **Background & Texture:**
        *   Apply a subtle noise texture to the main background to create a premium, tactile feel. This will be achieved using a generated SVG to avoid external dependencies.
    *   **Layout & Spacing:**
        *   Refine the layout for better visual balance and rhythm, with a focus on clean spacing and alignment.
        *   Enhance responsiveness to ensure a seamless experience on all devices.
    *   **Buttons & Interactive Elements:**
        *   **Buttons:** Redesign all buttons to have a "lifted" appearance using multi-layered drop shadows. Add a "glow" effect on hover and focus to enhance interactivity.
        *   **Forms:** Restyle form inputs and labels to be consistent with the new, modern aesthetic.
    *   **Icons:**
        *   Where applicable, use a consistent and modern icon set to improve usability and visual appeal (e.g., for theme and language toggles).

### Version 1.7 (AdSense Optimization - Content Enhancement & Semantic HTML)
*   **Purpose:** Further optimize the site for Google AdSense approval by enhancing content quality, implementing semantic HTML5 tags, and adding essential legal pages.
*   **Features:**
    *   **Main Page Content (`index.html`):** Added a new "What is Our Site About?" section with unique, descriptive text to provide more valuable content.
    *   **Teachable Machine Page Content (`test.html`):** Enhanced the description of the AI test with more detail about its purpose, how it works, and disclaimers.
    *   **Semantic HTML5:** Replaced generic `div` tags with more semantic HTML5 elements (`<main>`, `<section>`) in `index.html`, `test.html`, `about.html`, and `privacy.html` to improve site structure for SEO and accessibility.
    *   **Terms of Service Page (`terms.html`):** A new page providing generic Terms of Service to improve trustworthiness and legal completeness.
    *   **Footer Navigation Update:** The footer navigation in all HTML pages (`index.html`, `test.html`, `about.html`, `privacy.html`, `terms.html`) has been updated to include a link to the new "Terms of Service" page.

### Version 1.6 (Google AdSense Integration)
*   **Purpose:** Integrate Google AdSense for monetization and site verification.
*   **Features:**
    *   **AdSense Script:** The Google AdSense auto-ads script (`adsbygoogle.js`) has been added to the `<head>` section of all primary HTML pages (`index.html`, `test.html`, `about.html`, `privacy.html`, `terms.html`).
    *   **AdSense Meta Tag:** The Google AdSense verification meta tag (`google-adsense-account`) has been added to the `<head>` section of all primary HTML pages for site ownership verification.

### Version 1.5 (AdSense Readiness - Essential Pages & Navigation)
*   **Purpose:** Enhance site structure and content for potential Google AdSense approval by adding essential pages and consistent navigation.
*   **Features:**
    *   **About Us Page (`about.html`):** A dedicated page explaining the website's purpose, features, and vision. Includes theme and language toggles.
    *   **Privacy Policy Page (`privacy.html`):** A dedicated page outlining the website's privacy practices, including data collection and usage. Includes theme and language toggles.
    *   **Consistent Footer Navigation:** A new footer (`.main-footer`) has been added to `index.html`, `test.html`, `about.html`, and `privacy.html`. This footer contains links to Home, About Us, Privacy Policy, Contact Us (linking to the contact form on `index.html`), and the Food Test page.
    *   **Styling:** `style.css` has been updated to provide a clean and responsive design for the footer navigation, integrated with the existing theme.

### Version 1.4 (Teachable Machine Food Preference Test with Full UI Enhancements)
*   **Purpose:** Integrate a Teachable Machine model to test user preference for "밥" (rice) vs. "면" (noodles), and enhance the UI with button repositioning, comprehensive language selection, and theme toggling on both pages.
*   **Features:**
    *   **New Page (`test.html`):** A dedicated HTML page that hosts the Teachable Machine webcam-based classifier.
    *   **Model Integration:** Uses TensorFlow.js and Teachable Machine libraries to load and run a pre-trained model.
    *   **Webcam Input:** Captures video from the user's webcam for real-time classification.
    *   **Classification Display:** Shows predictions for "밥" or "면" with probability scores.
    *   **Theme Toggle (Both Pages):** A theme toggle button has been added to `test.html` (alongside `index.html`) allowing users to switch between light and dark modes. Preference is saved in `localStorage`.
    *   **Language Selection (Both Pages):** A new button in the top-right of both `index.html` and `test.html` allows users to toggle between Korean (KO) and English (EN) for the page's text content. Language preference is saved in `localStorage`.
    *   **Consistent Button Positioning:** Theme and language toggle buttons are consistently positioned at the top-right of the page on both `index.html` and `test.html`. The overlapping issue was resolved.
    *   **Button Repositioning (`test.html`):** The "테스트 시작" button in `test.html` has been moved to the bottom-center of the page.
    *   **Consistent Button Styling:** A `.primary-button` class ensures consistent design for main action buttons across both pages.
    *   **Navigation:** A link in `index.html` directs to this page, and a link in `test.html` returns to the main page.
    *   **Styling:** `style.css` has been thoroughly updated with specific styles for the webcam container, label display, navigation links, and the new button layouts, ensuring theme consistency and correct positioning across both pages.

### Version 1.3 (Disqus Comment Integration)
*   **Purpose:** Add a comment section to the page using Disqus.
*   **Features:**
    *   **Disqus Embed:** The Disqus Universal Embed Code has been added to `index.html` to load the comment thread.
    *   **Container Styling:** The comment section is placed in a styled container in `style.css` that matches the overall theme. The body layout was updated to stack content vertically.

### Version 1.2 (Contact Form Integration)
*   **Purpose:** Add a simple contact form for partnership inquiries using Formspree.
*   **Features:**
    *   **Contact Form HTML:** A new section in `index.html` containing a form with fields for name, email, and message, linked to a Formspree endpoint for submission.
    *   **Form Styling:** `style.css` includes dedicated styles for the contact form, ensuring it integrates visually with the existing theme and is responsive.

### Version 1.1 (Dark/Light Mode)
*   **Purpose:** Implement a theme toggle for dark and light modes.
*   **Features:**
    *   **Theme Toggle Button:** A button has been added to `index.html` to switch between themes.
    *   **CSS Variables:** `style.css` now uses CSS variables for colors to easily switch between a light and a new dark theme.
    *   **JavaScript Logic:** `main.js` includes logic to toggle the theme, change the toggle button's icon, and save the user's preference in `localStorage`.

### Version 1.0 (Initial Implementation)
*   **Purpose:** Provide a basic interface for lunch menu recommendations.
*   **Features:**
    *   `index.html`: Contains the main structure of the page, including a title, a paragraph to display the recommendation, and a button to trigger a new recommendation.
    *   `style.css`: Provides basic styling for the page, centering content, setting fonts, and styling the button.
    *   `main.js`: Implements the core logic. It defines a list of diverse lunch menus, and on button click, it randomly selects and displays one of the menus in the designated paragraph.