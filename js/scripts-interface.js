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
        $("#result").append(body.data[i].practices[j].name);
        $("#result").append(body.data[i].practices[j].accepts_new_patients);
        $("#result").append(body.data[i].practices[j].visit_address.city);
        $("#result").append(body.data[i].practices[j].visit_address.state);
        $("#result").append(body.data[i].practices[j].visit_address.street);
        $("#result").append(body.data[i].practices[j].visit_address.zip);
        $("#result").append(body.data[i].practices[j].website);
        body.data[i].practices[0].phones.forEach(function(phone){
          $("#result").append(phone.number + " " + phone.type);
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
  // $("#by-name").submit(function(event){
  //   event.preventDefault();
  //   let name = $("#name").val();
  // })
  let search = new Search("name", "Christina Peterson", "best-match", 10);
  search.parseDataForName(search.search());
})
