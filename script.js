const questionField = document.querySelector('#question');
const sadResponse = document.querySelector('.sad_response');
const happyResponse = document.querySelector('.happy_response');
const moodSelection = document.querySelector('.response');
const inputField = document.querySelector('.inputField');
const pastData = document.querySelector('.past_data');
const button = document.querySelector('button'); 
//this generates a random number for use as an index
let randomIndex = Math.floor((Math.random() * 2));

//saves data to local storage
const userData = JSON.parse(localStorage.getItem('userData')) || [];

let moodQuestions = {
  sad: ["Create a new goal.", "Set an intention for the day.", ],
  happy: ["List three things you are thankful for.", "What is something you have been putting off?"]
};


function happyQuestion(){
  let response = `${moodQuestions.happy[randomIndex]}`;
  let currentTime = new Date();
  question.textContent = response;
  moodSelection.classList.toggle("hidden");
  inputField.classList.toggle("hidden");

  inputField.addEventListener('keydown', inputText);

  function inputText(e) {
    if(e.keyCode === 13) {
  
      const dataAddition = {
        date: currentTime,
        mood: 'Happy',
        propQuestion: response,
        answer: `${inputField.value}`};

      question.textContent = 'How are you feeling today?';
      moodSelection.classList.toggle("hidden");
      inputField.classList.toggle("hidden");
      window.location.reload();
      userData.push(dataAddition);
      localStorage.setItem('userData', JSON.stringify(userData));
      console.table(userData);
    };
  
  };
  


};

// function inputText(e) {
//   if(e.keyCode === 13) {

//     const yourAnswer = {
//       date: currentDay,
//       answer: `${inputField.value}`};

//     userData.push(yourAnswer);
//     question.textContent = 'How are you feeling today?';
//     moodSelection.classList.toggle("hidden");
//     inputField.classList.toggle("hidden");
//     window.location.reload();
//   };

// };

function populatePastData(data =[], dataBank){
  dataBank.innerHTML = data.map((data, i) => {
    return `
    <li>
      Past Responses: 
      ${JSON.stringify(userData[i].date)}
      ${JSON.stringify(userData[i].mood)}
      ${JSON.stringify(userData[i].propQuestion)}
      ${JSON.stringify(userData[i].answer)}
    </li>
    `;
  }).join('');
};

// sadResponse.addEventListener("click", sadQuestion);
populatePastData(userData, pastData);
happyResponse.addEventListener("click", happyQuestion);
// inputField.addEventListener('keydown', inputText);
