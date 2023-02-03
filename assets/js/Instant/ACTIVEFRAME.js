var active_frame = 'A';

if (active_frame === 'A') {
$('#i_a').addClass('ACT');
$('#i_b').removeClass('ACT');        
};


if (active_frame === 'B') {        
$('#i_b').addClass('ACT');
$('#i_a').removeClass('ACT');       
};



$('#i_a').on('click',function(){
$('#i_a').addClass('ACT');
$('#i_b').removeClass('ACT');      
});

$('#i_b').on('click',function(){
$('#i_b').addClass('ACT');
$('#i_a').removeClass('ACT');         
});