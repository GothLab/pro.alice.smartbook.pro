
//on scroll A or B save scroll position to its A_ID or B_ID

$('#slideA').scroll(function(){
 var s_A = $('#slideA').scrollTop();
localStorage.setItem('scroll_p'+A_ID,s_A)       
});


$('#slideB').scroll(function(){
   var s_B = $('#slideB').scrollTop();
localStorage.setItem('scroll_p'+B_ID,s_B)   
})
 

