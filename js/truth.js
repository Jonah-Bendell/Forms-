let fname = "";

function greet() {

    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings, " + age + " year old " + fname + " " + lname

}


function trivia1(){

let triviaAnswer = document.getElementById("trivia1-answer");

//get values from the form

let chocolateSelected = document.getElementById("chocolate").checked;
let tunaSelected = document.getElementById("tuna").checked;
let honeySelected = document.getElementById("honey").checked;

// give them result based off answer

if (chocolateSelected) {

    triviaAnswer.innerHTML = fname + " You are wrong! "
}

if (tunaSelected){

triviaAnswer.innerHTML = fname + " You are wrong "

}

if (honeySelected){
    triviaAnswer.innerHTML = fname + " Correct! "
}

}


function twoTruthsOneLie(){

let triviaAnswer = document.getElementById("twoTruthsOneLieAnswer");

//get values from the form

let watchSelected = document.getElementById("watch").checked;
let MUNSelected = document.getElementById("MUN").checked;
let countriesSelected = document.getElementById("countries").checked;

// give them result based off answer

if (watchSelected) {

    twoTruthsOneLieAnswer.innerHTML = fname + " Truth "
}

if (MUNSelected){

twoTruthsOneLieAnswer.innerHTML = fname + " Truth "

}

if (countriesSelected){
    twoTruthsOneLieAnswer.innerHTML = fname + " Lie! "
}

}

function trivia2(){

let triviaAnswer = document.getElementById("trivia2Answer");



let presidentSelected = document.getElementById("president").checked;
let nobelSelected = document.getElementById("nobel").checked;
let organSelected = document.getElementById("organ").checked;



if (presidentSelected && nobelSelected) {

    trivia2Answer.innerHTML = fname + " Nice job! 2 Correct "
}

if (presidentSelected && organSelected){

trivia2Answer.innerHTML = fname + " Not a great job only 1 correct "

}

if (nobelSelected && organSelected){
    trivia2Answer.innerHTML = fname + " Not a great job only 1 correct "
}

if (presidentSelected && organSelected && nobelSelected){
    trivia2Answer.innerHTML = fname + " Dont Cheat "
}

}


    


let time = 15;
let locked = false;


let countdown = setInterval(function(){
  if (locked) return;
  time--;
  document.getElementById("timer").textContent = time;
  if (time <= 0) {
    checkTrivia();
  }
}, 1000);

function checkTrivia() {
  if (locked) return;
  locked = true;
  clearInterval(countdown);

  let triviaAnswer = document.getElementById("triviaAnswer");

  let hydrogenSelected = document.getElementById("hydrogen").checked;
  let sodiumSelected = document.getElementById("sodium").checked;
  let nitrogenSelected = document.getElementById("nitrogen").checked;

  document.getElementById("hydrogen").disabled = true;
  document.getElementById("sodium").disabled = true;
  document.getElementById("nitrogen").disabled = true;


  if (sodiumSelected && hydrogenSelected) {
      triviaAnswer.innerHTML = fname + " — Nice job! 1 correct and 1 wrong.";
  }

  if (sodiumSelected && nitrogenSelected) {
      triviaAnswer.innerHTML = fname + " — Not bad, 1 correct but also 1 wrong.";
  }

  if (hydrogenSelected && nitrogenSelected) {
      triviaAnswer.innerHTML = fname + " — Not a great job, no correct answers.";
  }

  if (sodiumSelected && hydrogenSelected && nitrogenSelected) {
      triviaAnswer.innerHTML = fname + " — Don't cheat!";
  }

  if (sodiumSelected && !hydrogenSelected && !nitrogenSelected) {
      triviaAnswer.innerHTML = fname + " — Perfect! Sodium (Na) is correct!";
  }

  if (!sodiumSelected && !hydrogenSelected && !nitrogenSelected) {
      triviaAnswer.innerHTML = fname + " — You didn’t select an answer.";
  }
}