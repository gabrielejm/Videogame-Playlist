$(document).ready(()=>{
    const addRating = $("")
    const addHoursPlayed = $("")
    const addType = $("")
    const updateGame = $("")
    const designatedList = $("")
    const pickListBtn = $("")
    const user = localStorage.getItem("user")
    
    renderList = () => {
        $.get(`/api/user_data/${user}`)
        .then(data => {
            for (let i = 0; i < data.length; i++){
                console.log(data[i])
                let gamesList = $(".table-body")
                let newRow = $("<tr>")
                let title = $("<td>")
                let status = $("<td>")
                let type = $("<td>")
                let hours = $("<td>")
                let ratings = $("<td>")
                
                
                title.text(data[i].title)
                status.text(data[i].status)
                type.text(data[i].type)
                hours.text(data[i].hoursPlayed)
                ratings.text(data[i].rating)

                newRow.append(title)
                newRow.append(status)
                newRow.append(type)
                newRow.append(hours)
                newRow.append(ratings)

                gamesList.append(newRow)
            }
        })
    }
    
    const renderSpecified = () => {
        
        $.get(`/api/user_data/${user}/`)
        .then(data => {
            for (let i = 0; i < data.length; i++){
                
            }
        })
    }
    
    
    pickListBtn.on("click", renderSpecified)
    renderList() 
})