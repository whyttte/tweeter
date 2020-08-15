$(document).ready(() => {


  const createTweetElement = function (tweetObject) {
    const $tweet = `<article class="tweet">
    <div class="tweet-header">
      <div>
        <img src=${tweetObject.user.avatars}>
        <h2>${tweetObject.user.name}</h2>
      </div>
        <span>${tweetObject.user.handle}</span>
    </div>
    <div class="the-body">
      <p>${tweetObject.content.text}</p>
    </div>
    <footer>
      <p>${tweetObject.created_at}</p>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
    </footer>
  </article>
  `;
    return $tweet;
  }


  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const tweetElement = createTweetElement(tweet);
      // Main container for tweets
      $(".tweet-container").prepend(tweetElement);
    }
  };

  
  const loadTweets = function () {
    $.get("/tweets")
    .then((tweets) => {
      renderTweets(tweets)
    });
  };

  
  const formValidation = function () {

    const $tweetedData = $("#tweet-text").val();
    console.log($tweetedData)
    if ($tweetedData.length > 140) {
      $(".container").prepend($("<div>").addClass("tweet-error").text("Too many characters, please limit your text to 140 Characters").fadeIn(200).fadeOut(5000));
      return;
    } else if ($tweetedData.length === 0) {
      $(".container").prepend($("<div>").addClass("tweet-error").text("Please send a valid tweet by typing some words").fadeIn(200).fadeOut(5000));
      return;
    } else {
      return $tweetedData;
    }
  };


  const $form = $(".submit-tweet");
  $form.on("submit", function (event) {
    event.preventDefault();
    const tweet = $(this).serialize();
    if (!formValidation()) {
      $('#counter').text("140");
      $("#compose")[0].reset();
      $('#counter').css({color: "black"});
      return;
    }
    $.post("/tweets", tweet)
    .then((tweet) => {
      loadTweets();
      $('#counter').text("140");
      $("#compose")[0].reset();
    })
  })

  

  

  loadTweets();
  
});

