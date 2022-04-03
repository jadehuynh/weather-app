var apiKey= '44c239f287406de19fc1d0b60b5fc89b'
//***tried to practice breaking down the api and seeing what values to make into variables to concatenate
    // var apiCitySearch= 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + "," + stateCode + "," + countryCode + '&limit=' + limit + '&appid=' + apiKey;

var searchInput= document.getElementById('searchCityInput')
var searchButton= document.getElementById('search-btn')
var searchList= document.getElementById('searchHistory')
var searchMistory = [];


searchButton.addEventListener('click', function(event) {
    event.preventDefault()
    getCoordinates(searchInput.value)
    
    var listedCities = searchMistory
    var butto = document.createElement("button");

    searchList.append(butto)
    button.textContent =listedCities
    listedCities= JSON.parse(searchInput)


    searchHistory.push(listedCities);
    searchInput.value = "";

    console.log(searchHistory)
    
})

function renderSearchHistory() {
    textContent(getCoordinates("atlanta")).display
    searchList.append(renderWeather).textContent= searchHistory

    
    li.textContent = todo;
    li.setAttribute("data-index", i);
}
//***attempted to try converting zip code into lat and lon values with api provided below
    // var countryCode = "US"
    // var zipCode = $('#searchCityInput').val("");
    // var convertZip = 'https://api.openweathermap.org/geo/1.0/zip?zip=' + zipCode + ","+ countryCode + '&appid=' + apiKey;
        //select lat and lon values
         //splice out "lat": "lat":44.2945 and "lon": in "lon":-93.2818
        //the code for splicing to retrieve numeric values will go into lat and lon variables

function forecast (lon, lat) {
    var getForecastUrl = 'https://api.openweathermap.org/data/2.5/onecall?'
    var getLat = "lat=" + lat
    var getLon = "&lon=" + lon
    var rest = "&exclude=hourly,minutely,current,alert&units=imperial&appid="

    fetch(getForecastUrl + getLat + getLon + rest + apiKey)
    .then(function(response){
        response.json()
        .then(function(data) {
            console.log(data)
        })
    })
}

function getCoordinates (city) { 
   var apiCitySearch = 'https://api.openweathermap.org/geo/1.0/direct?q='
   var rest = "&limit=1&appid="

   fetch(apiCitySearch + city + rest + apiKey)
   .then(function(response){
       response.json()
       .then(function(data) {
           getWeather(data[0].lon,data[0].lat)
           forecast(data[0].lon,data[0].lat)
       })
   })

}

function getWeather(lon, lat) {
    var getWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
    var getLat = "lat=" + lat
    var getLon = "&lon=" + lon
    var rest = "&units=imperial&limit=1&appid="

    fetch(getWeatherUrl + getLat + getLon + rest + apiKey)
   .then(function(response){
       response.json()
       .then(function(data) {
           console.log(data)
       })
   })
}
// var cardText1= document.querySelector('.card-body1')
// var cardText2= document.querySelector('.card-body2')

// cardText1.getWeather().textContent.value
// cardText2.getWeather().textContent.value


// var displayData = function () {
//     if(searchButton.addEventListener('click', function)
//      === true )
    
//     getWeather(data[0].lon,data[0].lat).textContent.value
//     forecast(data[0].lon,data[0].lat).textContent.value
    
//     return;

//     }

// displayData()
// console.log(displayData)

//getCoordinates("")
//function to take the corrdinates from the convert zipcode api to 
