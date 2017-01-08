$("#submitButton").click(function () {
    var errorMessage = "";
    var fieldEmpty = "";

    if ($("#email").val() == "") {
        fieldEmpty += "<br>Email";
    }

    if ($("#phone").val() == "") {
        fieldEmpty += "<br>Telephone";
    }

    if ($("#password").val() == "") {
        fieldEmpty += "<br>Password";
    }

    if ($("#confirmPass").val() == "") {
        fieldEmpty += "<br>Confirm Password";
    }

    if (fieldEmpty != "") {
        errorMessage += "<p> The following fields are missing: " + fieldEmpty + "</p>";
    }

    if (isEmail($("#email").val()) == false) {
        errorMessage += "<p>Your email address is not valid</p>";
    }

    if ($.isNumeric($("#phone").val()) == false) {
        errorMessage += "<p>Your phone number is not numeric</p>";
    }

    if ($("#password").val() !== $("#confirmPass").val()) {
        errorMessage += "<p>Your passwords dont match</p>";
    }

    if(errorMessage != "") {
        $("#errorMessage").html(errorMessage);
    }
    else{
        $("#successMessage").show();
        $("#errorMessage").hide();
    }
});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email);
}