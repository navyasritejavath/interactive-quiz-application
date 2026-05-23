# interactive-quiz-application

COMPANY: CODTECH IT SOLUTIONS

NAME : NAVYASRI TEJAVATH

INTERN ID : CITS1246

DOMINE : FRONT END DEVELOPMENT

DURATION : 4 WEEKS

MENTOR : NEELA SANTOSH

# Quiz49 Web Application

## Project Overview

Quiz49 is an interactive **web-based quiz application** developed using fundamental front-end technologies: **HTML, CSS, and JavaScript**. The application is designed to test a user’s general knowledge across multiple domains such as geography, history, science, sports, and more. It provides a smooth and engaging user experience through a clean interface, dynamic question rendering, and real-time feedback.

The application follows a structured flow consisting of three main UI states: a **start screen**, a **quiz interface**, and a **result screen**. Users begin by clicking the “Start Quiz” button, after which questions are presented one at a time. Each question includes multiple answer choices, and users can either select an answer or skip the question. At the end of the quiz, the user’s score is displayed along with an option to restart the quiz.

---

## Technologies Used

### 1. HTML (Structure)

HTML is used to define the structure of the application. It includes:

* A **start box** for initializing the quiz
* A **quiz box** for displaying questions and answers
* A **result box** for showing final scores

Semantic elements and organized IDs are used to allow easy DOM manipulation via JavaScript.

---

### 2. CSS (Styling & UI Design)

CSS is used to enhance the visual appearance of the application:

* Custom color variables for consistent theming
* Responsive layout using flexbox
* Styled buttons with hover effects
* Progress bar to indicate quiz completion
* Visual feedback using colors (green for correct, red for wrong)
* Smooth animations such as fade-in transitions

---

### 3. JavaScript (Logic & Interactivity)

JavaScript handles all dynamic behavior:

* Loading questions dynamically from the `quizData` array
* Tracking the current question index and score
* Handling user interactions (answer selection, skip, next)
* Updating the progress bar and question counter
* Displaying results at the end of the quiz

---

## Development Tools & Platform

This project was developed using:

* **Visual Studio Code (VS Code)** as the primary code editor
  (with features like syntax highlighting and Live Server)

* The application runs in modern web browsers such as:

  * Google Chrome
  * Microsoft Edge
  * Mozilla Firefox

No external libraries or frameworks were used, making it a **pure vanilla JavaScript project**.

---

## Key Features

* Start screen to initialize the quiz
* Dynamic question loading from a JavaScript array
* Multiple-choice answer buttons generated dynamically
* Skip question functionality
* Next question navigation
* Progress indicator (Question number + progress bar)
* Real-time answer validation with color feedback
* Final score display
* Restart quiz option

---

## How the Application Works

1. The user clicks the **Start Quiz** button.
2. The first question is loaded dynamically from the dataset.
3. Answer options are displayed as clickable buttons.
4. When the user selects an answer:

   * Correct answer is highlighted in green
   * Incorrect selection is highlighted in red
   * Score is updated accordingly
5. The user can:

   * Click **Next** to continue
   * Click **Skip** to move to the next question without answering
6. Progress bar updates after each question.
7. After the last question, the result screen displays the final score.
8. The user can restart the quiz using the **Try Again** button.

---

## Applications of This Project

This quiz application can be used in various real-world scenarios:

* **Educational Platforms:**
  For conducting quizzes in schools or online learning systems

* **Competitive Exam Preparation:**
  Useful for exams like UPSC, SSC, or other general knowledge tests

* **Training and Assessment Tools:**
  Can be used in corporate training programs

* **Interactive Learning Apps:**
  Helps in making learning engaging and fun

* **Beginner Web Development Projects:**
  Ideal for understanding DOM manipulation and event-driven programming

---

## Future Enhancements

* Add subject-wise category selection
* Implement a timer for each question
* Randomize question order
* Store high scores using local storage
* Add sound effects and animations
* Make the UI fully responsive for mobile devices

#OUTPUT 

<img width="718" height="831" alt="Image" src="https://github.com/user-attachments/assets/bf97a815-b06d-4065-a295-cf5e78aa1a9e" />
