$('#locker').click();

var TXT = 'ORIG'
var EPR = -1;
var TXT1 = 'BZAH';
var TXT2 = 'NDEM';
var TXT3 = 'VNAB';


function loadNext() {  

EPR = EPR + 1; 

swiper2.removeAllSlides();

swiper2.appendSlide('<div class="swiper-slide" id="M-1"><>');
        
$('#M-1').load('./res/' + TXT + '.html #A-' + EPR ,function(){ 

swiper2.update(); 

toastInit();   

$('.TR').tooltip('enable');
        
 $('#T-1').load('./res/' + TXT1 + '.html #A-' + EPR);

$('#T-2').load('./res/' + TXT2 + '.html #A-' + EPR);

$('#T-3').load('./res/' + TXT3 + '.html #A-' + EPR, function(){swiper3.update();});

});      

}




function loadPrev() {  

EPR = EPR - 1;    

swiper2.removeAllSlides();
        
swiper2.appendSlide('<div class="swiper-slide" id="M-1"><>');
        
$('#M-1').load('./res/' + TXT + '.html #A-' + EPR ,function(){ 
        
toastInit();

swiper2.update();  

$('.TR').tooltip('enable');
        
$('#T-1').load('./res/' + TXT1 + '.html #A-' + EPR);

$('#T-2').load('./res/' + TXT2 + '.html #A-' + EPR);

$('#T-3').load('./res/' + TXT3 + '.html #A-' + EPR, function(){swiper3.update();} );

});
      
        
}
   loadNext();


function scroll_lock() {
  
        $('#M-1').addClass('linked2');
        
  $('#translationC, #translationC-1, #translationC-2').addClass('linked');      
        
};

function scroll_unlock() {
  
        $('#M-1').removeClass('linked2');
        
  $('#translationC, #translationC-1, #translationC-2').removeClass('linked');      
        
};

function scroll_locker(){

    $('.linked').scroll(function(){
        $('.linked').scrollTop($(this).scrollTop());    
    })

    $('.linked2').scroll(function(){
        $('.linked2').scrollTop($(this).scrollTop());    
    })
};