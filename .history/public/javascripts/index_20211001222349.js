
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

// ============ ARROW ============

function clickArrow()
{
  leftArrow.mouseover(function()
  {
    // leftArrowImg.css("opacity", 0.5)
    leftArrowImg.css("opacity", 0.5)
  })

  leftArrow.mouseout(function()
  {
    leftArrowImg.css("opacity", 1)
  })
}
