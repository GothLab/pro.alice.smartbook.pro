
// GET POSITIONS OF # LINKS / MAKE ARRAY OF THEM / ON CLICK NEXT / GET CURR POSITION / FILTER ARRAY MORE THAN THAT / GO TO 0 SCROLL / SCROLL TO THIS NEXT ONE





//NEXT FUNCTION
// on next click scroll to ...
$('#i_next').on('click',function(){

        
var curr
var arr = [];
        
function lister() {        
curr = $('#slide'+active_frame).scrollTop();
$('#slide'+active_frame).scrollTo(0);        
// get active frame position of headers and push them to array


$('#slide'+active_frame).find('.t_link').each(function(){

var x = $(this).offset().top;
var y = parseInt(x);
arr.push(y);
});

};

lister();        
        
function transporter(){        
//using filter with greater value then current create new array
        //arr2 = arr.filter(FLTR);
        
let x     = parseInt(curr);
let i     = 0;
for (; i<arr.length && arr[i] <= x; i++);
console.log(i);        
//now first one is greater
//TRGT = arr2[0];
//TRGT2 = Math.ceil(TRGT);
var TARGET = arr[i];
console.log(TARGET);
//  $('#slide'+active_frame).scrollTo(0);
  $('#slide'+active_frame).scrollTo(TARGET+1);
};


   transporter();
     
});    

        
        








        
//PREV FUNCTION
// on next click scroll to ...
$('#i_prev').on('click',function(){

        
var curr
var arr = [];
        
function lister() {        
curr = $('#slide'+active_frame).scrollTop();
$('#slide'+active_frame).scrollTo(0);        
// get active frame position of headers and push them to array


$('#slide'+active_frame).find('.t_link').each(function(){

var x = $(this).offset().top;
var y = parseInt(x);
arr.push(y);
});

};

lister();        
        
function transporter(){        
//using filter with lesser value then current 
        
let x     = parseInt(curr);
let i     = 0;
for (; i<arr.length && arr[i] <= x; i++);
console.log(i);        
//now first one is greater
//TRGT = arr2[0];
//TRGT2 = Math.ceil(TRGT);
var TARGET = arr[i-1];
console.log(TARGET);
//  $('#slide'+active_frame).scrollTo(0);
  $('#slide'+active_frame).scrollTo(TARGET-5);
};


   transporter();
     
});    

        

      
        


        
        
        