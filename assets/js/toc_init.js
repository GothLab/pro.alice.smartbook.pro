

function toc_init(){
//ACTIVE FRAME var       
var target = '#text'+active_frame;   
        
//extracting toc      
var toc = $(target).find('ul:first').html();
$('#tab'+active_frame).html(toc);
$(target).find('ul:first').remove();

//cleaning toc
$('#tab'+active_frame).find('br').remove();

//href of target for toc         
$('#tab'+active_frame).find('a').each(function(index){
var $t = $(this);
var INX = index;
$t.removeAttr('target').removeAttr('aria-label').removeAttr('href').attr('index',INX).addClass('h_link');
});    

//First heading remove
$('#textA, #textB').find('h1').eq(0).each(function(){
var text = $(this).text();
$(this).after('<span class="mainTitle">'+text+'<span>');
$(this).remove();
})
        
//heading to link converter
 $('#textA, #textB').find('h1, h2, h3, h4,h5,h6').each(function(){   
        $(this).attr({
      id: $(this).attr('data-heading')
    })
    .removeAttr('data-heading');
         });
        
        
//        
//Add class to all h2 h3 for toc 
$('#textA, #textB').find('h1,h2, h3, h4,h5,h6').addClass('t_link');

//        
//numerise each t_link        
$('#textA, #textB').find('.t_link').each(function(index){
                   var $t = $(this);
                   $t.addClass('t2_link'+index).attr('index',index);
                   
           });
        
 //On click get position of elemeent and scroll to it       
 $('.h_link').on('click',function(){
  var INX = $(this).attr('index');    
$('#slide'+active_frame).scrollTo('.t2_link'+INX);
         });        
        
};//end toc init



  
