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
        var i=0;
        $('#nextbtn').click(function(){
            i++;
            if(i>=7){
                i=0;
            }
            $('#slider').animate({
               left:-900*i 
            });
        });
         $('#prevbtn').click(function(){
            i--;
            if(i<0){
                i=0;
            }
            $('#slider').animate({
               left:-900*i 
            });
        });
   


});







