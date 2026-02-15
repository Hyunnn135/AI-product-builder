# Project Blueprint: Lunch Menu Recommender

## Overview
This project is a simple web application that provides random lunch menu recommendations to the user. It is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Project Outline
### Version 1.4 (Teachable Machine Food Preference Test)
*   **Purpose:** Integrate a Teachable Machine model to test user preference for "밥" (rice) vs. "면" (noodles).
*   **Features:**
    *   **New Page (`test.html`):** A dedicated HTML page that hosts the Teachable Machine webcam-based classifier.
    *   **Model Integration:** Uses TensorFlow.js and Teachable Machine libraries to load and run a pre-trained model.
    *   **Webcam Input:** Captures video from the user's webcam for real-time classification.
    *   **Classification Display:** Shows predictions for "밥" or "면" with probability scores.
    *   **Navigation:** A link in `index.html` directs to this page, and a link in `test.html` returns to the main page.
    *   **Styling:** `style.css` has been updated with specific styles for the webcam container, label display, and navigation links, ensuring theme consistency.

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
The "밥 vs 면" Teachable Machine test page has been implemented, including its dedicated HTML, updated CSS, and integration with the main page. The next step is to verify the changes, commit them, and push to the GitHub repository for deployment.
