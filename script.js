$(function () {
   
    animateDiv();

    function makeNewPosition() {

        var h = $('.gameArea').height() - 50;
        var w = $('.gameArea').width() - 50;

        var nh = Math.floor(Math.random() * h - 20 );
        var nw = Math.floor(Math.random() * w - 20 );

        return [nh, nw];

    }

    function animateDiv() {

        var newq = makeNewPosition();
        $('.cocroach').delay(100).animate({ top: newq[0], left: newq[1] }, function () {
            
            animateDiv();
            
        });
        
    };

    $('a.cocroach').click(
  
       function () {
            $('.insect').removeClass('alive');
            $('.insect').addClass('dead');
            $('.cocroach').animate({ opacity: '0' }, 10);
                    
            setTimeout(function () {
            
                $('.insect').addClass('alive');
                $('.insect').removeClass('dead');
                $('.cocroach').animate({ opacity: '1' });
                $('#score').html(++score); 

            },500);
                       
       }       
  
    );
    
    
    
});

var score = 0;
