let currentDate = new Date();
let day = currentDate.getDate();
let month = (currentDate.getMonth())+1;
let year = currentDate.getFullYear();
let hours = currentDate.getHours(); //extract the hour from currentDate
console.log(hours);

let questionField = document.querySelector('#question');
let sadResponse = document.querySelector('.sad_response');
let happyResponse = document.querySelector('.happy_response');
let moodSelection = document.querySelector('.response');
let inputField = document.querySelector('.inputField');
//this generates a random number for use as an index
let randomIndex = Math.floor((Math.random() * 2));

let userData = {
  user: "lydia",
  data:{
    date: "",
    mood: "",
    propQuestion: "",
    answer: ""
  }
};

let moodQuestions = {
  sad: ["Create a new goal.", "Set an intention for the day.", ],
  happy: ["List three things you are thankful for.", "What is something you have been putting off?"]
};

// console.log(moodQuestions.sad[randomIndex]);

console.log(hours); //logs hour

function sadQuestion(){
  let response = `${moodQuestions.sad[randomIndex]}`;
  question.textContent = response;
  moodSelection.classList.toggle("hidden");
  inputField.classList.toggle("hidden");
  userData.data.date = `${day} ${month} ${year}`
  userData.data.mood = `Sad`;
  userData.data.propQuestion= response;


  console.table(userData);
};

function happyQuestion(){
  let response = `${moodQuestions.happy[randomIndex]}`;
  question.textContent = response;
  moodSelection.classList.toggle("hidden");
  inputField.classList.toggle("hidden");
  userData.data.date = `${day} ${month} ${year}`
  userData.data.mood = `Happy`;
  userData.data.propQuestion= response;
};


sadResponse.addEventListener("click", sadQuestion);
happyResponse.addEventListener("click", happyQuestion
