var icons = {
    "sunny": "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png",
    "sunCloud": "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-Period-icon.png",
    "cloud": "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Overcast-icon.png",
    "rain": "http://icons.iconarchive.com/icons/custom-icon-design/weather/128/light-rain-icon.png",
    "heavyRain": "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/rain-icon.png",
    "snow": "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/snow-icon.png",
    "thunder": "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/thunder-icon.png",
    "windy": "http://icons.iconarchive.com/icons/iconsmind/outline/256/Windy-icon.png"
}
var showingCel = true;
var fahr;
var temp;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var long = position.coords.longitude;
        var lat = position.coords.latitude;

        var json = $.ajax({
            url: 'https://simple-weather.p.mashape.com/weatherdata?lat=' + lat + '&lng=' + long, // URL to the weather app api inc. users long and lat
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                $('#location').html(data.query.results.channel.location.city + ", " + data.query.results.channel.location.region);
                // Store the weather condition in a variable and pass it to a function to set the icon
                var weatherIcon = data.query.results.channel.item.condition.text;
                setupWeather(weatherIcon);
                var temperature = data.query.results.channel.item.condition.temp;
                setupTemp(temperature);
            },
            error: function (err) { alert(err); },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Key", "lQqIjlKOIRmsh8s1ehmTtJxsj1wjp1S0LmEjsncrFJbFA1tEOW");
            }
        });
    });
}
else {

}

function setupWeather(weather) {
    //console.log(weather);

    if (weather.includes("Sun")) {
        $(' #icon ').attr("src", icons.sunny);
        $( '#weatherInfo').html(weather);
    } else if (weather.includes("Breezy") || weather.includes("Wind")) {
        $(' #icon ').attr("src", icons.windy);
        $( '#weatherInfo').html(weather);
    } else if (weather.includes("Cloud")) {
        $(' #icon ').attr("src", icons.cloud);
        $( '#weatherInfo').html(weather);
    } else if (weather.includes("Rain") || weather.includes("Shower")) {
        $(' #icon ').attr("src", icons.heavyRain);
        $( '#weatherInfo').html(weather);
    } else if (weather.includes("Snow")) {
        $(' #icon ').attr("src", icons.snow);
        $( '#weatherInfo').html(weather);
    } else {
        $(' #icon ').attr("src", icons.sunny);
        $( '#weatherInfo').html(weather);
    }
}

function setupTemp(temper) {
    //console.log(temper);
    temp = temper;
    $( '#temp' ).html(temp);
    fahr = (temp * 9 / 5) + 32;
}

$( '.deg' ).click(function() {
    if(showingCel === true) {
        $( '#temp' ).html(fahr);
        $( '.deg' ).html("&#8457;");
        showingCel = false;
    } else {
        $( '#temp' ).html(temp);
        $( '.deg' ).html("&#8451;");
        showingCel = true;
    }    
});
