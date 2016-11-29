$( document ).ready(function() {
   $(".contact-btn").hover(function(){
       $(this).animate({
           'opacity':'0.5'
       },100);
   },
       function () {
      $(this).animate({
          'opacity':'1'
      });
   });
});