$('#root');
var apiKey= '44c239f287406de19fc1d0b60b5fc89b'
var apiCitySearch= 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + "," + stateCode + "," + countryCode + '&limit=' + limit + '&appid=' + apiKey;
var stateCode= 'US-CA'
var cityName= 'west hills'
var limit= '5'
console.log(apiCitySearch)

var countryCode = "US"
var zipCode = $('#searchCityInput').val("");
var convertZip = 'https://api.openweathermap.org/geo/1.0/zip?zip=' + zipCode + ","+ countryCode + '&appid=' + apiKey;
//select lat and lon values
    //splice out "lat": "lat":44.2945 and "lon": in "lon":-93.2818
        //the code for splicing to retrieve numeric values will go into lat and lon variables




function getCoordinates () { 
    var retrieve = jQuery.parseJSON(convertZip);
    retrieve.val()
}

var lat='44.2945'
var lon='-93.2818'
var apiUrl= 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lon + '&appid=' + apiKey;
//function to take the corrdinates from the convert zipcode api to 
