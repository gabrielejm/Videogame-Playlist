const addRating = $("");
const addHoursPlayed = $("");
const addType = $("");
const updateGame = $("");
const designatedList = $("");
let gamesList = $(".table-body");
const pickListBtn = $(".drop");
const user = localStorage.getItem("user");

//update and delete function
const do_thing = () => {
  console.log("hello world");
};

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
    let newRow = $("<tr>");
    let title = $("<td>");
    let status = $("<td>");
    let type = $("<td>");
    let hours = $("<td>");
    let ratings = $("<td>");
    let buttons = $("<td>");
    //Sub Row Variables
    let statusDropDown = $("<select>")
      .attr("id", `status-${data[i].id}`)
      .attr("onclick", `do_thing()`);
    let playing = $("<option>").text("Currently Playing");
    let completed = $("<option>").text("Completed");
    let wantToPlay = $("<option>").text("Want to Play");

    let typeDropDown = $("<select>").attr("id", `type-${data[i].id}`);
    let singlePlayer = $("<option>").text("Single Player");
    let multiPlayer = $("<option>").text("Multiplayer");

    let ratingInput = $("<input>")
      .attr("id", `rating-${data[i].id}`)
      .css({ width: "25px" });
    let hoursInput = $("<input>")
      .attr("id", `hours-${data[i].id}`)
      .css({ width: "25px" });
    let deleteBtn = $("<button>")
      .text("Delete")
      .attr("id", `Delete-${data[i].id}`);
    let updateBtn = $("<button>")
      .text("Update")
      .attr("id", `Update-${data[i].id}`)
      .attr("onclick", `do_thing()`);

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
    buttons.append(updateBtn);
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
