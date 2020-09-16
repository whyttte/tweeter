$(document).ready(function() {
  $("#tweet-text").on("keyup", function() {
    let typedCharacters = $(this).val().length;
    let unsedCharacters = 140 - typedCharacters;
    console.log(typedCharacters)
    let newCounter = document.querySelector(".counter")
    if (unsedCharacters < 0) {
      newCounter.style.color = "red";
      newCounter = $(".counter").text(unsedCharacters)
    } else {
      newCounter.style.color = "black";
      newCounter = $(".counter").text(unsedCharacters)
    } 
  })
});
