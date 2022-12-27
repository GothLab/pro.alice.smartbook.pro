function Ginit() {
        
        baguetteBox.run('.gallery');
        
}


  
  $('#tool').on('mousedown touchstart', function(e) {
   $('.TR').tooltip("show");
 
  }).bind('mouseup mouseleave touchend', function() {
    $('.TR').tooltip("hide");
  
  });


function toastInit () {
$('.AN').on('click',function(){
        
var TEXT = $(this).attr('text');
var TITLE = $(this).attr('title');
$('.thdr').text(TITLE);
$('.toast-body').text(TEXT);
$('.toaster').toast('show');


        
}); }

  