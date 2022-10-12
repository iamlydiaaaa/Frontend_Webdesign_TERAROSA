$(document).ready(function(){
    function display(){}
    //메인페이지 첫화면 텍스트 등장
    $("#section1 .main_txt h2").addClass("sec1_show1");
    $("#section1 .main_txt p").addClass("sec1_show1 delay");
    
    //header의 WHOLESALE 클릭하면 준비중 뜨기
    $(".gnb_list>li:eq(1)").on('click',function(e){
        e.preventDefault();
        alert('준비중입니다.');
    })
    
    //휠 스크롤 기능
    var n=1;
        $("#main section").on("mousewheel",function(event,delta){
            //delta가 -1이면 위로, delta가 1이면 아래로
            n = $(this).attr("data-n") - delta;
            var target = $("#section"+n).offset().top;
            $("body,html").stop().animate({"scrollTop":target},1500);

        })
    
    
    //nav 클릭 기능
    function gnbClick(e) {
        e.preventDefault();
        var num = $(this).index()
        scrollNum = $('section').eq(num).offset().top
        $('html,body').stop().animate({
            scrollTop: scrollNum
        }, 1000)
    }
    $('#nav>ul>li').on('click', gnbClick)
    
    //오른쪽 nav 버튼
    $(window).on('scroll',function(){
        var n;
        var sc = $(window).scrollTop();
        
        function navScroll(n){
            if(sc >= n*1000 && sc < (n+1)*1000){
                $("#nav li a").removeClass("on");
                $("#nav li:eq("+n+") a").addClass("on");
            }
        }
        navScroll(0);
        navScroll(1);
        navScroll(2);
        navScroll(3);
        navScroll(4);
        navScroll(5);
        navScroll(6);
        
        if((sc>=610 && sc < 3400) || sc>5450){
            $("#nav .on, #logo a").addClass("red");
        } else{
            $("#nav .on, #logo a").removeClass("red");
        }
    });

    
    //account 호버하면 밑에 메뉴 등장
    $(".account_wrap").mouseenter(function(){
        $(".menu_account").show();
        return false;
    }).mouseleave(function(){
        $(".menu_account").hide();
        return false;
    })
    
    //section2, 스크롤 내리면 하나씩 등장
    $(window).on('scroll',function(){
        var sc = $(window).scrollTop();
        //$("#logo a").text(sc); //스크롤넘버 임시표시
        
        function showSection(n){
            var n;
            $("#section"+n+" .line").css({
                "opacity":"1",
                "top": "100px"
            });
            $("#section"+n+" .theme02_img").css({
                "opacity":"1",
                "top":"0"
            });
            $("#section"+n+" .theme02_txt h2").css({
                "opacity":"1"
            });
            $("#section"+n+" .theme02_txt p").css({
                "opacity":"1"
            });
        }
        if(sc>700) { showSection(2); }
        if(sc>1600) { showSection(3); }
        if(sc>2500) { showSection(4); }
        if(sc>3500) {     
            $("#section5 .theme01_txt h2").css({"opacity":"1"});
            $("#section5 .theme01_txt p").css({"opacity":"1"});
        }
    })
    
    
      
    //section6 클릭기능
    $("#section6>div>div").click(function(){
        $(this).addClass("ban_on1"); //가로폭 50%로 늘리기
        $("#section6>div>div").not(this).addClass("ban_off"); //나머지 배너 숨기기
        $("#banner_close").show(); //닫기버튼 보이기
        $(".banner_hidden",this).show(); //숨겨진 항목 보이기
    })
    
    //section6, 배너에서 닫기버튼 누르면
    $("#banner_close").click(function(){
        $("#section6>div>div").removeClass("ban_on1");
        $("#section6>div>div").not(this).removeClass("ban_off");
        $("#banner_close").hide(); //닫기버튼 숨기기
        $(".banner_hidden").hide(); //숨겨진 항목 숨기기
    })  
    
    
    
    
    
})
