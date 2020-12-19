$(document).ready(() => {
  const searchBtn = $("#run-search");
  const addBtn = $("");
  const user = localStorage.getItem("user");
  let currentGame;

  addBtn.on("click", () => {
    console.log("Button clicked");
    $.post(`/api/user_data/list/${user}`).then(() => {
      alert(`${game} added to List`);
    });
  });

  searchBtn.on("click", function(event) {
    event.preventDefault();
    $("#game-title").empty();
    $("#game-img").empty();
    $("#game-status").empty();
    $("#game-rating").empty();
    //get value of the input box when you click run search
    const game = $("#search-game")
      .val()
      .split(" ")
      .join("-");
    let APIKey = "830ae949e6554aadae74c234f1e467ee";
    let queryUrl = `https://api.rawg.io/api/games?key=${APIKey}&search=${game}`;

    $.ajax({
      method: "GET",
      url: queryUrl,
    }).then(function(data) {
      let title = data.results[0].name;
      // let release = data.results[0].released;
      let rating = `${data.results[0].rating} / 5`;
      let imageURL = data.results[0].background_image;
      let image = $("<img>").attr("src", imageURL);
      let statusDropDown = $("<select>");
      let playing = $("<option>").text("Currently Playing");
      let completed = $("<option>").text("Completed");
      let wantToPlay = $("<option>").text("Want to Play");

      statusDropDown.append(playing);
      statusDropDown.append(completed);
      statusDropDown.append(wantToPlay);

      $("#game-title").text(title);
      $("#game-img").append(image);
      $("#game-status").text("Play Status: ");
      $("#game-status").append(statusDropDown);
      $("#game-rating").text(`Global Rating: ${rating}`);
    });
  });
});
