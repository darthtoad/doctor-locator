const apiKey = require('./../.env').apiKey;

export class Search {
  constructor(type, text, sort, limit) {
    this.type = type;
    this.text = text;
    this.sort = sort;
    this.limit = limit;
  }

  search(location) {
    let latitiude;
    let longitude;
    location.then(function(response){
      let body = JSON.parse(response);
      console.log(body);
    })



    //
    // function superPrecision(value) {
    //   if (Math.abs(value) < 10) {
    //     return Number.value.toPrecision(4);
    //   } else if (Math.abs(value) < 100) {
    //     return Number.value.toPrecision(5);
    //   } else {
    //     return Number.value.toPrecision(6);
    //   }
    // }
    //


    // currentLongitude = superPrecision(currentLongitude);
    //
    // currentLatitude = superPrecision(currentLatitude);

    let text = this.text;
    let limit = this.limit;
    let sort = this.sort;
    if (this.type === "name") {
      let request = new XMLHttpRequest();

      let name = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();

        let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${text}&location=45.555%2C-122.682%2C20&user_location=45.555%2C-122.682&sort=best-match-asc&skip=0&limit=${limit}&user_key=${apiKey}`;
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
      let request = new XMLHttpRequest();

      let issue = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${text}&location=45.555%2C-122.682%2C20&user_location=45.555%2C-122.682&sort=${sort}&limit=${limit}&user_key=${apiKey}`;
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
