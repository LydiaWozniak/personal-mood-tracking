let currentDate = new Date();
let hours = currentDate.getHours(); //extract the hour from currentDate
console.log(hours);

// let happyResponse = document.querySelectorAll('.happy_response');
// let sadResponse = document.getElementsByClassName('sad_response');
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

function happyFunction(){
  console.log('yay');
};

// function sadFunction(){
//   console.log('Noooooo');
// }

document.getElementById("goodButton").addEventListener("click", happyFunction);

// On click remove options, display question from list and input field
// for (i=0; i < sadResponse.length; i++){
//   sadResponse.onclick = function() {
//     console.log("Sad Pressed");}
//   };

// document.ready(function(){
//   sadResponse.onclick = function(){
//     console.log('Sad pressed');
//   };
// });

// function questionField(feeling) {
//   console.log(moodQuestions.feeling[randomIndex])
// }

// function chooseHappy(e) {
//   if(e.propertyName !== 'click') return; //to skip over events clicks
//   console.log("Choose Happy");
// };
//
//
// happyResponse.forEach(click =>  click.addEventListener('mousedown', chooseHappy));

// for (i=0; i < sadResponse.length; i++){
//   sadResponse.onclick = function() {
//     let msg = moodQuestions.sad[randomIndex];
//     function updateQuestion() {
//       let questionField = document.getElementById('question');
//       questionField.textContent = msg;
//     }
//   };
// };
// console.log(moodQuestions.happy[randomIndex]);
