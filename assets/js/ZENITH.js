
// MENU ON CLICK LOAD START 
$('.list_name').on('click',function(){
  
// GET CLICKED ITEM BOOK HREF
var href = $(this).attr('book_href');
// GET ACTIVE FRAME
var target = '#text'+active_frame;

// GET BOOK ID
var ID = $(this).attr('book_id');
var ID2 = parseInt(ID);

// LOCALSTORAGE VAR which book id is loaded in A or B frame
window[active_frame+'_ID'] = ID;
localStorage.setItem(active_frame+'_ID',ID);

// ??? scroll position of active frame       


if (localStorage.getItem('scroll_p'+ID) === null) {
localStorage.setItem('scroll_p'+ID,'0');
};

 $(target).load(href,function(){
           afterLoad();
});     

/*
//FUNCTION TO CHECK IF CURR ID IS DOWNLOADED AND LOAD FROM DB AND IF NOT LOAD FROM INTERNET        
var STATUS = localStorage.getItem('d_id'+ID);
var STATUS2 = parseInt(STATUS);
if (STATUS2 == 1) {        
//IF LOADED LOAD FROM DB GO TO AFTERLOAD
db.collection('books').doc({ id: ID2 }).get().then(document => { TXT = document;
$(target).html(TXT.text); afterLoad();
});
}
else {
//////////BASIC LOAD THEN AFTER LOAD
 $(target).load(href,function(){
           afterLoad();
});         
}
  */      
}); // END OF DECLARATION ON CLICK
////////////////////////

        
//AFTER LOAD DECLARATION
        
function afterLoad(){           
        toc_init(); // link in toc dosnt go to B prob uncativeframe, A dosnt gets toc, wrong toc 2 goes to 1
        tooltip_init();
        gallery_init(); //4th dont load fast

        callout_init(); //callout dont work A prob unactiveframe
        
        lastScrollF();//scroll to last position
        }; //end afterload
        
 

        
