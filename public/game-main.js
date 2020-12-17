//references to HTML elements
$(document).ready(function(){
    $("#run-search").on("click", function(event) {
        event.preventDefault();
    

let city = $("#search-input").val();
    
        getDescription(game);
    });

    $(".history").on("click", "li", function() {
        getDescription($(this).text());
      }); 

      function makeRow(text) {
       
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
         $(".history").append(li)
         }
         var history = JSON.parse(window.localStorage.getItem("history")) || [];
         if (history.length > 0) {
           getDescription(history[history.length-1]);
         }
         for (var i = 0; i < history.length; i++) {
           makeRow(history[i]);
         }
       
         function getDescription(game) {
            let APIKey = "830ae949e6554aadae74c234f1e467ee";
            const queryURL = ""

            $.ajax({
                    url: queryURL,
                    method: "GET",
                }).then(function (data) {
                    if (history.indexOf(ci)) {
                        history.push(game)
                        window.localStorage.setItem("history", JSON.stringify(history))
                        makeRow(game)
                    };
                    function getGameRating(game) {
                        let APIKey = "830ae949e6554aadae74c234f1e467ee";
                        let queryUrl = "" + city + "&appid=" + APIKey + "&units=imperial";
                        $.ajax({
            
                        method: "GET",
                        url: queryUrl
            
                        }).then( function(data){