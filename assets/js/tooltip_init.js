//Find all links and convert them to tooltips

function tooltip_init() {
$('#textA, #textB').find('img').each(function(){  
$(this).addClass('img-fluid');

 });
        
$('#textA, #textB').find('a').each(function(){
$(this).attr('data-bs-toggle','tooltip').attr({
      title: $(this).attr('data-href')
    })
    .removeAttr('aria-label').removeAttr('aria-label-position').removeAttr('target');
});
        
        
         
             $(function () {
        $("[data-bs-toggle='tooltip']").tooltip();
    });
        
};