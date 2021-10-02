
$(document).ready(function(){
  
  hide = $(".hide");
  correct = $(".true");
  wrong = $(".false")
  answerBox = $("#answer-text")
  arrow = $(".arrow")
  arrowImg = $(".arrow-img")

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

// ============ ARROW ============

function clickArrow()
{
  arrow.keydown(function()
  {
    arrowImg.addClass("shadow")
  })

  arrow.keyup(function()
  {
    arrowImg.removeClass("shadow")
  })
}
