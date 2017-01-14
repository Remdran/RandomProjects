var active = 4 - $( '.hide' ).length;
$('.controlgroup').controlgroup()

$('.windows').height($(window).height() - $('#header').height() - 20);   // Set the individual windows height equal to the height of the window - header - padding
$('.windows').width($(window).width() / active - 3); // Set the individual windows width equal to the width of the window  / number of panels - padding
//console.log($(window).width());
//console.log($('.windows').width());

updateOutput();

$('.controlButton').click(function () {
    $('#' + this.dataset.name + "Content").toggleClass("hide");

    active = 4 - $( '.hide' ).length;
    $('.windows').width(($(window).width() / active) - 3);
    //console.log($(window).width());
    //console.log($('.windows').width());
});

$('textarea').on('change keyup paste', function () {
   updateOutput();
});

function updateOutput() {
    $('iframe').contents().find('html').html("<html><head><style type='text/css'>" + $('#cssContent').val() + "</style></head></body>" + $('#htmlContent').val() + "</body></html>")
    ;

    // Disable javascript execution whilst its unsecure for now 
    //document.getElementById('outputContent').contentWindow.eval($( '#jsContent').val());
}
