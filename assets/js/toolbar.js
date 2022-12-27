var active_frame = 'A';

/* Buttons A/B  */
/*
$('#i_a').on('click',function(){ swiperM.slideTo(0);});
$('#i_b').on('click',function(){ swiperM.slideTo(1);})
*/
/* Fire menu */
$('#slideB').on('dblclick',function(){
  active_frame = 'B';
          $('#i_menu').click();     
                const bsTab = new bootstrap.Tab('#b_tabB');
        bsTab.show();
})
$('#slideA').on('dblclick',function(){
  active_frame = 'A';
          $('#i_menu').click(); 
        const bsTab = new bootstrap.Tab('#b_tabA');
        bsTab.show();
})


/*

var slideA = $('#slideA');
var slideB = $('#slideB');
var hammer = new Hammer(slideA);
var hammer2 = new Hammer(slideB);
hammer.on('doubletap', function(e) {
active_frame = 'A';
          $('#i_menu').click();
        
});
hammer2.on('doubletap', function(e) {
active_frame = 'B';
          $('#i_menu').click();
});
*/
/*
swiperA.on('doubleClick', function () {
  $('#i_menu').click();
});
swiperB.on('doubleClick', function () {
  $('#i_menu').click();
});

*/

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

//
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


