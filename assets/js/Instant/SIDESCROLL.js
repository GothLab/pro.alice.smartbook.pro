/////////////SIDESCROLL
$('.side-scrollB').on('click',function(){
        
       var VH = $(window).height(); 
       var CH = $('#slide'+active_frame).scrollTop() - 20;
       
       $('#slide'+active_frame).scrollTo(CH+VH,800);
        console.log('scrolled');
        
});


        
$('.side-scrollA').each(function(){
$(this).on('click',function(){
        
       var VH = $(window).height(); 
       var CH = $('#slide'+active_frame).scrollTop();
       
       $('#slide'+active_frame).scrollTo(CH-VH,500);
        console.log('scrolled');
        
});

});

