
// MAINFRAME
      var swiper1 = new Swiper(".mySwiper1", {
       
           loop: true,
      
      });




// triger trans
$('#trans').on('click',function(){
              $('#translation').toggle();
        if ($(".mySwiper2").hasClass("locked")) {
 $('.mySwiper2').toggleClass( "locked" )  
}
}          
              );


//MAINFRAME INFINITE TRIGGER HOR/VERT

var INFINITE = false;
$('#triggaProg').hide();
$('#totop').hide();

$('#trigga').on('click',function(){     
INFINITE = true;
$('#triggaProg').show();
$('#trigga').hide();
$('#next').hide();
$('#prev').hide();
        $('#totop').show();
});


$('#triggaProg').on('click',function(){     
INFINITE = false;
swiper2.removeAllSlides();
$('#triggaProg').hide();
$('#trigga').show();
        $('#next').show();
$('#prev').show();
$('#totop').hide();
});     
        
//Locker

$('#locker').on('click',function(){
        
  $('.mySwiper2').toggleClass( "locked" )    
})



//Swiper Gal Dict Anot

      const swiper7 = new Swiper('.mySwiper7', {
        
              direction: "vertical",
              nested: true,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        virtual: {
           
        },

      });









//EXTRA SWIPER
      var swiper4 = new Swiper(".mySwiper4", {
       
           loop: true,
        pagination: {
          el: ".swiper-pagination",
          
        
        },
      });


//INFINITE
      var swiper2 = new Swiper(".mySwiper2", {
          direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
               on: {
    reachEnd: function () {
       loadN()
    }, 
                       reachBeginning: function () {
      // loadP()
    }, 
               },
              observer: true,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        mousewheel: true,
        },
      );



//PARAMETRE FOR CURRENT EPISODE SAVING


var EP = 4;
var EPMin = EP;
var EPMax = EP;


var TXT = 'ORIG';

/*current episode varabile

starts from 1 and id E1
when reach end adds slide with ep+1 and id+1
ep+1 = author + episode 

when clicks next adds slide with ep+1 and id+1

if episode curr = 0 then dont add slide
if episode curr = 52 then dont add slide

translation page has 3x pages with
each loads inside curr episode
but with individial author


*/

// LOAD NEXT CHAPTER FUNCTION
   function loadN(){   

if (EP >= 0 && EP <= 52) {   
        

if (INFINITE == true) {        
var EPR = EPMax + 1;
           
swiper2.appendSlide('<div class="swiper-slide" id="A' + EPR + '"></div>');    
 $('#A'+EPR).append($('<div>').load('./res/text.html .' + TXT + ' #A-' + EPR ,function(){swiper2.update();}));     
          
EPMax = EPR;

}           
}         
   };


// LOAD PREVIOUS CHAPTER
   function loadP(){     
           
if (EP >= 0 && EP <= 52) {           
        if (INFINITE == true) {   
var EPR = EPMin - 1;
           
swiper2.prependSlide('<div class="swiper-slide" id="A' + EPR + '"></div>');
           
 $('#A'+EPR).append($('<div>').load('./res/text.html .' + TXT + ' #A-' + EPR ,function(){swiper2.update();}));     
          
           
           EPMin = EPR;
           
}    
}        
   };
        










//V CONTAINER
      var swiper6 = new Swiper(".mySwiper6", {
          direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
              
              
        scrollbar: {
          el: ".swiper-scrollbar2",
        },
        mousewheel: true,
        },
      );






//Translation



      var swiper3 = new Swiper(".mySwiper3", {
    
 observer: true,
   pagination: {
          el: ".swiper-pagination",
        },
    
   
      });














      var swiper8 = new Swiper(".mySwiper8", {
                      slidesPerView: "auto",
        centeredSlides: true,
              direction: "vertical",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
        },
      });




      var swiper9 = new Swiper(".mySwiper9", {
                         slidesPerView: "auto",
              direction: "vertical",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
        },
      });




