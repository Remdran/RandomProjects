(function (global) {

    // Setup a name space for our utility
    var ajaxUtils = {};

    // Returns an HTTP request object
    function getRequestObject() 
    {
        if(window.XMLHttpRequest) {
            return (new XMLHttpRequest());

        }
        else if (window.ActiveXObject) { // For very old IE browsers (so this step is optional)
            
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    }

    // Makes an Ajax GET Request to 'requestUrl'
    ajaxUtils.sendGetRequest = function(requestUrl, responseHandler) {
        var request = getRequestObject();
        request.onreadystatechange = function() {               //Cant pass parameters to a function value which is why this needs doing inside an actual function
            handleResponse(request, responseHandler);
        };
        request.open("GET", requestUrl, true);
        request.send(null); // For POST Only      
      };

      function handleResponse(request, responseHandler){
          if((request.readyState == 4) && (request.status == 200)) {
              responseHandler(request);
          }
      }

      global.$ajaxUtils = ajaxUtils;

})(window);