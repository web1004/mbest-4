/* 반응형, 모바일 링크 연결==================================== */
function MM_openBrWindow(theURL,winName,features){
  window.open(theURL,winName,features);
}

/* 퍼블리싱 slide swiper====================================== */
const pubSwiper = new Swiper('.pub_swiper .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  spaceBetween: 0,
  loop: true,
});

//퍼블리싱 slide_desc 
const pubDescInner = document.querySelectorAll('.pub_desc_inner li');

pubSwiper.on('slideChange', function() {
  const activeSlideIndex = pubSwiper.realIndex;

  pubDescInner.forEach((li, index) => {
    if (activeSlideIndex === index) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
});


/* 모바일 slide swiper============================================ */
const mobSwiper = new Swiper('.mob_swiper .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  spaceBetween: 0,
  loop: true,
});

//모바일 slide_desc
const mobDescInner = document.querySelectorAll('.mob_desc_inner li');

mobSwiper.on('slideChange', function() {
  const mactiveSlideIndex = mobSwiper.realIndex;

  mobDescInner.forEach((li, index) => {
    if (mactiveSlideIndex === index) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
});

//모바일 어플 뷰페이지
$(".mslide.mslide2, .mdesc_2 button").click(function(){

  $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기

  $(".mpop>li").show(); //각 목록의 내용
  $("#mpopup").stop().fadeIn(); //검정배경
  $('.pop_body').scrollTop(0);
});


/* 상단 nav바=========================================== */
$(document).ready(function(){
  /* 메뉴 클릭 */
  $(".gnb li").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  /* 스크롤위치 메뉴 활성화 */
  $(window).scroll(function(){
    let scroll=$(this).scrollTop();
    $("#txt1").text(scroll);

    //첫화면~ABOUT에서 보이지 않게
    if(scroll>=2700 && scroll<8000){
      $("nav").addClass("show");
    }else{
      $("nav").removeClass("show");
    };

    //PUBLISHING + RESPONSIVE
    if(scroll>=2700 && scroll<4499){
      $(".gnb li:nth-child(1)").addClass("active");
    }else{
      $(".gnb li:nth-child(1)").removeClass("active");
    };

    //MOBILE
    if(scroll>=4500 && scroll<5399){
      $(".gnb li:nth-child(2)").addClass("active");
    }else{
      $(".gnb li:nth-child(2)").removeClass("active");
    };

    //DESIGN
    if(scroll>=5400 && scroll<6299){
      $(".gnb li:nth-child(3)").addClass("active");
    }else{
      $(".gnb li:nth-child(3)").removeClass("active");
    };
  });


  /* DESIGN 탭메뉴=================================================== */
  $(".tab_menu li").click(function(){

    $(this).siblings().removeClass("tab_active");
    $(this).addClass("tab_active");

    let result = $(this).attr("data-alt");
    $(".tab_contents>div").removeClass("active");
    $("#" + result).addClass("active");
  });


  /* Web Design Modal============================================ */
  //각 목록을 클릭했을때
  //UX·UI DESIGN------------------------------
  $(".content_list.cl1>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지번호
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기

    $(".pop>li").eq(g_pop).show(); //각 목록의 내용
    $("#popup").stop().fadeIn(); //검정배경
    $('.pop_body').scrollTop(0);

  });

  //이전다음버튼
  $(".left_btn").click(function(){
    $('.pop_body').scrollTop(0);

    if(g_pop>0){
      $(".pop>li").eq(g_pop).stop().fadeOut();
      g_pop--;
      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    };

  });

  $(".right_btn").click(function(){
    $('.pop_body').scrollTop(0);

    if(g_pop<5){
      $(".pop>li").eq(g_pop).stop().fadeOut();
      g_pop++;
      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    };

  });

  //WEB DESIGN ----------------------------------
  $(".content_list.cl2>li").click(function(){

    g_pop2=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop2+1); //오른쪽 상단 페이지번호
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기

    $(".pop2>li").eq(g_pop2).show(); //각 목록의 내용
    $("#popup2").stop().fadeIn(); //검정배경
    $('.pop_body').scrollTop(0);

  });

  //이전다음버튼
  $(".left_btn").click(function(){
    $('.pop_body').scrollTop(0);

    if(g_pop2>0){
      $(".pop2>li").eq(g_pop2).stop().fadeOut();
      g_pop2--;
      $(".g_page span:nth-child(1)").text(g_pop2+1);
      $(".pop2>li").eq(g_pop2).stop().fadeIn();
    };

  });

  $(".right_btn").click(function(){
    $('.pop_body').scrollTop(0);

    if(g_pop2<7){
      $(".pop2>li").eq(g_pop2).stop().fadeOut();
      g_pop2++;
      $(".g_page span:nth-child(1)").text(g_pop2+1);
      $(".pop2>li").eq(g_pop2).stop().fadeIn();
    };

  });

  //close버튼(공통)
  $(document).mouseup(function (e){
    var ModalClose = $("#popup, #popup2, #mpopup");      
    if(ModalClose.has(e.target).length == 0){
      ModalClose.fadeOut(400); 
      $(".pop>li, .pop2>li").stop().fadeOut();
      $("html").css({"overflow-y":"scroll"});
    }      
  }); 

  $(document).keydown(function(e){
    var code = e.keyCode || e.which;     
    if (code == 27) {
        $('#popup, #popup2, #mpopup').fadeOut();
        $("html").css({"overflow-y":"scroll"});
    }
  });

  $('#popup .btn_close, #popup2 .btn_close, #mpopup .btn_close').click(function(){
    $('#popup, #popup2, #mpopup').fadeOut();
    $("html").css({"overflow-y":"scroll"});
  });

});