

$( "#a1close" ).on( "click", function() {
  $('.a1').hide(); 
  $('.a2').css('width','auto')
});

$( "#a2close" ).on( "click", function() {
  $('.a2').css('width','auto'); 
});

$( "#a3close" ).on( "click", function() {
  $('.Cbottom').css('height','0');
  $('.ABtop').css('height','100%');  
});


