// Event Handling
document.addEventListener("DOMContentLoaded", function(event) {

// Unobtrusive Event Binding
document.querySelector("button").addEventListener("click", function() {
    var self = this;
    var name = "";

    // Call Server to get the name
    $ajaxUtils.sendGetRequest("https://github.com/Remdran/RandomProjects/tree/gh-pages/JSON%20Example/data/name.txt", function (request) {
        self.name = request.responstText;

        document.querySelector("#content").innerHTML = "<h2>Hello " + self.name + "!</h2>";
    });

    
    });
});