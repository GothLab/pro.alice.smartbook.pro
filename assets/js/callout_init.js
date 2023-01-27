
function callout_init() {

        
     
$('.callout').each(function(){
        $(this).off('click');
        $(this).on('click',function(){

        $(this).children().eq(1).toggle();

        });


});


        
        
        
};
