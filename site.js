$( document ).ready(function() {
   $(".contact-btn").hover(function(){
       $(this).animate({
           'opacity':'0.5'
       },95);
   },
       function () {
      $(this).animate({
          'opacity':'1'
      });
   });

    $(".icon-container a").hover(function(){
        $(this).animate({
            'color':'red',
            'font-size':'40px'
        },50);
    },
    function(){
        $(this).animate({
           'color':'white',
            'font-size':'25px'
        });
    });

    // Tooltip
    $(function () {
        $( document).tooltip({
            position:{
                my: "center bottom-20",
                at: "center top",
                using: function( position, feedback ) {
                    $( this ).css( position );
                    $( "<div>" )
                        .addClass( "arrow" )
                        .addClass( feedback.vertical )
                        .addClass( feedback.horizontal )
                        .appendTo( this );
                }
            }
        });
    });

    // Avatar Shake on Mouse Hover
    $(".avatar").hover(function(){
        $(this).effect("bounce");
    });
});