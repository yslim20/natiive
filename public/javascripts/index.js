
$(document).ready(function(){
  
  hide = $(".hide");
  correct = $(".true");
  wrong = $(".false")
  answerBox = $("#answer-text")

  showAnswer()


  $("#menuIcon").click(function(){
      $("#panelCont").css('display', 'block').css('z-index', 10)
      $('#panel').css('display', 'block')

      let background = document.createElement("div")
      $(background).css('position', 'absolute').css('width', '100%').css('height', '100%')
      .css('z-index', 5).css('background-color', 'rgba(0,0,0,0.75)')

      $('body').append(background)

      $('#close').css('position', 'absolute').css('right', 30).css('width', 25)

      $('#close').click(function(){
        $("#panelCont").css('display', 'none')
        $(background).css('display', 'none')
      })

    })
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



