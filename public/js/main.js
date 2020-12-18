$(document).ready(() => {
    const searchBtn = $("#run-search")
    const addBtn = $("")
    const game = $("#game-search").val()
    const user = localStorage.getItem("user")

    addBtn.on("click", () => {
        console.log("Button clicked")
        $.post(`/api/user_data/list/${user}`)
        .then(() => {
            alert(`${game} added to List`)
        })
    })

    searchBtn.on("click", function(event) {
        event.preventDefault();
        //get value of the input box when you click run search
        let APIKey = "830ae949e6554aadae74c234f1e467ee";
        let queryUrl = `https://api.rawg.io/api/games?key=${APIKey}&search=${game}`;
        
        $.ajax({
        method: "GET",
        url: queryUrl
        }).then( function(data){
            console.log("game: ", game)
            console.log("data: ", data)         
        })
    })
})
