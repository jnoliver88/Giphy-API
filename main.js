$(document).ready(function () {
  //global variables
  
    var $input = $("#input");
    var $submit = $("#submit");
    var apiKey = "732d7ABPHuutFsK36cbF1TyOrSrGa3OO";
    var $imgBody = $('.img-body');

    //get input value when the user press submit//
$submit.on("click", function (event) {
    event.preventDefault();
    $imgBody.empty();
    var inputVal = $input.val();
    getGiphys(inputVal);
    $input.val(" ");
});


//make a get request  to the giphy api//
function getGiphys(inputVal) {
    $.get('http://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key=' + apiKey + '&limit=5')
        .done(function (data) {
            for (var i = 0; i <= 5; i++) {
                var gifImg = (data.data[i].images.downsized.url);
                createBox(gifImg);
            }

        });
};

function createBox(gifImg) {
    var $newImg = $('<img>');
    $newImg.attr('src', gifImg);
    $newImg.addClass('img-box');

    $imgBody.append($newImg);
  
}


});