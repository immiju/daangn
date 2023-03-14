$(document).ready(function(){
    
    /* .cont show */
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(".cont",{
        scrollTrigger:{
            trigger:".cont",
            marker:"true",
            start:"top 70%"
        },
        markers:true,
        duration:1,
        ease:"ease-in",
        x:-2000,
        stagger:{
            each:0.2,
            from:"first"
        }
    });
    
    /* mo-menu open */
    $("#momenu-open").on("click",function(){
        $("#gnb-wrap").stop().slideToggle(300);
    });
    
    /**/
    $(".logo").on("click",function(){	
        $("html, body").stop().animate({scrollTop:0},500);
    });	

});
