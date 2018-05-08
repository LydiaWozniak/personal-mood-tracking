
const questionField = document.querySelector('#question');
const sadResponse = document.querySelector('.sad_response');
const happyResponse = document.querySelector('.happy_response');
const moodSelection = document.querySelector('.response');
const inputField = document.querySelector('.inputField');
const pastData = document.querySelector('.past_data');
const dataDisplay = document.querySelector('.dataDisplay'); 
const button = document.querySelector('.toggleButton'); 
 
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
  let dateFormat = `${currentTime.getDate()}: ${(currentTime.getMonth())+1}: ${currentTime.getFullYear()}`
  question.textContent = response;
  moodSelection.classList.toggle("hidden");
  inputField.classList.toggle("hidden");

  inputField.addEventListener('keydown', inputText);

  function inputText(e) {
    if(e.keyCode === 13) {
      const text = (document.querySelector('[name=userResponse')).value; 
      const dataAddition = {
        date: dateFormat,
        mood: 'Happy',
        propQuestion: response,
        answer: text
      }
      userData.unshift(dataAddition);
      localStorage.setItem('userData', JSON.stringify(userData));
      this.reset; 
      console.table(userData);
      window.location.reload(true); 
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
    <ul>
      Past Responses: 
      <li> Date: ${(userData[i].date)} </li>
      <li> ${(userData[i].mood)} </li>
      <li> Question Asked: ${(userData[i].propQuestion)} </li>
      <li> Answer: ${(userData[i].answer)} </li> 
    </ul>  
    `;
  }).join('');
};

function toggleHistory() {
  dataDisplay.classList.toggle("hidden");
  console.log('clicked'); 
};

// sadResponse.addEventListener("click", sadQuestion);
populatePastData(userData, pastData);
button.addEventListener("click", toggleHistory); 
happyResponse.addEventListener("click", happyQuestion);
// inputField.addEventListener('keydown', inputText);
