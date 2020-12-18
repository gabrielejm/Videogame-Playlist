$(document).ready(()=>{
    const addRating = $("")
    const addHoursPlayed = $("")
    const addType = $("")
    const updateGame = $("")
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
})