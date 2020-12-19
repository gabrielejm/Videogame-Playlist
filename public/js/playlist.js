const gamesList = $(".table-body");
const pickListBtn = $(".drop");
const user = localStorage.getItem("user");

$.delete = function(url, data, callback, type){
 
    if ( $.isFunction(data) ){
      type = type || callback,
          callback = data,
          data = {}
    }
   
    return $.ajax({
      url: url,
      type: 'DELETE',
      success: callback,
      data: data,
      contentType: type
    });
}

$.put = function(url, data, callback, type){
 
    if ( $.isFunction(data) ){
      type = type || callback,
      callback = data,
      data = {}
    }
   
    return $.ajax({
      url: url,
      type: 'PUT',
      success: callback,
      data: data,
      contentType: type
    });
}



//update and delete function
const do_thing = function(thing) {
    let whatToChange = thing.split("-")[0]
    let id = thing.split("-")[1]
    console.log(whatToChange);
    console.log(id)
    if (whatToChange === "delete"){
        $.delete(`/api/user_data/list/${id}`).then(()=>{
            console.log("it worked")
            gamesList.empty()
            renderList()
        })
    }
};

const update = (thing) => {
    let whatToChange = thing.split("-")[0]
    let id = thing.split("-")[1]
    console.log(whatToChange);
    console.log(id)
        $.post(`/api/game/${id}`).then(()=>{
            gamesList.empty()
            renderList()
        })
}

const renderList = () => {
  $.get(`/api/user_data/${user}`).then((data) => {
    renderTable(data);
  });
};

const renderSpecified = () => {
  let currentStatus = pickListBtn.val();
  gamesList.empty();
  if (currentStatus === "All") {
    renderList();
  } else {
    $.get(`/api/user_data/${user}/${currentStatus}`).then((data) => {
      renderTable(data);
    });
  }
};

const renderTable = (data) => {
  for (let i = 0; i < data.length; i++) {
    //Appending Row variables
    let newRow = $("<tr>")
    let title = $("<td>");
    let status = $("<td>");
    let type = $("<td>");
    let hours = $("<td>");
    let ratings = $("<td>");
    let buttons = $("<td>");
    //Sub Row Variables
    let statusDropDown = $("<select>").attr("id", `status-${data[i].id}`).attr("onchange", `update("status-${data[i].id}")`);
    let playing = $("<option>").text("Currently Playing");
    let completed = $("<option>").text("Completed");
    let wantToPlay = $("<option>").text("Want to Play");

    let typeDropDown = $("<select>").attr("id", `type-${data[i].id}`).attr("onchange", `do_thing("type-${data[i].id}")`);
    let singlePlayer = $("<option>").text("Single Player");
    let multiPlayer = $("<option>").text("Multiplayer");

    let ratingInput = $("<input>").attr("id", `rating-${data[i].id}`).css({ width: "25px" }).attr("onchange", `do_thing("rating-${data[i].id}")`);
    let hoursInput = $("<input>").attr("id", `hoursPlayed-${data[i].id}`).css({ width: "25px" }).attr("onchange", `do_thing("hoursPlayed-${data[i].id}")`);
    let deleteBtn = $("<button>").text("Delete").attr("id", `delete-${data[i].id}`).attr("onclick", `do_thing("delete-${data[i].id}")`)

    //Add title
    title.text(data[i].title);

    //Add status
    if (data[i].status === "Currently Playing") {
      statusDropDown.append(playing);
      statusDropDown.append(completed);
      statusDropDown.append(wantToPlay);
    } else if (data[i].status === "Completed") {
      statusDropDown.append(completed);
      statusDropDown.append(playing);
      statusDropDown.append(wantToPlay);
    } else {
      statusDropDown.append(wantToPlay);
      statusDropDown.append(completed);
      statusDropDown.append(playing);
    }
    status.append(statusDropDown);

    //Add type
    if (data[i].type === "Multiplayer") {
      typeDropDown.append(multiPlayer);
      typeDropDown.append(singlePlayer);
    } else {
      typeDropDown.append(singlePlayer);
      typeDropDown.append(multiPlayer);
    }
    type.append(typeDropDown);

    //Add Hours Played
    hoursInput.val(data[i].hoursPlayed);
    hours.append(hoursInput);
    hours.append(" hours");

    //Add User Rating
    ratingInput.val(data[i].rating);
    ratings.append(ratingInput);
    ratings.append("/5");

    //Add Buttons to Row
    buttons.append(deleteBtn);

    //Appends Game Data to Row
    newRow.append(title);
    newRow.append(status);
    newRow.append(type);
    newRow.append(hours);
    newRow.append(ratings);
    newRow.append(buttons);

    //Appends Row to Page
    gamesList.append(newRow);
  }
};

pickListBtn.on("change", () => renderSpecified());
renderList();
