var apiKey= '44c239f287406de19fc1d0b60b5fc89b'
//***tried to practice breaking down the api and seeing what values to make into variables to concatenate
    // var apiCitySearch= 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + "," + stateCode + "," + countryCode + '&limit=' + limit + '&appid=' + apiKey;
var card1 = document.getElementById('card-body1')
var searchInput= document.getElementById('searchCityInput')
var searchButton= document.getElementById('search-btn')
var searchList= document.getElementById('searchHistory')



searchButton.addEventListener('click', function(event) {
    card1.innerHTML="";
    event.preventDefault()
    getCoordinates(searchInput.value)
    
    //for (var i = 0; i < searchMistory.length; i++) {
    var butto = document.createElement("button")
    butto.textContent= searchInput.value
    let searchMistory = [];

    searchList.append(butto)
    listedCities= JSON.stringify(localStorage.getItem(searchInput, searchList));
    
    butto.addEventListener('click', function (event) {
        card1.innerHTML="";
        event.preventDefault()
        getCoordinates(butto.textContent)
        console.log(butto.textContent)
        displayCityName(butto.textContent)
    })

    // listedCities.textContent.value = "";
    // listedCities.push(searchMistory);
    searchMistory.push(searchInput.value)
   

    console.log(searchMistory)
    displayCityName(searchInput.value)
    })


// function renderSearchHistory() {
//     textContent(getCoordinates("atlanta")).display
//     searchList.append(renderWeather).textContent= searchHistory

    
//     li.textContent = todo;
//     li.setAttribute("data-index", i);
// }
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
            console.log(data.daily[0].temp.day)
            
            

        })
    })
}
// function displayForecast (data) {
//     var forecastCard = document.getElementById('card-body2')

// }
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
    var getWeatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?'
    var getLat = "lat=" + lat
    var getLon = "&lon=" + lon
    var rest = "&exclude=daily,hourly,minutely,alert&units=imperial&limit=1&appid="

    fetch(getWeatherUrl + getLat + getLon + rest + apiKey)
   .then(function(response){
       response.json()
       .then(function(data) {
           console.log(data)
           displayCurrentData(data)
       })
   })
}



function displayCityName(name) {
    var searchedCity = document.createElement("h1")
    searchedCity.textContent = name

    card1.appendChild(searchedCity)
}
function displayCurrentData (data) {
    var currentTemp= document.createElement("h3")
    currentTemp.textContent= "Temp: " + data.current.temp
    card1.appendChild(currentTemp)
    var currentWind= document.createElement("h3")
    currentWind.textContent= "Wind Speed: " + data.current.wind_speed
    card1.appendChild(currentWind)
    var currentHumidity= document.createElement("h3")
    currentHumidity.textContent= "Humidity: " + data.current.humidity
    card1.appendChild(currentHumidity)
    var uvIndex= document.createElement("h3")
    uvIndex.textContent="UV Index: " + data.current.uvi
    card1.appendChild(uvIndex)
}
//getCoordinates("")
//function to take the corrdinates from the convert zipcode api to
