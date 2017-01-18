var contentLoaded = false;

$( '#input' ).keypress(function(e){
    if(e.which === 13){
        if(contentLoaded) {
            $( '#results' ).html("");
            contentLoaded = false;
        }
        console.log($( '#input' ).val());
        var myUrl = $( '#input' ).val();
        SearchWiki(myUrl);
    }
});

function SearchWiki(myUrl) {
    $.ajax( {
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=" + myUrl,
        data: {},
        dataType: 'json',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
            console.log(data);
            for(var i = 0; i < data[1].length; i++){
                $( '#results' ).add("<a href='" + data[3][i] + "'><li>" + data[1][i] + "<br>" + "<span id='blurb'>" + data[2][i] + "</span>" + "</li></a>").appendTo($( '#results' ));
                console.log(data[1][i]);
            }
            contentLoaded = true;
        //$( '#results' ).html(data[1]);
        }
    } );
}


// url: "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=" + myUrl,