(function (global) {

    var trib = {};

    var homeHtml = "snippets/front_page_snip.html";

    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function(selector, html){
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // On Page Load
    document.addEventListener("DOMContentLoaded", function(event){

        //On first load show home view
        $ajaxUtils.sendGetRequest(homeHtml, function(responseText){
            document.querySelector("#container").innerHTML = responseText;   
        }, 
          false);
    });

    global.$trib = trib;
})(window);