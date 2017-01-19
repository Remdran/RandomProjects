var channels = ['freecodecamp', 'ESL_SC2', 'comster404', 'distortion2'];

for(var i = 0; i < channels.length; i++){
    $.ajax( {
            url: "https://api.twitch.tv/kraken/channels/" + channels[i],
            data: {},
            dataType: 'json',
            type: 'GET',
            headers: {
                'Client-ID': '7md94urznwzl3k47f6yk4ew7qkeoj9'
            },
            success: function(data) {
                console.log(data);
                $( '#results' ).add("<li>Name: " + data.display_name + "<br> Game: " + data.game + "</li>").appendTo($( '#results' ));               
                //checkStreamStatus(channels[i]);
            }
        } );
}


// function checkStreamStatus(i) {
//     $.ajax( {            
//             url: "https://api.twitch.tv/kraken/streams/" + i,
//             data: {},
//             dataType: 'json',
//             type: 'GET',
//             headers: {
//                 'Client-ID': '7md94urznwzl3k47f6yk4ew7qkeoj9'
//             },
//             success: function(data) {
//                 console.log(data);
//             }
//         } );
//         console.log(i);
// }

    // url: "https://api.twitch.tv/kraken/streams?&channel=test_channel,test_channel2,freecodecamp,phantasyftw,ESL_SC2,comster404",