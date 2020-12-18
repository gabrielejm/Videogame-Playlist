$(document).ready(()=>{
    const addRating = $("")
    const addHoursPlayed = $("")
    const addType = $("")
    const updateGame = $("button.updateBtn");
    const user = localStorage.getItem("user")

    renderList = () => {
        $.get(`/api/user_data/${user}`)
        .then(data => {
            for (let i = 0; i < data.length; i++){
                let gamesList = $("#example")
                let title = $("<h1>")
                let status = $("<h2>")


                title.text(data[i].title)
                status.text(data[i].status)

                gamesList.append(title)
                gamesList.append(status)
            }
        })
    }

    renderList() 

    updateGame.click(() => {
        var status = $("input.gameStatus").val();
        console.log(status);
        $.put("/api/game")
    });
})