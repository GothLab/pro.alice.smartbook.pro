// LOADING FIRST BOOK FROM PRELOAD
// Get saved A, B books
var A_ID = localStorage.getItem("A_ID");
if (localStorage.getItem("A_ID") === null) {
 A_ID = 33; 
 localStorage.setItem("A_ID","33");       
}


var B_ID = localStorage.getItem("B_ID");   
if (localStorage.getItem("B_ID") === null) {
 B_ID = 33; 
 localStorage.setItem("B_ID","33");
}         
        
// LOAD LAST SAVED INTO A B
$( document ).ready(function() {
        active_frame = 'A';
   $(".list_name[book_id*='"+A_ID+"']").click();
        
        setTimeout(() => {
 active_frame = 'B'; $(".list_name[book_id*='"+B_ID+"']").click();   
        
}, "3000")
      
        
});
