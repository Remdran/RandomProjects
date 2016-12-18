// Event Handling
document.addEventListener("DOMContentLoaded", function(event) {

// Unobtrusive Event Binding
document.querySelector("button").addEventListener("click", function() {
    var self = this;
    var name = "";

    // Call Server to get the name
    $ajaxUtils.sendGetRequest("/data/name.json", function (res) {
        var message = res.firstName + " " + res.lastName;
        if(res.stuff){
            message += " has stuff";
        }
        else {
            message += " doesn't have stuff";
        }

        document.querySelector("#content").innerHTML = "<h2>" + message + "!</h2>";
        });    
    });
});