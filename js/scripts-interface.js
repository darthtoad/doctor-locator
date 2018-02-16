$(document).ready(function(){
  $("#by-issue").submit(function(event){
    event.preventDefault();
    let issue = $("#issue").val();
  })
  $("#by-name").submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
  })
})
