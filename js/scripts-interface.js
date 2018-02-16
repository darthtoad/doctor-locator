import { Search } from "./../js/scripts.js"

// Search.prototype.parseDataForIssue = function(response) {
//   response.data.forEach(function(doctor){
//     return null;
//   });
// }

Search.prototype.parseDataForName = function(name) {
  name.then(function(response) {
    // console.log(response);
    let body = JSON.parse(response);
    console.log(body.data);
    console.log(body.data[0].profile.first_name);
    console.log(body.data.length);
    // $('#result').append(`${body.word} `);
    // body.data.forEach(function(doctor){
    for (let i = 0; i < body.data.length; i++) {
      for (let j = 0; j < body.data[i].practices.length; j++) {
        $("#result").append(body.data[i].practices[j].name + '<br>');
        $("#result").append(body.data[i].practices[j].accepts_new_patients + '<br>');
        $("#result").append(body.data[i].practices[j].visit_address.city + '<br>');
        $("#result").append(body.data[i].practices[j].visit_address.state + '<br>');
        $("#result").append(body.data[i].practices[j].visit_address.street + '<br>');
        $("#result").append(body.data[i].practices[j].visit_address.zip + '<br>');
        $("#result").append(body.data[i].practices[j].website + '<br>');
        body.data[i].practices[j].phones.forEach(function(phone){
          $("#result").append(phone.number + ": " + phone.type + '<br>');
        })
      }

    }

    // });
  }, function(error) {
   // $('.showErrors').text(`There was an error processing your request: ${error.message}`);
   return `There was an error processing your request: ${error.message}`;
  });
}

$(document).ready(function(){
  // $("#by-issue").submit(function(event){
  //   event.preventDefault();
  //   let issue = $("#issue").val();
  // })
  $("#by-name").submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
    let numberOfResults = parseInt($("#results-name").val());
    let search = new Search("name", name, "best-match", numberOfResults);
    console.log(search.search());
    search.parseDataForName(search.search());
  })
  // let search = new Search("name", "Christina Peterson", "best-match", 10);
  // search.parseDataForName(search.search());
})
