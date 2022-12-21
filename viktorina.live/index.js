const database = {
  1: {
    question: "What is the capital of France?",
    answers: ["Paris"],
  },
  2: {
    question: "What is the largest ocean in the world?",
    answers: ["Pacific Ocean"],
  },
  3: {
    question: "What is the highest mountain in the world?",
    answers: ["Everest"],
  },
  4: {
    question: "What is the longest river in the world?",
    answers: ["Nile"],
  },
  5: {
    question: "Kas megsta saldainius?",
    answers: ["Giedrius"],
  },
  6: {
    question: "Kas daro netvarka?",
    answers: ["Viktorija"],
  },
  6: {
    question: "Seimos Narys?",
    answers: ["Ugis"],
  },
  7: {
    question: "Aldo gimimo metai?",
    answers: ["1986"],
  },
};

function displayQuestionAndAnswers() {
  // Get a random question and its answers
  const randomIndex = Math.floor(Math.random() * Object.keys(database).length) + 1;
  const question = database[randomIndex].question;
  const answers = database[randomIndex].answers;

  // Display the question in the "question" element
  document.getElementById("question").innerHTML = question;

  // Display the answers in the "answers" element
  answers.forEach((answer) => {
    const answerElement = document.createElement("div");
    displayLettersWithDelay(answerElement, answer, 2000);
    document.getElementById("answers").appendChild(answerElement);
  });
}

let dots = "";
  for (let i = 0; i < answers.length; i++) {
    dots += ".";
  }

  // Output the question and dots in the container div element
  const container = document.getElementById("container");
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = `${question} (${dots})`;
  container.appendChild(questionDiv);



function displayLettersWithDelay(element, string, delay) {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      element.innerHTML += string[i];
    }, delay * i);
  }
}



function generateAndDisplayRandomPoint() {
  // Generate a random point from 1 to 5
  const randomPoint = Math.floor(Math.random() * 5) + 1;
  let litoVerte = "";
  
  // Determine the value of litoVerte based on the value of randomPoint
  if (randomPoint === 1) {
    litoVerte = "Litas";
  } else {
    litoVerte = "Litai";
  }
  
  // Display the random point in the "points" element
  document.getElementById("points").innerHTML = `Verte: ${randomPoint} ${litoVerte}`;
}


function refreshPage() {
  setTimeout(() => {
    location.reload();
  }, 8000); // 8000 milliseconds = 8 seconds
}

displayQuestionAndAnswers();
generateAndDisplayRandomPoint();
refreshPage();
displayLetters(container, answers.length);


 // Get a reference to the form element
 const form = document.getElementById('answer-form');

 // Add an event listener to the form to handle submit events
 form.addEventListener('submit', event => {
   // Prevent the default form submission behavior
   event.preventDefault();

   // Get the value of the answer input field
   const answer = event.target.elements.answer.value;

   // Do something with the answer, such as sending it to a server or processing it in some way
   // ...
 })
   
  



