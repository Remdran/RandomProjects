var channels = ['freecodecamp', 'ESL_SC2', 'distortion2'];
var acc = document.getElementsByClassName('accordion');
var streamInfo;


for (let i = 0; i < channels.length; i++) {
    $.ajax({
        url: "https://api.twitch.tv/kraken/channels/" + channels[i],
        data: {},
        dataType: 'json',
        type: 'GET',
        headers: {
            'Client-ID': '7md94urznwzl3k47f6yk4ew7qkeoj9'
        },
        success: function (data) {
            //console.log(data);
            var name = data.display_name;
            var game = data.game;
            var logo = data.logo;
            var status = data.status;

            $.ajax({
                url: "https://api.twitch.tv/kraken/streams/" + channels[i],
                data: {},
                dataType: 'json',
                type: 'GET',
                headers: {
                    'Client-ID': '7md94urznwzl3k47f6yk4ew7qkeoj9'
                },
                success: function (data) {
                    //console.log(data.stream);
                    //streaminfo = data.stream;
                    setupHTML(name, game, logo, status, data.stream);
                }
            });
            //console.log(data) 
            //console.log(data.stream);
        }
    });
}
setupHTML();

function setupHTML(name, game, logo, status, stream) {

    if (stream) {

        if (name && logo && game) {
            var newEle = $('<div class="row"><img src="' + logo + '" class="icon"></img><span class="text"><a href="#" target="_blank">' + name + '</a></span><br><span class="text">' + status + '</span><br><span class="text">' + game + '</span></div><hr>');

            $('#online').append(newEle);

            console.log(stream);
        }
    } else {
        if (name && logo && game) {
            var newEle = $('<div class="row"><img src="' + logo + '" class="icon"></img><span class="text"><a href="#" target="_blank">' + name + '</a></span><br><span class="text">' + status + '</span><br><span class="text">' + game + '</span></div><hr>');

            $('#offline').append(newEle);
        }
    }
}

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle('active');

        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    }
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