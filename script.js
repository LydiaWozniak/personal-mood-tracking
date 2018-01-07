let currentDate = new Date();
let hours = currentDate.getHours(); //extract the hour from currentDate

let happyResponse = document.querySelectorAll('.happy_response');
let sadResponse = document.querySelectorAll('.sad_response');
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

// function questionField(feeling) {
//   console.log(moodQuestions.feeling[randomIndex])
// };

function chooseHappy(e) {
  if(e.propertyName !== 'click') return; //to skip over events clicks
  console.log("Choose Happy");
};


happyResponse.forEach(click =>  click.addEventListener('mousedown', chooseHappy));




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
