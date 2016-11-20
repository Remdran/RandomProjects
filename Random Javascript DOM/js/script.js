document.addEventListener("DOMContentLoaded", function(event){

    //Let's change the colour of the text when the button is clicked 
    var changeColour = function () {
        document.getElementById('changeMe').onclick = function(){
            document.getElementById('content').style.color = "red";
     }
    }

    //Lets append some text when the button is pressed
    var addText = function () {
        document.getElementById("changeMe").onclick = function(){
            document.getElementById("container").innerHTML += "<p>This paragraph is newly created</p>"
     } 
    }

    document.addEventListener("click", changeColour(), false);
    document.addEventListener("click", addText(), false);

})
