
$(document).ready(function(){
  
  hide = $(".hide");
  correct = $(".true");
  wrong = $(".false")
  quizHolder = $(".quiz-question-holder")
  answerBox = $("#answer-text")
  quizButton = $(".quiz-answer")
  answerHolder = $(".answer-holder")
  trueFalse = $(".true-false")
  answerOne = $(".answer-one")
  answerTwo = $(".answer-two")
  answerThree = $(".answer-three")
  answerFour = $(".answer-four")
  answerFive = $(".answer-five")

  showAnswer()
  ajax()


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
    trueFalse.removeClass("hide")
    quizButton.addClass("hide")
    answerHolder.css("margin-bottom", 0)    
    quizHolder.css("margin-bottom", 50)
  }) 

  wrong.on("click", function()
  {
    answerBox.addClass("hide")
    trueFalse.addClass("hide")
    quizButton.removeClass("hide")
  })
}

// ============ AJAX ============

function ajax()
{

// --------------- Quiz 1
  answerOne.on("click", function()
  {
    $.getJSON("data/data.json", function(data, status)
    {
      console.log("Response status: " + status);
      answerBox.text
      (
        data["answers"][0]["content"]
      );
    }).fail(function(jqxhr, status, error){
      console.log("Code: " + jqxhr.status);
      console.log("Response status: " + status);
      console.log("Error message: " + error);
    })   
  }) 

// --------------- Quiz 2
  answerTwo.on("click", function()
  {
    $.getJSON("data/data.json", function(data, status)
    {
      console.log("Response status: " + status);
      answerBox.text
      (
        data["answers"][1]["content"]
      )
    }).fail(function(jqxhr, status, error){
      console.log("Code: " + jqxhr.status);
      console.log("Response status: " + status);
      console.log("Error message: " + error);
    })     
  }) 

// --------------- Quiz 3
  answerThree.on("click", function()
  {
    $.getJSON("data/data.json", function(data, status)
    {
      console.log("Response status: " + status);
      answerBox.text
      (
        data["answers"][2]["content"]
      )
    }).fail(function(jqxhr, status, error){
      console.log("Code: " + jqxhr.status);
      console.log("Response status: " + status);
      console.log("Error message: " + error);
    })     
  }) 

// --------------- Quiz 4
  answerFour.on("click", function()
  {
    $.getJSON("data/data.json", function(data, status)
    {
      console.log("Response status: " + status);
      answerBox.text
      (
        data["answers"][3]["content"]
      )
    }).fail(function(jqxhr, status, error){
      console.log("Code: " + jqxhr.status);
      console.log("Response status: " + status);
      console.log("Error message: " + error);
    })    
  }) 
  
// --------------- Quiz 5
  answerFive.on("click", function()
  {
    $.getJSON("data/data.json", function(data, status)
    {
      console.log("Response status: " + status);
      answerBox.text
      (
        data["answers"][4]["content"]
      )
    }).fail(function(jqxhr, status, error){
      console.log("Code: " + jqxhr.status);
      console.log("Response status: " + status);
      console.log("Error message: " + error);
    })   
  })
}
