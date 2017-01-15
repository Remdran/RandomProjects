var icons = {   
    "sunny" : "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png",
    "sunCloud" : "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-Period-icon.png",
    "cloud" : "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Overcast-icon.png",
    "rain" : "http://icons.iconarchive.com/icons/custom-icon-design/weather/128/light-rain-icon.png",
    "heavyRain" : "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/rain-icon.png",
    "snow" : "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/snow-icon.png",
    "thunder" : "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/thunder-icon.png",
    "windy" : "http://icons.iconarchive.com/icons/iconsmind/outline/256/Windy-icon.png"
}

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
                console.log(data);
                $( '#location' ).html(data.query.results.channel.location.city + "<br>" + data.query.results.channel.location.country);
                // Store the weather condition in a variable and pass it to a function to set the icon
                var weather = data.query.results.channel.item.condition.text;
                setupIcon(weather);                
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

function setupIcon(weather) {
    console.log(weather);

    if (weather.includes("Sun")) {
         $( '#icon' ).attr("src", icons.sunny);        
    } else if (weather.includes("Breezy") || weather.includes("Wind")) {
         $( '#icon' ).attr("src", icons.windy);
    } else if (weather.includes("Cloud")) {
        $( '#icon' ).attr("src", icons.cloud);
    } else if (weather.includes("Rain") || weather.includes("Shower")) {
        $( '#icon' ).attr("src", icons.heavyRain);
    } else if (weather.includes("Snow")) {
        $( '#icon' ).attr("src", icons.snow);
    } else {
         $( '#icon' ).attr("src", icons.sunny);
    }
}




