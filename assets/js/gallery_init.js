//Init baguettebox and declare function to attr src of imgs
var parent = 0;

function gallery_init () {
$('.img-fluid').on('click',function(){
parent = $(this).parent().parent();
});
        
$('img').not('.main').hide();
      
   baguetteBox.run('[data-bss-baguettebox]', { animation: 'fadeIn',preload: 4, afterShow: img_swipe });
};







//Image src swiper

function img_swipe() {
        baguetteBox.show(0);
       setTimeout(function() { 

                   
var val0 = $(parent).find('a').eq(0).find('img').attr('src');
var val1 = $(parent).find('a').eq(1).find('img').attr('src');
var val2 = $(parent).find('a').eq(2).find('img').attr('src');
var val3 = $(parent).find('a').eq(3).find('img').attr('src');
var val4 = $(parent).find('a').eq(4).find('img').attr('src');

$('#baguetteBox-figure-0').find('img').attr('src',val0);
        
        $('#baguetteBox-figure-1').find('img').attr('src',val1);
        $('#baguetteBox-figure-2').find('img').attr('src',val2);
        $('#baguetteBox-figure-3').find('img').attr('src',val3);
        $('#baguetteBox-figure-4').find('img').attr('src',val4); 
               
    }, 500); 
    
        
};