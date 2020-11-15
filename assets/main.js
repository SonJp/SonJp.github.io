$(document).ready(function($){
    
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 180){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        } 
    });
    // toggle menu/navbar script
    $('.navbar__menu-btn').click(function(){
        $('.navbar .navbar__menu').toggleClass("active");
        $('.navbar .navbar__menu-btn i').toggleClass("active"); // nhan 2 lan se mo class
    });

       // scroll-up-bnt click
    $('.scroll-up-btn').click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
    });
    
    //typing animation script

    var typed = new  Typed('.typing', {
        strings: [ 'Web Developer','Student','Blogger'],
        typeSpeed:100,
        backSpeed: 70,
        stratDelay:100,
        loop:true

    });   
    
    
    $('.skills__fortfolio-navbar nav ul li a').click(function(){
        var list = $(this).data('class');
        list = '.'+list;

        if(list == '.all'){
            $('.skills__contents-fortfolio .skills__contents-fortfolio-show ').isotope({filter: '*'});
        }else{
            $('.skills__contents-fortfolio .skills__contents-fortfolio-show ').isotope({filter: list});
        }

        return false;
        
    });
    $('[data-fancybox="prevew"]').fancybox({
           thumbs : {
             autoStart : true
           }
     });

     
});







    
    
 
 