document.addEventListener("DOMContentLoaded", function(event){

    // // Let's change the colour of the text when the button is clicked 
    // var changeColour = function () {
    //     document.getElementById('changeMe').onclick = function(){
    //         document.getElementById('content').style.color = "red";
    //  }
    // }

    // // Lets append some text when the button is pressed
    // var addText = function () {
    //     document.getElementById("changeMe").onclick = function(){
    //         document.getElementById("container").innerHTML += "<p>This paragraph is newly created</p>"
    //  } 
    // }

    // Let's have the document say hello to the name of the person entered
    function sayHello(event){
        
        var name = document.getElementById("name").value; 
        var message = "<h2>Hello " + name + "!</h2>";

        //document.getElementById("content").textContent = message;  //Won't honour html code
        document.getElementById("content").innerHTML = message;

        if(name != "Karl"){
            var title = document.querySelector("#title").textContent;  // Use querySelectorAll to get all elements of a certain type i.e h1
            title +=  " for you who aren't Karl";  // This is passed by value so it needs the title textcontent needs to be set (next line)
            document.querySelector("#title").textContent = title;
            
            //Change the text of the button
            this.textContent = "Said it!";
        }
    } 
    

    // Unobtrusive event binding examples
    document.querySelector("button").addEventListener("click", sayHello);  //This method makes "this" reference the actual button
    
    document.querySelector("body").addEventListener("mousemove", function(event){ //Add an event listener that on-mouse-move in body prints out mouse X, Y coords
        console.log("X: " + event.clientX);
        console.log("Y: " + event.clientY);
    
    })
    // document.querySelector("button").addEventListener("click", addText);
    // document.querySelector("button").addEventListener("click", changeColour);

    //document.querySelector("button").onclick = sayHello; //This method makes "this" reference the actual button


})
