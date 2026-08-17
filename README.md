# CSE-D Attendance Manager

A lightweight, fully responsive web application built to easily track and mark absentees for the **CSE IV (D Section)**. This tool eliminates the need for manual typing by instantly generating an organized, copy-paste ready format of absentee roll numbers.

## Features

- **Custom Roll Number List:** Pre-configured with all 69 students of the CSE-D section (including lateral entries).
- **Intuitive UI:** Clean list layout with checkboxes and dynamic counting. Designed to mimic the aesthetics of modern professional applications.
- **One-Click Generation:** Clicking the "Generate" button opens a modal with a cleanly formatted list of absentees.
- **Smart Formatting:**
  - If students are marked absent, it generates:
    ```
    CSE IV - absentees:
    [roll_number_1]
    [roll_number_2]
    ```
  - If all students are present, it generates:
    ```
    CSE IV - ALL PRESENT
    ```
- **Copy to Clipboard:** Features a dedicated one-click copy button inside the report modal for effortless sharing.
- **Responsive Design:** Fully optimized for mobile screens, making it easy to mark attendance directly from a phone.

## Technologies Used

- **HTML5**
- **CSS3** (Custom properties, Flexbox, CSS Grid, Glassmorphism)
- **Vanilla JavaScript** (DOM manipulation, Clipboard API)

## How to Use

1. Clone or download this folder to your local machine.
2. Double-click on `index.html` to open the app in your default web browser. No server installation is required.
3. Click on any student's card to mark them as **Absent**. A red checkbox and styling will indicate their absentee status.
4. The top panel will dynamically update the count of absent students.
5. Click the **Generate** button in the top right to create the report.
6. Click **Copy** in the popup modal, and paste the message into WhatsApp, Teams, or your desired platform.

## File Structure

- `index.html`: The main structure and layout of the app.
- `style.css`: The styling, themes, and animations.
- `script.js`: The application logic containing the roll numbers, attendance tracking, and clipboard functionality.

---
*Created for the specific requirements of the CSE-D section attendance tracking.*
