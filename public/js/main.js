$(document).ready(function () {
    let user = localStorage.getItem("user")

    console.log(user)

    $(".input").blur(function () {
        localStorage.setItem("Teams", $(this).val());

        function searchGames() {  
            document.write ("Search Games")  
         }  

        //Divs for description and rating
        const description = $(`   <div id= 'match1'>`)})
})

