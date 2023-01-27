

/* LOCK SCROLL */
//var lock = localStorage.getItem('lock');
var lock = 0;

// Lock 
const myScryll = scryll('#slideA', '#slideB');
  myScryll.kill();
$('#i_lock').on('click',function(){
        
if (lock == 0) {
        lock = 1;
    myScryll.init();
} 
        else {
        lock = 0;
  myScryll.kill();
        
        
}
        
})

//MENU 

// buttons set active frame
$('#b_tabA').on('click',function(){
        active_frame = 'A';
});
$('#b_tabB').on('click',function(){
        active_frame = 'B';
});

// buttons set active frame
$('#slideA').on('click',function(){
        active_frame = 'A';
});
$('#slideB').on('click',function(){
        active_frame = 'B';
});



//function scroll to top
function scroll_top() {
$('#slide'+active_frame).scrollTo(0);    
};

//binding function to prev 
$( "#i_prev" ).on({
    mousedown: function() {
        $(this).data('timer', setTimeout(function() {
              scroll_top();
        }, 1000));
    },
    mouseup: function() {
        clearTimeout( $(this).data('timer') );
    }
});


//Hide show AB frames
$('#i_a').on('click',function(){
$('#slideA').css('width','100vw').show();
$('#slideB').hide();
});

$('#i_b').on('click',function(){
$('#slideB').css('width','100vw').show();
$('#slideA').hide();
});



//on doubleclick show menu

$('#textA, #textB').on('dblclick',function(){$('#i_menu').click();})
