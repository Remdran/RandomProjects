$(document).ready(function (){
    
    $("#getQuote").on("click", function(){
        
        var json = $.ajax({
                url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // URL to the random quote API
                type: 'POST', 
                data: {}, 
                dataType: 'json',
                success: function(data) {  
                    console.log(data);                   
                    document.getElementById("quote").innerHTML = "<p>" + data.quote + "<p>Author: " + data.author; 
                },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "lQqIjlKOIRmsh8s1ehmTtJxsj1wjp1S0LmEjsncrFJbFA1tEOW"); 
                }
            });
    });
});