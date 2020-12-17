$(document).ready(function () {
    const searchBtn = $("")
    const addBtn = $("")
    const game = $("")
    const status = $("")
    const user = localStorage.getItem("user")


    $(".input").blur(function () {
        localStorage.setItem("Teams", $(this).val());

        function searchGames() {  
            document.write ("Search Games")  
         }  

        //Divs for description and rating
        const description = $(`   <div id= 'match1'>`)
    })

    addBtn.on("click", () => {
        $.post(`/api/user_data/list/${user}`)
        .then(() => {
            alert(`${game} added to List`)
        })
    })
})

