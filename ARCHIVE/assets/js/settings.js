
$('#gallery').find('img').each(function(index){
        indexX = index + 1; 
        $(this).attr('src','bw/'+ indexX +'.webp')
        $(this).parent().attr('href','bw/'+ indexX +'.webp')
})



function color() {
        $('.gallery').find('img').each(function(index){
        indexX = index + 1; 
        $(this).attr('src','color/'+ indexX +'.webp')
        $(this).parent().attr('href','color/'+ indexX +'.webp')
})
        
        
}




function bw() { $('.gallery').find('img').each(function(index){
        indexX = index + 1; 
        $(this).attr('src','bw/'+ indexX +'.webp')
        $(this).parent().attr('href','bw/'+ indexX +'.webp')
})}




function sketch() { $('.gallery').find('img').each(function(index){
        indexX = index + 1; 
        $(this).attr('src','sketch/'+ indexX +'.webp')
        $(this).parent().attr('href','sketch/'+ indexX +'.webp')
})};





$('#anotations').find('.card').on('mouseover',function(){       
        $(this).css('display','inline-table'); 
})



$('#anotations').find('.card').on('mouseout',function(){       
        $(this).css('display','flex'); 
});



var FSI = localStorage.getItem('FSI');
$('.mySwiper2').css('font-size',FSI);
$(".setting[var='FSI'][value="+FSI+"]").addClass('active');


var FWE = localStorage.getItem('FWE');
$('.mySwiper2').css('font-weight',FWE);
$(".setting[var='FWE'][value="+FWE+"]").addClass('active');

var FCO = localStorage.getItem('FCO');
$('.mySwiper2').css('color',FCO);
//$(".setting[var='FCO'][value="+FCO+"]").addClass('active');


var FST = localStorage.getItem('FST');
$('.mySwiper2').css('font-family',FST);
//$(".setting[var='FST'][value="+FST+"]").addClass('active');


var LHE = localStorage.getItem('LHE');
 $('.mySwiper2').css('line-height',LHE);
$(".setting[var='LHE'][value="+LHE+"]").addClass('active');


var FSP = localStorage.getItem('FSP');
 $('.mySwiper2').css('letter-spacing',FSP);
//$(".setting[var='FSP'][value="+FSP+"]").addClass('active');



var BGC = localStorage.getItem('BGC');
 $('.mySwiper2').css('background-color',BGC);
//$(".setting[var='BGC'][value="+BGC+"]").addClass('active');


var PAD = localStorage.getItem('PAD');
 $('.mySwiper2').css('padding',PAD);
$(".setting[var='PAD'][value="+PAD+"]").addClass('active');



$('.setting').on('click',function(){
       
   var CSS = $(this).attr('css');
   var VAL = $(this).attr('value'); 
   var VAR = $(this).attr('var')
        
   $('.mySwiper2').css(CSS,VAL);   

  $(this).parent().find('.setting').removeClass('active');

  $(this).addClass('active');
        
        
localStorage.setItem(VAR,VAL);
      
        
});

/*
take local storage value and apply
function that takes
on click removes class from
class name td
adds class to clicked
takes css parametre
and value from data
adds it to text and then saves to
local storage

*/





