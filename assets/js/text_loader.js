//INTERVAL TO SAVE SCROLL POSITION


//on scroll A or B save scroll position to its A_ID or B_ID

$('#slideA').scroll(function(){
 var s_A = $('#slideA').scrollTop();
 localStorage.setItem('scroll_p'+A_ID,s_A)       
})
$('#slideB').scroll(function(){
   var s_B = $('#slideB').scrollTop();
localStorage.setItem('scroll_p'+B_ID,s_B)   
})
 



// Get saved A, B books
   var A_ID = localStorage.getItem("A_ID");
   var B_ID = localStorage.getItem("B_ID");   
        
        


////////////////////////////////////

$('.list_name').on('click',function(){
  
  var href = $(this).attr('book_href');
  var target = '#text'+active_frame;
        

   // version
var ID = $(this).attr('book_id');
        //pars ID
var ID2 = parseInt(ID);



// which book id is loaded in A or B frame
window[active_frame+'_ID'] = ID;
localStorage.setItem(active_frame+'_ID',ID);
        
//localStorage.setItem(active_frame+'_ID',ID);
       

// scroll position of active frame        
localStorage.setItem('scroll_p'+ID,'0');
  

        //FUNCTION TO CHECK IF CURR ID IS DOWNLOADED AND LOAD FROM DB AND IF NOT LOAD FROM INTERNET 
        
var STATUS = localStorage.getItem('d_id'+ID);
var STATUS2 = parseInt(STATUS);
if (STATUS2 == 1) {        
        

db.collection('books').doc({ id: ID2 }).get().then(document => {  
       TXT = document;
   $(target).html(TXT.text);
});
        

        ///
}
else {
        
            //////////BASIC LOAD
 $(target).load(href,function(){
         afterload();
});      
          
        
}
////////////////////////

        

        
        //////////AFTER LOAD FUCTION
        
        function afterload(){
                
                         
var target = '#text'+active_frame;   

 
   //extracting toc      
 var toc = $('#textA, #textB').find('ul:first').html();
 $('#tab'+active_frame).html(toc);
$('#textA, #textB').find('ul:first').remove();
         //$(target).find('br').remove();
         //cleaning toc
    $('#tab'+active_frame).find('br').remove();

         //href of toc

         
         
         $('#tab'+active_frame).find('a').each(function(index){

var $t = $(this);
         var INX = index;
         //
    $t.removeAttr('target').removeAttr('aria-label').removeAttr('href').attr('index',INX).addClass('h_link');


})

         //
         
         
         
         
         
         //on click scroll to
         


         
         //
         
         
         
         //Find all links and convert them to tooltips
 $('#textA, #textB').find('img').each(function(){
         
$(this).addClass('img-fluid');
         
 });
         $('#textA, #textB').find('a').each(function(){
$(this).attr('data-bs-toggle','tooltip').attr({
      title: $(this).attr('data-href')
    })
    .removeAttr('aria-label').removeAttr('aria-label-position').removeAttr('target');
    
});
     //end
         
             $(function () {
        $("[data-bs-toggle='tooltip']").tooltip();
    });
         //
          c_init();
         //
      
         //heading to link
         
         $('#textA #textB').find('h1, h2, h3, h4,h5,h6').each(function(){
                
        $(this).attr({
      id: $(this).attr('data-heading')
    })
    .removeAttr('data-heading');
        
                 
                 
         });
         
         //
         
         //Add class to all h2 h3
         
         $('#textA #textB').find('h1,h2, h3, h4,h5,h6').addClass('t_link');
           $('#textA #textB').find('.t_link').each(function(index){
                   var $t = $(this);
                   $t.addClass('t2_link'+index).attr('index',index);
                   
           })
         //
         
         
   
         
         
         
         //
         // a on click find on corresponding text same index of stuff get its offset and send it as negative to translate 3d 
        
         
         //
   LINK_CLICKER();
         //
        INVIEW();
                
         //
                IMGS();

  ////////////////////    

                
        }
        
        
        ////////////////////
        

     
         
 });
  


         function LINK_CLICKER (){
         //On click get position of elemeent and scroll to it
         $('.h_link').on('click',function(){
         

     var INX = $(this).attr('index');    
                console.log(INX); 
                 $('#slide'+active_frame).scrollTo('.t2_link'+INX);
              
                 
     /*            
  
     var TRG = $('#text'+active_frame).find('.t2_link'+INX).offset().top;
     var TRG2 = Math.ceil(TRG);

                 
$('#swiper-wrapper'+active_frame).css('transform', 'translate3d(0px, -' + TRG2 + 'px, 0px)');
;
        console.log(TRG2);
             */    
                 
              //   var ID = $(this).attr('data-href');
              //   var TG = $('#text'+active_frame).find('h3:contains('+ID+')').offset();
               //  var IX = $(this).index();
                 
             //    console.log(IX);
                 
         });
         };

        
        
// LOAD LAST SAVED INTO A B
$( document ).ready(function() {
        active_frame = 'A';
   $(".list_name[book_id*='"+A_ID+"']").click();
        
        setTimeout(() => {
 active_frame = 'B'; $(".list_name[book_id*='"+B_ID+"']").click();   
        
}, "1000")
      
        
});


        
