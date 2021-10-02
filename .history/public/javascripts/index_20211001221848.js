
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
  arrow.mouse(function()
  {
    arrowImg.css("opacity", 0.5)
  })

  arrow.keyup(function()
  {
    arrowImg.css("opacity", 1)
  })
}
