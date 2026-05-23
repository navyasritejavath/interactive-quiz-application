
const quizData = [
  {
    question: "Which is the largest continent in the world?",
    answers: ["Africa", "Asia", "Europe", "North America"],
    correct: 1
  },
  {
    question: "Which is the longest river on Earth?",
    answers: ["Amazon River", "Yangtze River", "Nile River", "Mississippi River"],
    correct: 2
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3
  },
  {
    question: "Which is the smallest country in the world by land area?",
    answers: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    correct: 2
  },
  {
    question: "Which of these planets is known as the 'Red Planet'?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    answers: ["Asia", "South America", "Africa", "Australia"],
    correct: 2
  },
  {
    question: "Where is the Great Barrier Reef located?",
    answers: ["Brazil", "Australia", "Egypt", "India"],
    correct: 1
  },
  {
    question: "Which is the largest desert in the world (excluding Antarctica)?",
    answers: ["Gobi Desert", "Arabian Desert", "Sahara Desert", "Kalahari Desert"],
    correct: 2
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correct: 3
  },
  {
    question: "Which river flows through the city of Paris?",
    answers: ["Thames", "Seine", "Danube", "Rhine"],
    correct: 1
  },
  {
    question: "Who was the first President of the United States?",
    answers: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
    correct: 2
  },
  {
    question: "In what year did the Titanic sink?",
    answers: ["1910", "1912", "1914", "1916"],
    correct: 1
  },
  {
    question: "Who was the first Emperor of the Roman Empire?",
    answers: ["Julius Caesar", "Nero", "Augustus", "Marcus Aurelius"],
    correct: 2
  },
  {
    question: "Who was the leader of the Soviet Union during World War II?",
    answers: ["Vladimir Lenin", "Nikita Khrushchev", "Joseph Stalin", "Leonid Brezhnev"],
    correct: 2
  },
  {
    question: "In which year did World War I begin?",
    answers: ["1912", "1914", "1916", "1918"],
    correct: 1
  },
  {
    question: "The Berlin Wall fell in which year?",
    answers: ["1987", "1988", "1989", "1990"],
    correct: 2
  },
  {
    question: "Who was the first woman to be Prime Minister of India?",
    answers: ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sushma Swaraj"],
    correct: 1
  },
  {
    question: "Who was the founder of the Maurya Empire in India?",
    answers: ["Bindusara", "Ashoka", "Chandragupta Maurya", "Samudragupta"],
    correct: 2
  },
  {
    question: "Which Mughal emperor built the Taj Mahal?",
    answers: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    correct: 2
  },
  {
    question: "Who was the first man to step on the Moon in 1969?",
    answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    correct: 2
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["O2", "CO2", "H2O", "HO"],
    correct: 2
  },
  {
    question: "What is the powerhouse of the cell?",
    answers: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
    correct: 1
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: ["Iron", "Mercury", "Silver", "Gold"],
    correct: 1
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Quartz"],
    correct: 2
  },
  {
    question: "Who is known as the father of computers?",
    answers: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    correct: 1
  },
  {
    question: "Which planet in our solar system is the hottest?",
    answers: ["Mercury", "Venus", "Mars", "Jupiter"],
    correct: 1
  },
  {
    question: "What is the speed of light?",
    answers: ["3 x 10^5 km/s", "3 x 10^8 m/s", "3 x 10^6 m/s", "3 x 10^4 km/s"],
    correct: 1
  },
  {
    question: "Who proposed the Theory of Relativity?",
    answers: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correct: 1
  },
  {
    question: "Which human organ produces insulin?",
    answers: ["Liver", "Kidneys", "Pancreas", "Heart"],
    correct: 2
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    answers: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    correct: 3
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correct: 1
  },
  {
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    answers: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    correct: 2
  },
  {
    question: "Who created the famous detective character Sherlock Holmes?",
    answers: ["Agatha Christie", "Arthur Conan Doyle", "J.R.R. Tolkien", "Edgar Allan Poe"],
    correct: 1
  },
  {
    question: "Which country is the origin of the martial art Karate?",
    answers: ["China", "South Korea", "Japan", "Thailand"],
    correct: 2
  },
  {
    question: "What is the currency of the United Kingdom?",
    answers: ["Euro", "Dollar", "Pound Sterling", "Franc"],
    correct: 2
  },
  {
    question: "Who is the author of the Harry Potter book series?",
    answers: ["J.R.R. Tolkien", "George R.R. Martin", "Stephen King", "J.K. Rowling"],
    correct: 3
  },
  {
    question: "Which of these is the traditional dance of Punjab, India?",
    answers: ["Bharatanatyam", "Kathak", "Bhangra", "Garba"],
    correct: 2
  },
  {
    question: "Which is the longest-running animated television series in the U.S.?",
    answers: ["Family Guy", "The Simpsons", "South Park", "Spongebob Squarepants"],
    correct: 1
  },
  {
    question: "Who directed the movie 'Titanic' (1997)?",
    answers: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Martin Scorsese"],
    correct: 2
  },
  {
    question: "Which is the national bird of India?",
    answers: ["Parrot", "Peacock", "Eagle", "Pigeon"],
    correct: 1
  },
  {
    question: "How many players are there on the field for one team in a game of cricket?",
    answers: ["9", "10", "11", "12"],
    correct: 2
  },
  {
    question: "Which country won the FIFA World Cup in 2022?",
    answers: ["France", "Brazil", "Germany", "Argentina"],
    correct: 3
  },
  {
    question: "The Olympic Games are held every how many years?",
    answers: ["2", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Which sport uses a shuttlecock?",
    answers: ["Tennis", "Badminton", "Table Tennis", "Squash"],
    correct: 1
  },
  {
    question: "Who is often referred to as the 'God of Cricket'?",
    answers: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Kapil Dev"],
    correct: 2
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    answers: ["Horse", "Elephant", "Camel", "Donkey"],
    correct: 2
  },
  {
    question: "Which festival is known as the 'Festival of Lights'?",
    answers: ["Holi", "Eid", "Christmas", "Diwali"],
    correct: 3
  },
  {
    question: "How many colors are there in a rainbow?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "Which shape has three sides?",
    answers: ["Rectangle", "Square", "Triangle", "Circle"],
    correct: 2
  }
];
// Global State Tracking Variables
let activeQuestionNum = 0;
let totalCorrect = 0;

// Cache DOM Element References
const startBox = document.getElementById('start-box');
const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const startBtn = document.getElementById('start-btn');
const skipBtn = document.getElementById('skip-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const progressElement = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const scoreText = document.getElementById('score-text');

// Interactive UI Event Listeners
startBtn.addEventListener('click', initiateChallenge);
skipBtn.addEventListener('click', skipQuestion);
nextBtn.addEventListener('click', () => {
  activeQuestionNum++; 
  prepNextPrompt();
});
restartBtn.addEventListener('click', initiateChallenge);

// Core Quiz Logic Engine
function initiateChallenge() {
  startBox.classList.add('hide');
  resultBox.classList.add('hide');
  quizBox.classList.remove('hide');
  
  // Reset quiz metrics for a fresh start or replay
  activeQuestionNum = 0; 
  totalCorrect = 0; 
  
  prepNextPrompt();
}

function prepNextPrompt() {
  resetState();
  quizBox.classList.remove('fade-in');
  void quizBox.offsetWidth; // Force element layout reflow to restart CSS animation
  quizBox.classList.add('fade-in');
  renderQuestionToUI(quizData[activeQuestionNum]); 
}

function renderQuestionToUI(questionData) {
  const progressPercent = (activeQuestionNum / quizData.length) * 100; 
  progressBar.style.width = `${progressPercent}%`;
  
  progressElement.innerText = `Question ${activeQuestionNum + 1} of ${quizData.length}`; 
  questionElement.innerText = questionData.question;
  
  // Remove previous question's answer buttons from the DOM container
  answerButtonsElement.innerHTML = '';
  
  questionData.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('answer-btn');
    button.addEventListener('click', () => validateUserChoice(index, questionData.correct));
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextBtn.classList.add('hide');
  skipBtn.classList.remove('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function skipQuestion() {
  handleNextNavigation();
}

function validateUserChoice(selectedIndex, correctIndex) {
  const buttons = answerButtonsElement.querySelectorAll('.answer-btn');
  skipBtn.classList.add('hide'); // Prevent user from skipping after making a choice
  
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === correctIndex) {
      button.classList.add('correct');
    }
  });

  if (selectedIndex === correctIndex) {
    totalCorrect++; 
  } else {
    buttons[selectedIndex].classList.add('wrong');
  }

  handleNextNavigation();
}

function handleNextNavigation() {
  if (activeQuestionNum + 1 === quizData.length) { 
    progressBar.style.width = '100%';
  }

  if (quizData.length > activeQuestionNum + 1) { 
    // Advance instantly if skipped, otherwise show manual navigation button
    const isSkipped = !answerButtonsElement.querySelector('.answer-btn').disabled;
    if (isSkipped) {
      activeQuestionNum++; 
      prepNextPrompt();    
    } else {
      nextBtn.classList.remove('hide');
    }
  } else {
    setTimeout(showResults, 1000);
  }
}

function showResults() {
  quizBox.classList.add('hide');
  resultBox.classList.remove('hide');
  scoreText.innerText = `You scored ${totalCorrect} out of ${quizData.length}!`; 
}
