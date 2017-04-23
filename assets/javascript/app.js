window.onload = start;



var triviaQuestions;
var question1, question2, question3, question4, question5, question6, question7, question8, question9, question10;
var correctAnswers=0;
var questionsAnswered=0;
var timeInSeconds;
var timer;





function createQuestion (quote, answer1, answer2, answer3, correctAnswer, image) {
  this.quote=quote;
  this.answer1=answer1;
  this.answer2=answer2;
  this.answer3=answer3;
  this.correctAnswer=correctAnswer;
  this.image=image;
}
function start(){
  $("#questionSection").hide();
  $("#answersSection").hide();
  $("questionResult").hide();
  $("#gameResult").hide();
  question1 = new createQuestion("The Statue of Liberty was a gift from what country?","France","Germany","England","France", "assets/images/liberty.jpeg");
  question2 = new createQuestion("What was the name of the U.S. mail service, started in 1860, that used horses and riders?", 
                                  "Mustang Mail", "Pony Express", "Cavalier Carrier", "Pony Express", "assets/images/pony.jpeg");
  question3 = new createQuestion("Which of the great lakes does not share a border with Canada?","Lake Erie","Lake Michigan","Lake Huron","Lake Michigan", "assets/images/lakes.jpeg");
  question4 = new createQuestion("Who wrote the Pledge of Allegiance of the United States?","Francis Bellamy","George Jerrerson","Benjamin Franklin","Francis Bellamy","assets/images/pledge.png");
  question5 = new createQuestion("What was the name of the U.S. research and development project to create nuclear weapons in WWII?","Area 51","Los Alamos","Manhattan Project","Manhattan Project", "assets/images/bomb.jpeg");
  question6 = new createQuestion("Which city in the United States is known as the 'Windy City'?","Cincinnati","Chicago","New York City","Chicago", "assets/images/chicago.jpeg");
  question7 = new createQuestion("What is the tallest building in New York?","One World Trade","Empire State Building","Chrysler Building","One World Trade", "assets/images/trade.jpeg");
  question8 = new createQuestion("Which Patriot leader organized the Boston Tea Party in 1773?","Benjamin Franklin","Samuel Adams","Thomas Jefferson","Samuel Adams", "assets/images/boston.jpg");
  question9 = new createQuestion("Who was the first US President to declare war?","James Madison","George Washington","Teddy Roosevelt","James Madison", "assets/images/madison.jpeg");
  question10 = new createQuestion("How many US Supreme Court justices are there?","12","7","9","9", "assets/images/supreme.jpeg");
  triviaQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
}
$("#startButton").on("click", function() {
  startGame();
});
$(document).ready(function() {
    $("#answer1").on("click", function() {
      checker(0);
    });
    $("#answer2").on("click", function() {
      checker(1);
    });
    $("#answer3").on("click", function() {
      checker(2);
    });
    $("#answer4").on("click", function() {
      checker(3);
    });
});
function startGame() {
  if (questionsAnswered==10) {
    gameResults();
  }
  else{
  clearInterval(timer);
  timeInSeconds=30;
  timer = setInterval(function() {
    $("#timer").html("Time Remaining: " + timeInSeconds);
    timeInSeconds--;
    if (timeInSeconds < 0) {
      questionNotAnswered();
    }
  }, 1000);
  $("#question").html(triviaQuestions[questionsAnswered].quote);
  $("#answer1").html(triviaQuestions[questionsAnswered].answer1);
  $("#answer2").html(triviaQuestions[questionsAnswered].answer2);
  $("#answer3").html(triviaQuestions[questionsAnswered].answer3);
  $("#answer4").html(triviaQuestions[questionsAnswered].answer4);
  $("#questionResult").hide();
  $("#gameResult").hide();
  $("#playButton").hide();
  $("#questionSection").show();
  $("#answersSection").show();
  }
}
function checker(chosenAnswer) {
  clearInterval(timer);
  $("#timer").html("Time Remaining:");
  $("#questionSection").hide();
  $("#answersSection").hide();
  $("#questionResult").show();
  questionsAnswered++;
  if (chosenAnswer == 0 && triviaQuestions[questionsAnswered-1].answer1 == triviaQuestions[questionsAnswered-1].correctAnswer) {
    questionCorrect();
  }
  else if (chosenAnswer == 1 && triviaQuestions[questionsAnswered-1].answer2 == triviaQuestions[questionsAnswered-1].correctAnswer) {
    questionCorrect();
  }
  else if (chosenAnswer == 2 && triviaQuestions[questionsAnswered-1].answer3 == triviaQuestions[questionsAnswered-1].correctAnswer) {
    questionCorrect();
  } 
  else if (chosenAnswer == 3 && triviaQuestions[questionsAnswered-1].answer4 == triviaQuestions[questionsAnswered-1].correctAnswer) {
    questionCorrect();
  }
  else {
    questionIncorrect();
  } 
}




function questionCorrect() {
  correctAnswers++;
  timeInSeconds=5;
  timer = setInterval(function() {
    timeInSeconds--;
    if (timeInSeconds < 0) {
      startGame();
    }
  }, 1000);
  $("#questionAnswer").html("Correct!: "+ triviaQuestions[questionsAnswered-1].correctAnswer);
  $("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}





function questionIncorrect() {
  timeInSeconds=5;
  timer = setInterval(function() {
    timeInSeconds--;
    if (timeInSeconds < 0) {
      startGame();
    }
  }, 1000);
  $("#questionAnswer").html("Nope! The correct answer was: " + triviaQuestions[questionsAnswered-1].correctAnswer);
  $("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}



function questionNotAnswered() {
  clearInterval(timer);
  $("#timer").html("Time Remaining:");
  $("#questionSection").hide();
  $("#answersSection").hide();
  $("#questionResult").show();
  questionsAnswered++;
  timeInSeconds=5;
  timer = setInterval(function() {
    timeInSeconds--;
    if (timeInSeconds < 0) {
      startGame();
    }
  }, 1000);
  $("#questionAnswer").html("Nope! The correct answer was: " + triviaQuestions[questionsAnswered-1].correctAnswer);
  $("#correctAnswerPic").attr("src", triviaQuestions[questionsAnswered-1].image);
}
function gameResults() {
  $("#questionResult").hide();
  $("#gameResult").show();
  $("#gameStats").html("Game Over! You answered " + correctAnswers + " out of " + questionsAnswered + " correct!");
}
$("#playAgainButton").on("click", function(){
  questionsAnswered=0;
  correctAnswers=0;
  startGame();
});





