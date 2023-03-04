/*
$('.dropdown-menu').each(function(){
        
$(this).find('a').eq(2).remove();
        
})
*/

$('.dropdown-toggle-split').hide();

$('.list_name').each(function(){
var START = $(this).attr('book_href');
    
var START2 = START.replace('https://pro.alice.smartbook.pro/books/Alice/FREE/','./text/').replace('https://pro.alice.smartbook.pro/books/Alice/TRANSL/','./text/').replace('https://pro.alice.smartbook.pro/books/Alice/Anot/','./text/').replace('https://pro.alice.smartbook.pro/books/Alice/ORIG/','./text/'); ;    

$(this).attr('book_href',START2);    
});