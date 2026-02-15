# Project Blueprint: Lunch Menu Recommender

## Overview
This project is a simple web application that provides random lunch menu recommendations to the user. It is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Project Outline
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

## Current Plan
The site has been further optimized for Google AdSense approval by enhancing content, implementing semantic HTML, and adding a Terms of Service page. All related changes to HTML files, CSS, and JavaScript have been made. The next step is to verify these changes, commit them, and push to the GitHub repository for deployment.
