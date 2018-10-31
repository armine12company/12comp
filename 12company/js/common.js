$(document).ready(function () {
    $(".navbar-nav>li").on("click", function (){
        $(this).addClass("active");
        $(this).next().removeClass("active");
        $(this).prev().removeClass("active");
    })
//    portfolio-block
        $(".portfolio_img_landing").css("display", "none");
        $(".portfolio_img_redesign").css("display", "none");
        $(".portfolio_img_app").css("display", "none");
    $(".all").on("click", function () {
        
        $(".page_count").text("01");
        $(".portfolio_img_all").css("display", "block");
        $(".portfolio_img_landing").css("display", "none");
        $(".portfolio_img_redesign").css("display", "none");
        $(".portfolio_img_app").css("display", "none");
    })
    $(".landing").on("click", function () {
        
        $(".page_count").text("02");
       
        $(".portfolio_img_all").css("display", "none");
        $(".portfolio_img_landing").css("display", "block");
        $(".portfolio_img_redesign").css("display", "none");
        $(".portfolio_img_app").css("display", "none");
    })
    $(".redesign").on("click", function () {
        
        $(".page_count").text("03");
       
        $(".portfolio_img_all").css("display", "none");
        $(".portfolio_img_landing").css("display", "none");
        $(".portfolio_img_redesign").css("display", "block");
        $(".portfolio_img_app").css("display", "none");
    })
    $(".app").on("click", function () {
        
        $(".page_count").text("04");
       
        $(".portfolio_img_all").css("display", "none");
        $(".portfolio_img_landing").css("display", "none");
        $(".portfolio_img_redesign").css("display", "none");
        $(".portfolio_img_app").css("display", "block");
    })
    
    // animation-block
    $(".carousel-indicators li:nth-child(1)").on("click", function () {
        $(this).addClass("active");
        $(".container_bg").css("background-image", "url('img/background-1.png')");
        $(".inner_wrap").css({
            "top": "0px"
    
        });
        $(".inner_block_3").addClass("rotated");
        $(".inner_block_1").removeClass("rotated");
        $(".inner_block_2").removeClass("rotated");
        $(".carousel-indicators li:nth-child(2)").removeClass("active");
        $(".carousel-indicators li:nth-child(3)").removeClass("active");
    });
    $(".carousel-indicators li:nth-child(2)").on("click", function () {
        $(this).addClass("active");
        $(".container_bg").css("background-image", "url('img/background-2.png')");
        $(".inner_wrap").css({
            "top": "-600px"
            
        });
        $(".inner_block_1").addClass("rotated");
        $(".inner_block_3").removeClass("rotated");
        $(".inner_block_2").removeClass("rotated");
        $(".carousel-indicators li:nth-child(1)").removeClass("active");
        $(".carousel-indicators li:nth-child(3)").removeClass("active");
    });
    $(".carousel-indicators li:nth-child(3)").on("click", function () {
        $(this).addClass("active");
        $(".container_bg").css("background-image", "url('img/background-3.png')");
        $(".inner_wrap").css({
            "top": "-1200px"
        });
        $(".inner_block_2").addClass("rotated");
        $(".inner_block_1").removeClass("rotated");
        $(".inner_block_3").removeClass("rotated");
        $(".carousel-indicators li:nth-child(1)").removeClass("active");
        $(".carousel-indicators li:nth-child(2)").removeClass("active");
    });


    // developrs animation
    $(".developer_info").css("display","none");
    $(".developer_info").eq(0).css("display","inline-block");
    $(".dev").eq(0).css("display","none");
    $(".developer_info").eq(3).css("display","inline-block");
    $(".dev").eq(3).css("display","none");
    
    $(".dev").eq(0).on("click", function () {
        $(this).css("display","none");
        $(".dev").eq(1).css("display","inline-block");
        $(".dev").eq(2).css("display","inline-block");
        $(".developer_info").eq(0).removeClass("first");
        $(".developer_info").eq(1).css("display","none");
         $(".developer_info").eq(0).css({"display":"inline-block"});
        $(".developer_info").eq(0).animate({
                 left: '27px',
             },"slow");
             $(".developer_info").eq(1).animate({
                left: '270px',
            },"slow");
            $(".developer_info").eq(2).animate({
                left: '270px',
            },"slow");
    });
    $(".dev").eq(1).on("click", function () {
        $(this).css("display","none");
        $(".developer_info").eq(0).removeClass("first");
        $(".dev").eq(0).css("display","inline-block");
        $(".dev").eq(2).css("display","inline-block");
        $(".developer_info").eq(0).css("display","none");
         $(".developer_info").eq(1).css({"display":"inline-block"});
        $(".developer_info").eq(1).animate({
                 left: '27px',
             },"slow");
             $(".developer_info").eq(0).animate({
                left: '270px',
            },"slow");
            $(".developer_info").eq(2).animate({
                left: '270px',
            },"slow");
    });
    $(".dev").eq(2).on("click", function () {
        $(this).css("display","none");
        $(".dev").eq(1).css("display","inline-block");
        $(".dev").eq(0).css("display","inline-block");
        $(".developer_info").eq(0).removeClass("first");
        $(".developer_info").eq(1).css("display","none");
        $(".developer_info").eq(0).css("display","none");
         $(".developer_info").eq(2).css({"display":"inline-block"});
        $(".developer_info").eq(2).animate({
                 left: '27px',
             },"slow");
             $(".developer_info").eq(1).animate({
                left: '270px',
            },"slow");
            $(".developer_info").eq(0).animate({
                left: '270px',
            },"slow");
    });



    $(".dev").eq(3).on("click", function () {
        $(this).css("display","none");
        $(".dev").eq(4).css("display","inline-block");
        $(".dev").eq(5).css("display","inline-block");
        $(".developer_info").eq(3).removeClass("first");
        $(".developer_info").eq(4).css("display","none");
         $(".developer_info").eq(3).css({"display":"inline-block"});
        $(".developer_info").eq(3).animate({
                 left: '27px',
             },"slow");
             $(".developer_info").eq(4).animate({
                left: '270px',
            },"slow");
            $(".developer_info").eq(5).animate({
                left: '270px',
            },"slow");
    });
    $(".dev").eq(4).on("click", function () {
        $(this).css("display","none");
        $(".developer_info").eq(3).removeClass("first");
        $(".dev").eq(3).css("display","inline-block");
        $(".dev").eq(5).css("display","inline-block");
        $(".developer_info").eq(3).css("display","none");
         $(".developer_info").eq(4).css({"display":"inline-block"});
        $(".developer_info").eq(4).animate({
                 left: '27px',
             },"slow");
             $(".developer_info").eq(3).animate({
                left: '270px',
            },"slow");
    });
    $(".dev").eq(5).on("click", function () {
        $(this).css("display","none");
        $(".dev").eq(4).css("display","inline-block");
        $(".dev").eq(3).css("display","inline-block");
        $(".developer_info").eq().removeClass("first");
        $(".developer_info").eq(4).css("display","none");
        $(".developer_info").eq(3).css("display","none");
         $(".developer_info").eq(5).css({"display":"inline-block"});
        $(".developer_info").eq(5).animate({
                 left: '27px',
             },"slow");
             $(".developer_info").eq(4).animate({
                left: '270px',
            },"slow");
            $(".developer_info").eq(3).animate({
                left: '270px',
            },"slow");
    });
    
    // owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:7
            }
        }
    })
});