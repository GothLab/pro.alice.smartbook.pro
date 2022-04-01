

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


 swiper2.update();    toastInit();   
 $('#T-1').load('./res/' + TXT1 + '.html #A-' + EPR);

$('#T-2').load('./res/' + TXT2 + '.html #A-' + EPR);

$('#T-3').load('./res/' + TXT3 + '.html #A-' + EPR, function(){swiper3.update();});

});
        
/*$('#A'+EPR).load('./res/' + TXT + '.html .' + TXT + ' #A-' + EPR ,function(){swiper2.update();});
*/
        

}

function loadPrev() {  

    EPR = EPR - 1;    

 swiper2.removeAllSlides();
        
 swiper2.appendSlide('<div class="swiper-slide" id="M-1"><>');
        
$('#M-1').load('./res/' + TXT + '.html #A-' + EPR ,function(){ 
  toastInit();
 swiper2.update();     
 $('#T-1').load('./res/' + TXT1 + '.html #A-' + EPR);

$('#T-2').load('./res/' + TXT2 + '.html #A-' + EPR);

$('#T-3').load('./res/' + TXT3 + '.html #A-' + EPR, function(){swiper3.update();} );

});

      
        
}
   loadNext();