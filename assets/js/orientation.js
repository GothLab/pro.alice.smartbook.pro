

function size_check () {
    var height = $(window).height();
    var width = $(window).width();
  
        
    if (height > width) {
            console.log('height>wdith')
$('#slideA, #slideB').css('width','100vw');
$('#slideA, #slideB').hide();
$('#slide'+active_frame).show();


            

            
    }
    if (height < width) {

     console.log('height<wdith');
     
  $('#slideA, #slideB').css('width','50vw').show();
         
            
    }
}

$(window).resize(size_check);

$(document).ready(size_check);


$('#i_a').on('click',function(){
$('#slideA').css('width','100vw').show();
$('#slideB').hide();
});

$('#i_b').on('click',function(){
$('#slideB').css('width','100vw').show();
$('#slideA').hide();
});
