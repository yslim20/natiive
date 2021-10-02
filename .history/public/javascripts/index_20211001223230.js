
$(document).ready(function(){
  
  hide = $(".hide");
  correct = $(".true");
  wrong = $(".false")
  answerBox = $("#answer-text")
  leftArrow = $(".left-arrow")
  leftArrowImg = $(".left-arrow-img")

  showAnswer()
  clickArrow()

})


// ============ QUIZ ============

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

