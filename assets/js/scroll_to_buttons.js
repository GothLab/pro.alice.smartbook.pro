
// GET POSITIONS OF # LINKS / MAKE ARRAY OF THEM / ON CLICK NEXT / GET CURR POSITION / FILTER ARRAY MORE THAN THAT / GO TO 0 SCROLL / SCROLL TO THIS NEXT ONE

arr = [];
arr2 = []
var curr
var TRGT
var TRGT2

function FLTR(value, index, array) {
  return value > curr+1;
}

function FLTR2(value, index, array) {
  return value < curr;
}

function INVIEW() {

$('#slide'+active_frame).find('.t_link').each(function(){
var x = $(this).offset().top;
var y = parseInt(x);
arr.push(y);
})



$('#i_next').on('click',function(){

    
curr = $('#slide'+active_frame).scrollTop();

arr2 = arr.filter(FLTR);

 TRGT = arr2[0];
 TRGT2 = Math.ceil(TRGT);

  $('#slide'+active_frame).scrollTo(0);
  $('#slide'+active_frame).scrollTo(TRGT2);



});    
        
 $('#i_prev').on('click',function(){

    
curr = $('#slide'+active_frame).scrollTop();

         
arr2 = arr.filter(FLTR2);

 TRGT = arr2[arr2.length - 1];

 
TRGT2 = Math.ceil(TRGT);

 $('#slide'+active_frame).scrollTo(0);
 $('#slide'+active_frame).scrollTo(TRGT2);



});          

        

      
        
};
        
     
        
        
        
        
        
        
        
      /*  
inView('.t_link')
    .on('enter', el => {
 curB = $(el).attr('index');
        console.log(curB);
        
    })
    .on('exit', el => {
       //el.style.opacity = 1;
    });
      */

        /*
  //onclick next take current curA index, make position 0, find +1 one check its position and scroll to it.
        //
$('#i_next').on('click',function(){
//last inview position
var PARSE_INX = parseInt(curA);
//+1 to last inview position
var target_INX = PARSE_INX+1;  
var TGX = parseInt(target_INX)
     
//$('#swiper-wrapper'+active_frame).css('transform', 'translate3d(0px, 0px, 0px)');
var NM = 'arr'+active_frame;
var trg_loc = NM[2];
console.log(trg_loc);

    //$('#text'+active_frame).find('.t2_link'+target_INX).offset().top;
 
          
//  $('#swiper-wrapper'+active_frame).css('transform', 'translate3d(0px, -' + TRG_L_R + 'px, 0px)');
;

  })    
  //PREV
        
$('#i_prev').on('click',function(){
var PARSE_INX = parseInt(curA);
var target_INX = PARSE_INX-1;
console.log(target_INX);
     
  $('#swiper-wrapper'+active_frame).css('transform', 'translate3d(0px, 0px, 0px)');

          var target_location = $('#text'+active_frame).find('.t2_link'+target_INX).offset().top;
          
var TRG_L_R =  Math.ceil(target_location);
          
  $('#swiper-wrapper'+active_frame).css('transform', 'translate3d(0px, -' + TRG_L_R + 'px, 0px)');
;

  })       
        
        //
        
//FUNCTION TO CREATE ARRAY OF NAVIGATION
$('#text'+active_frame).find('h1,h2, h3, h4,h5,h6').each(function(){
var offset = $(this).offset().top;
var offset2 = Math.ceil(offset)

   window["arr" + active_frame].push(offset2);
})//END FUNCTION
        
}//END INVEW
*/
