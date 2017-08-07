$(document).ready(function() {

  //Variable to keep score

  var score = 0;

  //Function to change button colors when question answered

  $(".button").on("click", function() {

      if ($(this).hasClass("correct")) {
        $(this).addClass("green");

        //Add up score

        score += 1;

      } else {
        $(this).addClass("red");
        $(this).siblings(".correct").addClass("green");
      }

  });



//Display score

$("#q5 a").on("click", function() {

  $("#score").append("You scored " + score + "/5!");

  //Message corresponding to score

  if (score == 5) {
    $("#5scoreWrapper").show();
  } else if (score == 4) {
    $("#4scoreWrapper").show();
  } else if (score == 3) {
    $("#3scoreWrapper").show();
  } else if (score == 2) {
    $("#2scoreWrapper").show();
  } else if (score == 1) {
    $("#1scoreWrapper").show();
  } else {
    $("#0scoreWrapper").show();
  }

});

});
