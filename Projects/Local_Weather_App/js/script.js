// Different picture based on the time of the day?
// API KEY - 1f022c54d758d80c768cd441c80c555e

// Sunny
//http://fullhdwall.com/wp-content/uploads/2016/04/Landscape-Sunny-Day.jpg

// Cloudy
// http://74211.com/wallpaper/picture_big/Images-of-Nature-Landscape-the-Cloudy-Sky-Sunlight-Breaking-Through-the-Power-of-Nature.jpg

//Raining
// http://www.wallpaperawesome.com/wallpapers-awesome/wallpapers-weather-clouds-tornado-rain-cyclone-flashlights-awesome/wallpaper-drops-of-rain-from-sky-weather.jpg


var long = '';
var lat = '';

getLoc();

function getLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $('#data').html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });
    }
}


$('#getWeather').click(function() {
        var json = $.ajax({
        url: 'https://simple-weather.p.mashape.com/weatherdata?lat=' + lat + '&lng=' + long, // URL to the weather app api
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function (data) {
            console.log(data.query.results.channel.wind);  // Access the returned data and log the wind information
            //document.getElementById("quote").innerHTML = "<p>" + data.quote + "<p>Author: " + data.author;
        },
        error: function (err) { alert(err); },
        beforeSend: function (xhr) {
           xhr.setRequestHeader("X-Mashape-Key", "lQqIjlKOIRmsh8s1ehmTtJxsj1wjp1S0LmEjsncrFJbFA1tEOW"); 
        }
    });
})

