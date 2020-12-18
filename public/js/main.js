$(document).ready(() => {
    const searchBtn = $("#run-search")
    const addBtn = $("")
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
        const game = $("#search-game").val().split(" ").join("-")
        let APIKey = "830ae949e6554aadae74c234f1e467ee";
        let queryUrl = `https://api.rawg.io/api/games?key=${APIKey}&search=${game}`;
        
        $.ajax({
        method: "GET",
        url: queryUrl
        }).then( function(data){
            console.log("game: ", game)
            console.log("data: ", data.results[0].name)
            for (let i = 0; i < 5; i++){
                let title = data.results[i].name
                let released = data.results[i].released
                let rating = `${data.results[i].rating} / 5`
            }         
        })
    })
})
