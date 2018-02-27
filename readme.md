# _Doctor Locator_

#### _A program that can locate doctors in the Portland, OR area_

#### By _**Sam Gespass**_

## Description

_This app allows a user to search for doctors in the Portland area by name or by symptoms. It returns a list of doctors with their names, locations, phone numbers, and websites._

## Specs

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| It can return a list of doctors given a name | Larry | List of Doctors Name Larry |
| It can return a list of doctors given a medical issue | Cough | List of Doctors Who Treat Respiratory Illness |
| It can return the name of each doctor | Larry | "Dr. Larry Cohen" |
| It can return the address(es) of each doctor | Cough | "824 N Pacific Ave, Portland, OR" |
| It can return the phone number(s) of each doctor | Larry | "Landline: 555 555-5555 Fax: 123 456-7890" |
| It can say whether or not a doctor is taking new patients | Larry | "Taking new patients: True" |

## Future Features

* Search by location
* Return specialization
* Search by specialization
* List recently viewed
* List related doctors

## Setup/Installation Requirements

* Click on the following [link](https://github.com/darthtoad/doctor-locator) to download the Doctor Locator
* Go to the directory you downloaded the Doctor Locator to in the terminal
* Get a developer account and create an API key at [link](https://developer.betterdoctor.com/)
* Create an .env file at the top level of the project directory. In your file, write: exports.apiKey = "YOUR API KEY"; (e.g, exports.apiKey = "d44joSoI4if23jPWa34foji34f439g0Sbf9i034";)
* Run npm install in the terminal
* Run bower install in the terminal
* Run gulp build in the terminal
* Finally, run gulp serve in the terminal. A browser window should open in localhost:3000.

## Known Bugs

_Occasionally the API returns a 429 (Too Many Requests) response. This is likely due to the nature of the BetterDoctor API and not a bug in the program, but if you believe it is, please [message](mailto:darth.toad@gmail.com) me. Also, I'm having trouble getting error messages to show._

## Technologies Used

* _Javascript_
* _CSS_
* _HTML_
* _Atom_
* _Gulp_
* _Bower_
* _Git_
* _GitHub_

### License

Copyright (c) 2017 ****_Sam Gespass_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
