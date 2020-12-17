$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    let id = data.id
    $(".member-name").text(data.email);
    localStorage.setItem("user", id)
  });
});
