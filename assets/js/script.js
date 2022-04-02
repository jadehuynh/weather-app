$('#root');

var apiUrl= 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
var apiKey= '44c239f287406de19fc1d0b60b5fc89b'
//var apiCoordinate="http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}"



var lat=""
var lon=""

var zipCode = $('#searchCityInput').val("");
var countryCode = "US"
var convertZip = 'https://api.openweathermap.org/geo/1.0/zip?zip='+ zipCode + ","+ countryCode + '&appid=' + apiKey;

//console.log(convertZip);




function test (convertZip) { 
    var obj = jQuery.parseJSON(convertZip);

}

test();
console.log(obj)

// fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayRepos(data.items, language);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   });