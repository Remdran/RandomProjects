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
                // Store the weather condition in a variable and pass it to a function to set the icon
                console.log(data);
                $( '#location' ).html(data.query.results.channel.location.city + "<br>" + data.query.results.channel.location.country);
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
    switch(weather) {
        case "Sun":
            $( '#icon' ).attr("src", icons.sunny);
            break;
        case "Breezy":
        case "Windy":
            $( '#icon' ).attr("src", icons.windy);
            break;
        case "cloud":
            $( '#icon' ).attr("src", icons.cloud);
            break;
        case "rain":
            $( '#icon' ).attr("src", icons.heavyRain);
            break;
        case "snow":
            $( '#icon' ).attr("src", icons.snow);
            break;
        case "thunder" :
            $( '#icon' ).attr("src", icons.thunder);
            break;
        default: 
            $( '#icon' ).attr("src", icons.sunny);
    }
}




