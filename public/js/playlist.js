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
                let gamesList = $(".table-body")
                let input = $("<input>")
                //Appending Row variables
                let newRow = $("<tr>")
                let title = $("<td>")
                let status = $("<td>")
                let type = $("<td>")
                let hours = $("<td>")
                let ratings = $("<td>")
                let buttons = $("<td>")
                let deleteBtn = $("<button>").text("Delete")
                let updateBtn = $("<button>").text("Update")

                input.val(data[i].title)
                
                title.text(data[i].title)
                status.text(data[i].status)
                type.text(data[i].type)
                // hours.text(data[i].hoursPlayed)
                hours.append(input)
                hours.append("hours")
                ratings.text(data[i].rating)
                buttons.append(updateBtn)
                buttons.append(deleteBtn)

                //Appends Game Data to Row
                newRow.append(title)
                newRow.append(status)
                newRow.append(type)
                newRow.append(hours)
                newRow.append(ratings)
                newRow.append(buttons)

                //Appends Row to Page
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