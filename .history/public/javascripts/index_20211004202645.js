
$(document).ready(function(){
  
  hide = $(".hide");
  correct = $(".true");
  wrong = $(".false")
  answerBox = $("#answer-text")
  quizButton = $(".quiz-answer")
  answerHolder = 

  showAnswer()


  $("#menuIcon").click(function(){
      $("#panelCont").css('display', 'block').css('z-index', 10)
      let menuPanel = document.createElement("div")
      menuPanel.id = "panel"
      $(menuPanel).css("background-color", "#353535").css('display', 'block')
      .css('width', '300px').css('height', '100vh').css('padding', 30)
      .css('position', 'absolute').css('top', 0).css('right', 0)

      let closeBtn = document.createElement("img")
      closeBtn.id = "close"
      closeBtn.src = "../Img/close.svg"
      $(closeBtn).click(function(){
        $("#panelCont").css('display', 'none')
      })
      $(menuPanel).append(closeBtn)

      $("#panelCont").append(menuPanel)
    })
})


// ============ QUIZ ============

function showAnswer()
{ 
  correct.on("click", function()
  {
    answerBox.removeClass("hide")
    quizButton.addClass("hide")
  })  

  wrong.on("click", function()
  {
    answerBox.addClass("hide")
    quizButton.removeClass("hide")
  })
}



