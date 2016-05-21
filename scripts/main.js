

$(document).ready(function(){
  //$("#button-twitter").hide();
  console.log("doc ready");
  newQuote();
  $("#button-new-quote").click(function(){
    console.log("button-new-quote PUSHED");
    newQuote();
  });
  $("#button-twitter").click(function(){
    console.log("button-twitter PUSHED");
    alert("button does nothing, not finished yet");
  });
});

function newQuote() {
  $.ajax( {
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
        dataType: 'jsonp'
        
  });
}

function mycallback(result) {
    console.log(result);
    $("#quote-text").html(result[0].content);
    $("#quote-title").html("- "+result[0].title);
}