$(document).ready(function(){
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
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        var ht=$(window).height();
        if(sct>=ht){
            $('#quickmenu').css({
                opacity : 1,
            });
        }
        else if(sct<ht){
            $('#quickmenu').css({
                opacity : 0,
            });
        }
    });
    $('#blue').click(function(){
        $('#redone').css({
            display : 'none',
        });
        $('#purpleone').css({
            display : 'none',
        });
        $('#blueone').css({
            display : 'block',
        });
        $('#redone > h3').css({
            display : 'none',
        });
        $('#purpleone > h3').css({
            display : 'none',
        });
        $('#blueone > h3').css({
            display : 'block',
        });
    });
    $('#red').click(function(){
       
     $('#redone').css({
            display : 'block',
        });
        $('#purpleone').css({
            display : 'none',
        });
        $('#blueone').css({
            display : 'none',
        });
        $('#redone > h3').css({
            display : 'block',
        });
        $('#purpleone > h3').css({
            display : 'none',
        });
        $('#blueone > h3').css({
            display : 'none',
        });
    });  
    $('#purple').click(function(){
       
     $('#redone').css({
            display : 'none',
        });
        $('#purpleone').css({
            display : 'block',
        });
        $('#blueone').css({
            display : 'none',
        });
        $('#redone > h3').css({
            display : 'none',
        });
        $('#purpleone > h3').css({
            display : 'block',
        });
        $('#blueone > h3').css({
            display : 'none',
        });
        
    });

    
    
    
    
 
});