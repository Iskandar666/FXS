$(document).ready(function(){
    $(".contrl-item:nth-child(2)").click(function(){
        $(".contrl-item:nth-child(1)").removeClass("conterl-active");
        $(this).addClass("conterl-active")
        $(".nav-show").addClass("show-active");
        $(".nav-show").removeClass("show-back")
    })
    
    $(".contrl-item:nth-child(1)").click(function(){
        $(".contrl-item:nth-child(2)").removeClass("conterl-active");
        $(this).addClass("conterl-active");
        $(".nav-show").addClass("show-back")
        $(".nav-show").removeClass("show-active")
    })

    $(".footer-content").mouseover(function(e){
        $(".footer-intro").addClass("footer-intro-active")
    },function(e){
        $(".footer-intro").removeClass("footer-intro-active")
    })
});
