// blank
$(document).ready(function(){
  
  hide = $(".hide");
  correct = $(".true");
  wrong = $(".false")
  answerBox = $("#answer-text")
  leftArrow = $(".left-arrow")
  rightArrow = $(".right-arrow")

  showAnswer()

})


// ============ QUIZ 1 ============

function showAnswer()
{ 
  correct.on("click", function()
  {
    answerBox.removeClass("hide")
  })  

  wrong.on("click", function()
  {
    answerBox.addClass("hide")
  })
}

function goToPrevious()
{
  leftArrow.on("click", function()
  {
    
  })

}

function goToNext()
{

}