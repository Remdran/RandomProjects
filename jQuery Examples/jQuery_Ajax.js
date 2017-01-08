//--------------------------------------------------------------------------------------------------
// Use jQuery and Ajax to simply get content from a seperate file with no error checking
//--------------------------------------------------------------------------------------------------

$.get("info.txt", function(data) {
    alert(data);
});

//--------------------------------------------------------------------------------------------------
// Use jQuery and Ajax to simply get content from a seperate file with simple error/connection checking
//--------------------------------------------------------------------------------------------------

$.ajax("info.txt").done(function(data) {
    $("p").html(data);
}).fail(function() {
    alert("failed to get data");  
});