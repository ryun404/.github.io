 $(document).ready(function(){
 $('#slide').hover(function(){
    $('#menubox',this).stop().slideDown(600);
 },
 function(){
     $('#menubox',this).stop().slideUp(600);
 });
// ---------------------------------
$(window).scroll(function (){
   $('.hide').each( function(i){
           var bottom_of_element =$(this).offset().top + $(this).outerHeight();
           var bottom_of_window =$(window).scrollTop() + $(window).height();
           if(bottom_of_window ++ > bottom_of_element){
               $(this,'.hideleft').animate({'opacity':'1','margin-left':'0px'},500);
               $(this,'.hideright').animate({'opacity':'1','margin-right':'0px'},500);
           }
   });
});
$(window).scroll( function(){
   $('.hidetext').each( function(i){
       var bottom_of_object = $(this).offset().top + $(this).outerHeight();
       var bottom_of_window = $(window).scrollTop() + $(window).height();
       if( bottom_of_window ++ > bottom_of_object/2 ){
           $(this).animate({'opacity':'1'},3000);
       }
   }); 
   var scrollTop = $(document).scrollTop();
   if(scrollTop < 200) {
       scrollTop = 200;
   }
   $('#quickmenu').stop();
   $('#quickmenu').animate ( {"top": scrollTop});
});



        
    });//end//
    