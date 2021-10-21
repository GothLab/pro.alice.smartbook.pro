
// EPISIDE
var EPD = "p0";

// AUTHORS

let AUR = ['ORIG', 'ADAK', 'AOLE', 'AROJ', 'NDEM', 'PSOL', 'ana', 'tana'];

var AUR1 = AUR[4];
var AUR2 = AUR[0];
var AUR3 = AUR[6];

// FRAME .a1text .a2text .a3text
var FRE = "a2text";




// on click show toaster & attr EPISODE 

$("#translation").find('tr').on( "click", function() {
    $('#selector').toast('show');
    EPD = $(this).attr('class');
    });
$("#original").find('tr').on( "click", function() {
    $('#selector').toast('show');
    EPD = $(this).attr('class');
    });
$("#annotation").find('tr').on( "click", function() {
    $('#selector').toast('show');
    EPD = $(this).attr('class');
    });


$('.a3btn').on("click", function() { FRE = 'a3text'; loader(); });
$('.a2btn').on("click", function() { FRE = 'a2text'; loader(); });
$('.a1btn').on("click", function() { FRE = 'a1text'; loader(); });

function loader() {
        var PAH = './text/' + AUR +'.html' + ' ' + '.'+EPD;  
        $('.'+FRE).load(PAH);
};







$('.enext').on("click", function() { 

var X2 = 'a2text';
var Y2 = AUR2;
var Z = parseInt(EPD.replace(/[^0-9.]/g, ""));
var Z1 = 'p' + (Z + 1);
EPD = Z1;
var PAH = './text/' + Y2 +'.html' + ' ' + '.'+Z1;
$('.'+X2).load(PAH);
        
var X1 = 'a1text';
var Y1 = AUR1;
        
PAH = './text/' + Y1 +'.html' + ' ' + '.'+Z1;
$('.'+X1).load(PAH);
        
 var X3 = 'a3text';
 var Y3 = AUR3;    
        
PAH = './text/' + Y3 +'.html' + ' ' + '.'+Z1;
$('.'+X3).load(PAH);     
        

        });


$('.eprev').on("click", function() { 
        
        
        var X2 = 'a2text';
var Y2 = AUR2;
var Z = parseInt(EPD.replace(/[^0-9.]/g, ""));
var Z1 = 'p' + (Z - 1);
EPD = Z1;
var PAH = './text/' + Y2 +'.html' + ' ' + '.'+Z1;
$('.'+X2).load(PAH);
        
var X1 = 'a1text';
var Y1 = AUR1;
        
PAH = './text/' + Y1 +'.html' + ' ' + '.'+Z1;
$('.'+X1).load(PAH);
        
 var X3 = 'a3text';
 var Y3 = AUR3;    
        
PAH = './text/' + Y3 +'.html' + ' ' + '.'+Z1;
$('.'+X3).load(PAH); 
        
        

});











// ARROWS CHANGE FOR FRAME 1 TRANSLATION


$('#navcol-2').find('td').on("click", function() { 
        var AURX = $(this).attr('aur');
        var PAH = './text/' + AURX +'.html' + ' ' + '.'+EPD; 
        $('.a1text').load(PAH);
        var AURXX = AUR.indexOf(AURX);
        AUR1 = AUR[AURXX];      
});


$('#a1prev').on("click", function() { 
var AURX = AUR.indexOf(AUR1) -1; 
//get index of current AUR2 and add + 1

       var AURXX = AUR[AURX];
//get name of Author with index+1 = NDEM for ex.

        var PAH = './text/' + AURXX +'.html' + ' ' + '.'+EPD; 
        $('.a1text').load(PAH);
        // create path and load into A1
        
            var AURXXX = AUR.indexOf(AURXX);
        //get index of current AUTHOR
        
        AUR1 = AUR[AURXXX]; 
        //set it as index from array
             
});

$('#a1next').on("click", function() { 
var AURX = AUR.indexOf(AUR1) +1; 
//get index of current AUR2 and add + 1

       var AURXX = AUR[AURX];
//get name of Author with index+1 = NDEM for ex.

        var PAH = './text/' + AURXX +'.html' + ' ' + '.'+EPD; 
        $('.a1text').load(PAH);
        // create path and load into A1
        
            var AURXXX = AUR.indexOf(AURXX);
        //get index of current AUTHOR
        
        AUR1 = AUR[AURXXX]; 
        //set it as index from array
        
        
});

















// CHANGE FOR FRAME 2 TRANSLATION


$('#navcol-1').find('td').on("click", function() { 
        var AURX = $(this).attr('aur');
        var PAH = './text/' + AURX +'.html' + ' ' + '.'+EPD; 
        $('.a2text').load(PAH);
        var AURXX = AUR.indexOf(AURX);
        AUR1 = AUR[AURXX];      
});



// Chapters

$('#chapters').find('td').on("click", function() { 
       var EPDX = $(this).attr('class');
        
var PAH1 = './text/' + AUR1 +'.html' + ' ' + '.'+EPDX;  
          $('.a1text').load(PAH1);
        
var PAH2 = './text/' + AUR2 +'.html' + ' ' + '.'+EPDX; 
          $('.a2text').load(PAH2);
        
var PAH3 = './text/' + AUR3 +'.html' + ' ' + '.'+EPDX; 
          $('.a3text').load(PAH3);

        
        
        EPD = EPDX;
        
        });

