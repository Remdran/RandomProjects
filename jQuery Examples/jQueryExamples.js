//--------------------------------------------------------------------------------------------------
// Embed link for the latest jQuery library 
//--------------------------------------------------------------------------------------------------
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

//--------------------------------------------------------------------------------------------------
// Detect a click with jQuery    
//
// ("#circle") is a div id in the html   // use (".circle") for classes   // use just ("div") to select all divs
//--------------------------------------------------------------------------------------------------

$("#circle").click(function(){
    alert("Circle was clicked!");
});

//--------------------------------------------------------------------------------------------------
// Change the .innerHTML of a p tag when an element is clicked   
//--------------------------------------------------------------------------------------------------

$("#circle").click(function(){
    $("p").html("This changes the text of the <p> tags when circle is clicked");
});

//--------------------------------------------------------------------------------------------------
// Detect the mouse hovering over an element with jQuery 
//--------------------------------------------------------------------------------------------------

$("#circle").hover(function(){
    alert("circle has been hovered over");
});


//--------------------------------------------------------------------------------------------------
// When an element is clicked, change the src of the/all iframes
//--------------------------------------------------------------------------------------------------

$("#circle").click(function(){
    $("iframe").attr("src", "http://www.bbc.co.uk");
});

//--------------------------------------------------------------------------------------------------
// Change the style of an element when clicked
//--------------------------------------------------------------------------------------------------

$("#circle").click(function(){
    $("#circle").css("background-color", "red");    // background-color could be any style, width, height etc
});


$("div").click(function(){
    $(this).css("display", "none");    // this refers to the specific div that has been clicked, good for if you have multiple divs
});

//--------------------------------------------------------------------------------------------------
// Return the value of a css property/style
//--------------------------------------------------------------------------------------------------

$("#circle").click(function(){
    alert($("#circle").css("background-color"));    // By only passing the property/style and not a value, jQuery returns that style/properties value    
});                                                 // In this case it would alert the circle elements RGB value

//--------------------------------------------------------------------------------------------------
// Return the id of a clicked element
//--------------------------------------------------------------------------------------------------

$("div").click(function(){
    alert($(this).attr("id"));    // this refers to the specific div that has been clicked, good for if you have multiple divs
});

//--------------------------------------------------------------------------------------------------
// FadeOut the div when clicked
//--------------------------------------------------------------------------------------------------

$("div").click(function() {
    $(this).fadeOut("slow", function(){
        alert("Fadeout has finished");   // The alert will be triggered when the fadeout is complete because of the call back function
    });
});

//--------------------------------------------------------------------------------------------------
// Different ways to handle toggle fading
//--------------------------------------------------------------------------------------------------

$("#toggle").click(function () {
    if ($("#text").css("display") == "none") {      // Check the display property and toggle accordingly
        $("#text").fadeIn();
    }
    else {
        $("#text").fadeOut();
    }
});


$("#toggle").click(function () {
    $("#text").fadeToggle();   // Use built in functions
});

//--------------------------------------------------------------------------------------------------
// Using jQuery to animate 
//--------------------------------------------------------------------------------------------------

$("#circle").click(function() {
    $(this).animate({     // Put in the values you want the element to be when the animation completes
        width:"400px",      
        height:"400px",
        marginLeft:"100px",
        marginTop:"100px"
    }, 2000, function(){
        $(this).css("background-color", "blue");      // Change colour to blue when the animation is complete (callback function)
    });
});


        