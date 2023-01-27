// create db of all books as cache, each book has ID, version, scroll position,  href, status

// on .download click find button href parameter, add to this db a book with its ID, get text from href, strigify and add to the db
let db = new Localbase('db')
let btnsave = $('.save');
 
 
var ID;
var ID2;
var HREF;
var TEXT;


////////////////////SAVING
$('.save').on('click',function(el){
el = $(this);

ID = $(el).parent().parent().find('.list_name').attr('book_id');
ID2 = parseInt(ID);

        
HREF = $(el).parent().parent().find('.list_name').attr('book_href');
        
        
        // SAVE TO DB FUNCTION
        $.get( "https://gothlab.github.io/Smartbook-App/assets/books/content/content.md", function( data ) {

 TEXT = data;
 db.collection('books').add({
  id: ID2,
  text: TEXT
})     
});
//

localStorage.setItem('d_id'+ID2,'1');      
        
        
//         
        
});

///////////////////////




///////////DELETING

        
//DELETING  
$('.delete').on('click',function(el){
el = $(this);

ID = $(el).parent().parent().find('.list_name').attr('book_id');

ID2 = parseInt(ID);
        
HREF = $(el).parent().parent().find('.list_name').attr('book_href');
        
db.collection('books').doc({ id: ID2 }).delete();

localStorage.removeItem('d_id'+ID2);            
});    



//

        
function db_load_book(INX,TRG){
db.collection('books').doc({ id: INX }).get().then(document => {  
       TXT = document;
   $(TRG).html(TXT.text);
});
        
}       
//

//