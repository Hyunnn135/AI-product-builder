# Project Blueprint: Lunch Menu Recommender

## Overview
This project is a simple web application that provides random lunch menu recommendations to the user. It is built using modern web standards (HTML, CSS, JavaScript) without external frameworks.

## Project Outline
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
The contact form feature has been implemented and styled. The next step is to commit these changes and push them to the GitHub repository for deployment.
