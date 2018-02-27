import { Search } from "./../js/scripts.js"

Search.prototype.parseDataForIssue = function(issue) {
  issue.then(function(response){
    let body = JSON.parse(response);
    if (body.data.length === 0) {
      $("#result").append("Your search didn't yield any results. Try to rephrase your search.")
    } else {
      for (let i = 0; i < body.data.length; i++) {
        let profile = body.data[i].profile;
        $("#result").append(`<hr><h3>Name: ${profile.first_name} ${profile.last_name}</h3>`)
        for (let j = 0; j < body.data[i].practices.length; j++) {
          $("#result").append(`<br><h5>Practice: ${body.data[i].practices[j].name}</h5><br>Accepting new patients: ${body.data[i].practices[j].accepts_new_patients}<br>${body.data[i].practices[j].visit_address.street}<br>${body.data[i].practices[j].visit_address.city}, ${body.data[i].practices[j].visit_address.state} ${body.data[i].practices[j].visit_address.zip}<br>`);
          if (body.data[i].practices[j].website) {
            $("#result").append(`Website: <a href="${body.data[i].practices[j].website}">Click Here</a><br>`);
          }
          body.data[i].practices[j].phones.forEach(function(phone){
            $("#result").append(`${phone.type}: ${phone.number}<br>`);
          })
        }
      }
    }}, function(error) {
      $("#result").append(`There was an error processing your request: ${error.message}`);
    }
  );
}

Search.prototype.parseDataForName = function(name) {
  name.then(function(response) {
    let body = JSON.parse(response);
    if (body.data.length === 0) {
      $("#result").append("Your search didn't yield any results. Try to rephrase your search.")
    } else {
      for (let i = 0; i < body.data.length; i++) {
        let profile = body.data[i].profile;
        $("#result").append(`<hr><h3>Name: ${profile.first_name} ${profile.last_name}</h3>`)
        for (let j = 0; j < body.data[i].practices.length; j++) {
          $("#result").append(`<br><h5>Practice: ${body.data[i].practices[j].name}</h5><br>Accepting new patients: ${body.data[i].practices[j].accepts_new_patients}<br>${body.data[i].practices[j].visit_address.street}<br>${body.data[i].practices[j].visit_address.city}, ${body.data[i].practices[j].visit_address.state} ${body.data[i].practices[j].visit_address.zip}<br>`);
          if (body.data[i].practices[j].website) {
            $("#result").append(`Website: <a href="${body.data[i].practices[j].website}">Click Here</a><br>`);
          }
          body.data[i].practices[j].phones.forEach(function(phone){
            $("#result").append(`${phone.type}: ${phone.number}<br>`);
          })
        }
      }
    }}, function(error) {
   $("#result").append(`There was an error processing your request: ${error.message}`);
  });
}

$(document).ready(function(){

  $("#by-name").submit(function(event){
    $("#result").empty();
    event.preventDefault();
    let name = $("#name").val();
    let numberOfResults = parseInt($("#results-name").val());
    let state = $("#state-name").val().toLowerCase();
    let city = $("#city-name").val().toLowerCase();
    let search = new Search("name", name, "best-match", numberOfResults, city, state);
    if ($.isEmptyObject(search)) {
      $("#result").append("Sorry, your search yielded no results. Try rephrasing your request.")
    } else {
      search.parseDataForName(search.search());
    }
  })

  $("#by-issue").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    let issue = $("#issue").val();
    let numberOfResults = parseInt($("#results-issue").val());
    let sortBy = $("#sort-by option:selected").val();
    let state = $("#state-issue").val().toLowerCase();
    let city = $("#city-issue").val().toLowerCase();
    let search = new Search("issue", issue, sortBy, numberOfResults, city, state);
    search.parseDataForIssue(search.search())
  })
})
