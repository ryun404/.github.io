$(document).ready(function(){
 
    $(function() {
        $('#btn').on('click', function(event){
            event.preventDefault();
            $(this).toggleClass('active');
            $('#menu').toggleClass('visible');
        });
    
        $('#menuin').on('click', function(){
            $('#btn').removeClass('active');
            $('#menu').removeClass('visible');
        });
    });
// ------------햄버거버튼끝--------

  $(function(){
        $('#skills').on('click',function(event){
            event.preventDefault();
            $('#skillbox' ).css( { 'display' : 'block' } );
            $('#skillbox' ).css( { 'right' : '-100%' } );
            $('#skillbox' ).animate( { right: '0px' }, { duration: 700 } );
        });

        $('#skillbye').on('click',function(event){
            event.preventDefault();
            $('#skillbox').animate({'right':'-100%'},{duration:700});
        });
    });
// ------------스킬끝---------
  
var slideWidth = $('.slider').width();
var i=0;
        $('#nextbtn').click(function(){
            i++;
            if(i>=3){
                i=0;
            }
            $('.slider').animate({
               left:-slideWidth*i 
            });
        });
         $('#prevbtn').click(function(){
            i--;
            if(i<0){
                i=0;
            }
            $('.slider').animate({
               left:-slideWidth*i 
            });
        });
// -------포폴슬라이드끝------
   
   let count = 0;
    var transitionEnd = true;

    $('section').on('wheel', fullpage),{ passive: false };

    function tEnd(){
        transitionEnd = false;
        setTimeout(function(){
            transitionEnd = true;
        },1000);
    }
    
    function fullpage(e){
        e.preventDefault();
        
        if(!transitionEnd){
            return;
        }

        var m = e.originalEvent.wheelDelta;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            if(count > 0){
                count--;
                console.log(count);
                var prev =  $(this).prev().offset().top;
                    $('html,body').stop().animate({
                    'scrollTop': prev
                },{duration : 1000});
                tEnd();
            }
        }
        else {
            if(count < $('section').length-1){
                count++;
                console.log(count);
                var next=  $(this).next().offset().top;
                
          $('html,body').stop().animate({
            'scrollTop': next
        },{duration : 1000});
                tEnd();
            }
        }
        
}
// --------섹션 스크롤 끝-----------


});//end//