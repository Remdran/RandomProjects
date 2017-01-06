var start = new Date().getTime();

function showShape() {

    var top = Math.random() * 500;
    var left = Math.random() * 500;
    var bRadius = Math.random() * 51;
    var colourArray = ["Green", "Blue", "Yellow", "Black"];

    var randomColour = Math.floor(Math.random() * colourArray.length + 1);
    console.log(randomColour);

    document.getElementById("shape1").style.top = top + "px";
    document.getElementById("shape1").style.left = left + "px";
    document.getElementById("shape1").style.borderRadius = bRadius + "%";
    document.getElementById("shape1").style.backgroundColor = colourArray[randomColour];

    document.getElementById("shape1").style.display = "block";

    start = new Date().getTime();    
}

document.getElementById("shape1").onclick = function(){

    document.getElementById("shape1").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    document.getElementById("yourTime").innerHTML = timeTaken;

    setTimeout(showShape, Math.floor(Math.random() * 2000));

}