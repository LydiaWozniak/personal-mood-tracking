
const questionField = document.querySelector('#question');
const sadResponse = document.querySelector('.sad_response');
const userResponse = document.querySelector('.happy_response');
const moodSelection = document.querySelector('.response');
const inputField = document.querySelector('.inputField');
const pastData = document.querySelector('.past_data');
const dataDisplay = document.querySelector('.dataDisplay'); 
const button = document.querySelector('.toggleButton'); 
const slider = document.getElementById("myRange");
const output = document.getElementById("output");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}; 

 
//this generates a random number for use as an index
let randomIndex = Math.floor((Math.random() * 2));

//saves data to local storage
const userData = JSON.parse(localStorage.getItem('userData')) || [];

let moodQuestions = {
  sad: ["Create a new goal.", "Set an intention for the day.", ],
  happy: ["List three things you are thankful for.", "What is something you have been putting off?"]
};


function trackMood(){
  console.log("clicked"); 
  let currentMood = slider.value;
  let response; 
  if (currentMood >= 5) {
    response = `${moodQuestions.happy[randomIndex]}`; 
  }
    else {
    response = `${moodQuestions.sad[randomIndex]}`;
    };
  let currentTime = new Date();
  let dateFormat = `${currentTime.getDate()}: ${(currentTime.getMonth())+1}: ${currentTime.getFullYear()}`;
  question.textContent = response;
  moodSelection.classList.toggle("hidden");
  inputField.classList.toggle("hidden");

  inputField.addEventListener('keydown', inputText);

  function inputText(e) {
    if(e.keyCode === 13) {
      const text = (document.querySelector('[name=userResponse')).value; 
      const dataAddition = {
        date: dateFormat,
        mood: currentMood,
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

populatePastData(userData, pastData);
button.addEventListener("click", toggleHistory); 
userResponse.addEventListener("click", trackMood); 
// inputField.addEventListener('keydown', inputText);
