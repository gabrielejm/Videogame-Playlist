$(document).ready(() => {
    const searchBtn = $("")
    const addBtn = $("")
    const game = $("")
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
        console.log("Button clicked")
        $.post(`/api/user_data/list/${user}`)
        .then(() => {
            alert(`${game} added to List`)
        })
    })
})

