// ids used
// question-container
// question
// answer-buttons
// start-button
// next-button
// finitial
// secinitial

// const=constant refrence to a value may need to be changed to var once timer and scoreboard is added
var startButton = document.getElementById('start-button');
var nextButton = document.getElementById('next-button')
var questionsContainerElement = document.getElementById('question-container'); 
var questionElement = document.getElementById('question');
var questionElement = document.getElementById('answer-buttons'); 
let shuffledQuestions, currentQuestionIndex;

// click event when start button is pressed do below
startButton.addEventListener('click', startGame);

// if start button is pressed display question 
  // if not display null // do not need this statement because loop does not start until button is clicked
  // if start button is pressed start timer
  // return hidden question
function startGame() {
  console.log('game started') //logs if start button is clicked
  startButton.classList.add('hide') // hides start button once selected
  shuffledQuestions = questions.sort(() => Math.random() - .5) //gives random array of questions
  questionsContainerElement.classList.remove('hide') //removes hide from questions once previous question has been answered
  currentQuestionIndex = 0
  setNextQuestion()
};

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]); 
};

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
     var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('button');
    if (answer.correct) { 
      button.dataset.correct = answer.correct //.dataset add data attr to button
    } // done this way because answer is a string not a boolean
    button.addEventListener('click', selectAnswer);
    // answerButtonsElement.appendChild(button); 
  });
};

//resets everything back to default state every time we get a new question
function resetState() {
  nextButton.classList.add('hide') // hides next button until answer is selected
  answerButtonsElement.removeChild(answerButtonsElement.firstChild)
};

function selectAnswer() {

};

// questions
  // event listener for answer
  // way to check if answer is true or false //done
  // store answer
  // if true reveal next question
  // if false subtract 15sec and move to next question
  // if timer reaches 0 stop game display score and do bellow
const questions = [
  {
    question: 'How does positrac work in a Plymouth?',
    answers: [
      { text: 'Nobody knows', correct: true },
      { text: 'Osmosis', correct: false},
      { text: 'Rainbow Dust', correct: false},
      { text: 'Unicorn Farts', correct: false}
    ]
  }
];
  





// once all questions have been answered and score is logged
  // display score
  // reveal initials form
  // store score  and initial in local to be called by      leader board     
  // display score to user in leader board
  // display initials next to score in leader board
  

