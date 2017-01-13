 $( '.controlgroup' ).controlgroup()

 $( '#html' ).click(function(){
     $( '#htmlWindow' ).toggle();
 });

  $( '#css' ).click(function(){
      $( '#cssWindow' ).toggle();
  });

  $( '#js' ).click(function(){
      $( '#jsWindow' ).toggle();
 });

  $( '#output' ).click(function(){
      $( '#outputWindow' ).toggle();
  });

  $( '#htmlContent' ).keyup(function(){
      var htmlStr = $( '#htmlContent' ).val();
      $( '#outputWindow' ).html(htmlStr);
  });
  
    $( '#cssContent' ).keyup(function(){
      var cssStr = $( '#cssContent' ).val();
      $( '#outputWindow' ).css(cssStr);
  });
