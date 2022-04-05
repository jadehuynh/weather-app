var apiKey= '44c239f287406de19fc1d0b60b5fc89b'
//***tried to practice breaking down the api and seeing what values to make into variables to concatenate
    // var apiCitySearch= 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + "," + stateCode + "," + countryCode + '&limit=' + limit + '&appid=' + apiKey;
var card1 = document.getElementById('card-body1')
var searchInput= document.getElementById('searchCityInput')
var searchButton= document.getElementById('search-btn')
var searchList= document.getElementById('searchHistory')
var card2= document.getElementById('card2')

let searchMistory = [];
searchButton.addEventListener('click', function(event) {
    card1.innerHTML="";
    event.preventDefault()
    getCoordinates(searchInput.value)
    
    //for (var i = 0; i < searchMistory.length; i++) {
    var butto = document.createElement("button")
    butto.textContent= searchInput.value
    

    searchList.append(butto)
    
    butto.addEventListener('click', function (event) {
        card1.innerHTML="";
        event.preventDefault()
        getCoordinates(butto.textContent)
        console.log(butto.textContent)
        displayCityName(butto.textContent)
    })

    searchMistory.push(searchInput.value)
    //write setItem here
        for (var i = 0; i < searchMistory.length; i++) {
            localStorage.setItem("cities",searchMistory)
        }
    // listedCities.textContent.value = "";
    // listedCities.push(searchMistory);
    console.log(searchMistory)
    displayCityName(searchInput.value)

    for (var i = 0; i < searchMistory.length; i++) {
        localStorage.getItem("cities")
        //console.log(localStorage.getItem("cities"))
    }
    displayDate()
    })
    function displayDate () {
        var showDate = document.createElement("h1")
        var currentDate = moment().format("MMMM Do YYYY");
        //var date= card1.current[0].dt
        //date.textContent- 
        //var reformatDate= moment(date, "X").format(1)
        card1.appendChild(showDate)
        showDate.textContent= currentDate
        //console.log(currentDate)
    }
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
    var rest = "&units=imperial&appid="

    fetch(getForecastUrl + getLat + getLon + rest + apiKey)
    .then(function(response){
        response.json()
        .then(function(data) {
        
        
            console.log(data)
        
            displayForecastData(data)

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
    var rest = "&units=imperial&limit=1&appid="

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
    // var presentDate = document.createElement("h3")
    // var currentDate = moment().format("MMMM Do YY");
    // card1.textContent= currentDate
    //console.log(currentDate)






function displayCurrentData (data) {
    var imageIcon= document.createElement("img")
    var getIcon= `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

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
    imageIcon.setAttribute("src",getIcon)
    card1.appendChild(imageIcon)

    console.log(getIcon)
    //imageIcon.textContent="src=' "
    // container.appendChild(getIcon)
    // card2.appendChild(container)
    console.log(data.current.weather[0].icon);
    console.log(getIcon)
}
function forecast (lon, lat) {
    var getForecastUrl = 'https://api.openweathermap.org/data/2.5/onecall?'
    var getLat = "lat=" + lat
    var getLon = "&lon=" + lon
    var rest = "&units=imperial&appid="

    fetch(getForecastUrl + getLat + getLon + rest + apiKey)
    .then(function(response){
        response.json()
        .then(function(data) {
        
        
            console.log(data)
        
            displayForecastData(data)

        })
    })
}
function displayForecastData (data) {
    console.log(data.daily)
    card2.innerHTML="";
    for (var i = 1; i < 6; i++) {
        // var dateShow= document.createElement("h5")
        // dateShow.innerHTML= display5dDate()
        // card2.appendChild(container)
        // function renderDate(date) {
        // let dt= data.daily[i].dt
        // var presentDate= new date(dt*1000)
        // var showMeTheDate= presentDate.toLocaleDateString("en-US")
        // console.log(showMeTheDate)

        // console.log(dt)
        // console.log(forecastDate)
        // }
        var imageIcon= document.createElement("img")
        var getIcon= `https://openweathermap.org/img/wn/${data.daily[i].weather.icon}@2x.png`;
        imageIcon.setAttribute("src",getIcon)
        card2.appendChild(imageIcon)

        var container= document.createElement("div")
        container.classList.add("card-body2")
        container.classList.add("col-2")
        container.setAttribute("id","forecastBody2")
        var temp= document.createElement("h5")
        temp.textContent="Temp: " + data.daily[i].temp.day
        container.appendChild(temp)
        card2.appendChild(container)
        var wind= document.createElement("h5")
        wind.textContent="Wind Speed: " + data.daily[i].wind_speed
        container.appendChild(wind)
        card2.appendChild(container)
        var humidity= document.createElement("h5")
        humidity.textContent="Humidity: " + data.daily[i].humidity
        container.appendChild(humidity)
        card2.appendChild(container)


       
        // //var imageIcon= document.createElement("img")
        // var getIcon= `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
        // //imageIcon.textContent="src=' "
        // container.appendChild(getIcon)
        // card2.appendChild(container)
        // console.log(data.daily[i].weather[0].icon);
        // console.log(getIcon)
    }
}

// function display5dDate () {
//     var showDate = document.createElement("h1")
//     var currentDate = moment().format("MMMM Do YYYY");
//     //var date= card1.current[0].dt
//     //date.textContent- 
//     //var reformatDate= moment(date, "X").format(1)
//     card1.appendChild(showDate)
//     showDate.textContent= currentDate
//     //console.log(currentDate)
// }

// function displayDate () {
//     var showDate = document.createElement("h1")
//     var currentDate = moment().format("MMMM Do YYYY");
//     //var date= card1.current[0].dt
//     //date.textContent- 
//     //var reformatDate= moment(date, "X").format(1)
//     card1.appendChild(showDate)
//     showDate.textContent= currentDate
//     console.log(currentDate)  
// }

    