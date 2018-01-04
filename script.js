let currentDate = new Date();
let happyResponse = document.getElementById('happy_response');
let sadResponse = document.getElementById('sad_response');
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
console.log(currentDate);

// function questionField(feeling) {
//   console.log(moodQuestions.feeling[randomIndex])
// };

happyResponse.onclick = function questionField() {
    console.log(moodQuestions.happy[randomIndex])
  };



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
