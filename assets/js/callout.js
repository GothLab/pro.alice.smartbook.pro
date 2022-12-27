function c_init() {
        
  $('.callout-title').each(function(){
          
/*
          var title = $(this).parent().find('.callout-content').find('h2:first').text();
          
          $(this).find('.callout-title-inner').text('');
          $(this).find('.callout-title-inner').append('<h2>'+title+'</h2>')
          
                    var title = $(this).parent().find('.callout-content').find('h2:first').remove();
  */        
  })
        
        //init show hide
        $('.callout-title').on('click',function(){
        
        $(this).parent().find('.callout-content').toggle();
        console.log('clicked');
        
})
                
//hide on content click
$('.callout-content').on('click',function(){
$(this).toggle();
})
                
                
                
                
                };