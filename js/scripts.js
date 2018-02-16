const apiKey = require('./../env').apiKey;

export class Search {
  constructor(type, text, sort, limit) {
    this.type = type;
    this.text = text;
    this.sort = sort;
    this.limit = limit;
  }

  search() {
    if (this.type === "issue") {
      let request = new XMLHttpRequest();

      let issue = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=headache&location=45.555%2C-122.683%2C20&user_location=45.555%2C-122.683&sort=best-match-asc&skip=0&limit=10&user_key=${apiKey}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });

      issue.then(function(response) {
        let body = JSON.parse(response);
        // $('#result').append(`${body.word} `);
        return response;
      }, function(error) {
       // $('.showErrors').text(`There was an error processing your request: ${error.message}`);
       return `There was an error processing your request: ${error.message}`;
      });
    } else if (this.type === "name") {
      let request = new XMLHttpRequest();

      let name = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=Joop%20Offerman&location=40.440%2C-79.995%2C20&user_location=40.440%2C-79.995&sort=best-match-asc&skip=0&limit=10&user_key=
      ${apiKey}`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });

      name.then(function(response) {
        let body = JSON.parse(response);
        // $('#result').append(`${body.word} `);
        return response;
      }, function(error) {
       // $('.showErrors').text(`There was an error processing your request: ${error.message}`);
       return `There was an error processing your request: ${error.message}`;
      });
    } else {
      return 'Something has gone horribly wrong!';
    }
  }
}
