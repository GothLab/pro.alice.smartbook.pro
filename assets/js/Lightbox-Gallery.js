function IMGS () {
        $('.img-fluid').on('click',function(){

parent = $(this).parent().parent();


});
        
        
        $('img').not('.main').hide();
        
   baguetteBox.run('[data-bss-baguettebox]', { animation: 'fadeIn', afterShow: imagerX });
}
