const apiKey = require('./../.env').apiKey;

export class Search {
  constructor(type, text, sort, limit, city, state) {
    this.type = type;
    this.text = text;
    this.sort = sort;
    this.limit = limit;
    this.city = city;
    this.state = state;
  }

  search() {
    let text = this.text;
    let limit = this.limit;
    let sort = this.sort;
    let state = this.state;
    let city = this.city.replace(/\s/g, "-");
    if (this.type === "name") {

      let name = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();

        let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${text}&location=${state}-${city}&sort=best-match-asc&skip=0&limit=${limit}&user_key=${apiKey}`;
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
      return name;

    } else if (this.type === "issue") {

      let issue = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${text}&location=${state}-${city}&sort=${sort}&limit=${limit}&user_key=${apiKey}`;
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
      return issue;

    } else {
      return 'Something has gone horribly wrong!';
    }
  }
}
