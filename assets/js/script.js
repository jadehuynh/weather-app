$('#root');

var apiUrl= 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
var apiKey= '44c239f287406de19fc1d0b60b5fc89b'
//var apiCoordinate="http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}"



var lat=""
var lon=""



var zipCode = $('#searchCityInput')
var countryCode = "840"
var convertZip = 'http://api.openweathermap.org/geo/1.0/zip?zip='+ zipCode + countryCode + '&appid=' + apiKey;

var apiUrl = 'https://api.github.com/users/' + user + '/repos';

