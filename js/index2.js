$(document).ready(function(){

  //브라우저 높이 가져오기
  let wh = $(window).height();

  /*브라우저 창 사이즈 변경시___________ */
  $(window).resize(function(){
    wh = $(window).height();
    $("html,body").stop().animate({ scrollTop:wh*a },700); 
  });


  /* 탑메뉴 클릭시______________________ */
  $("#gnb li,#dot p").click(function(){
    let num=$(this).index();
    $("html,body").stop().animate({ scrollTop:wh*num },700); 
    $("#dot p").eq(num).addClass("active");
		$("#dot p").eq(num).siblings().removeClass("active");
  });
  

  /* 마우스휠__________________________ */
  let a = 0;  //페이지번호
	let area_n = $(".area").length;  //섹션개수
	let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll",function(e,delta) {

    e.preventDefault();  //요소의 기본기능해제
    if ( wheel ) {
      let n = $(this).index();

      if(delta < 0) { //휠을 아래로 돌렸다면
        a = n+1;
      }else{ //휠을 위로 돌렸다면
        a = n-1;
      }

      if ( a <= 0 ) { a = 0; }
      if ( a >= area_n-1 ) { a = area_n-1; }

      $("#tt").text(a); 
      $("#dot p").eq(a).addClass("active");
			$("#dot p").eq(a).siblings().removeClass("active");
      $("html,body").stop().animate({ scrollTop:wh*a },700); 	

    }

  });


  /* 스크롤이벤트______________________ */
  $(window).scroll(function(){ 
  
    let sc = $(document).scrollTop();

    if((sc >=0) && (sc < wh)) {   //한영역 높이가 wh임
      a=0; 
      $("#tt").text(a);
    }

    if((sc >= wh) && (sc < wh*2)) {
      a=1; 
      $(".about_contents p:nth-child(2)").delay(200).animate({top:"0"},700,function(){
        $(".about_contents p:nth-child(1)").delay(200).animate({right:"250px",opacity:"1"},700);
      });
    }

    if((sc >= wh*2) && (sc < wh*3)) {   
      a=2; 
      $("#tt").text(a);

    }

    if(sc >= wh*3) {   
			a=3; 
      $("#tt").text(a);
		}    

  });

  let num = 0;


  $(".skills li").click(function(){
    $(".toolTip").css({"display":"none"});
    $("#"+$(this).attr("data-alt")).fadeIn(500);
  });
  $(".R_arrow").click(function(){
    if(num < 3){
      $(".viewBox").stop(true,true).animate({marginLeft:"-=1400px"});
      num++;
      $(".viewPop").css({"display":"none"});
    }
    if(num == 0){
      $(".htmlPer").text('12.9%')
      $(".cssPer").text('9.1%');
      $(".jsPer").text('78.0%');
      $(".phone").removeClass('active');
      $(".computer").addClass('active');
      $(".tablet").removeClass('active');
      $(".V_com a").attr("href","http://ejh118.dothome.co.kr/");
      $(".V_Tablet").removeAttr("href");
      $(".V_Phone").removeAttr("href");
      $(".mobileIframe").attr("src","");
      $(".tabletIframe").attr("src","");
      $(".ready").css({"display":"inline"});
      $(".readyTablet").css({"display":"block"});
    }
    if(num == 1){
      $(".htmlPer").text('59.8%')
      $(".cssPer").text('30.2%');
      $(".jsPer").text('10.0%');
      $(".phone").addClass('active');
      $(".computer").removeClass('active');
      $(".tablet").removeClass('active');
/*       $(".V_com").removeAttr("href");
      $(".V_Tablet").removeAttr("href");
      $(".V_Phone").attr("href"); */
      $(".V_com a").removeAttr("href");
      $(".mobileIframe").attr("src","https://ejh118.github.io/KASI/");
      $(".tabletIframe").attr("src","");
      $(".ready").css({"display":"none"});
      $(".readyTablet").css({"display":"block"});
    }
    if(num == 2){
      $(".htmlPer").text('35.8%');
      $(".cssPer").text('63.2%');
      $(".jsPer").text('1.0%');
      $(".phone").addClass('active');
      $(".computer").addClass('active');
      $(".tablet").addClass('active');
      $(".mobileIframe").attr("src","http://jme07013.dothome.co.kr/");
      $(".tabletIframe").attr("src","http://jme07013.dothome.co.kr/");
      $(".V_com a").attr("href","http://jme07013.dothome.co.kr/");
      $(".ready").css({"display":"none"});
      $(".readyTablet").css({"display":"none"});
    }
    if(num == 3){
      $(".htmlPer").text('51.8%');
      $(".cssPer").text('48.2%');
      $(".jsPer").text('Not use');
      $(".phone").removeClass('active');
      $(".computer").addClass('active');
      $(".tablet").removeClass('active');
/*       $(".V_com").attr("href","https://ejh118.github.io/web_first-onepage/");
      $(".V_Tablet").removeAttr("href");
      $(".V_Phone").removeAttr("href") */
      $(".mobileIframe").attr("src","");
      $(".tabletIframe").attr("src","");
      $(".ready").css({"display":"inline"});
      $(".readyTablet").css({"display":"block"});
      $(".V_com a").attr("href","https://ejh118.github.io/web_first-onepage/");
    }

  });
  $(".L_arrow").click(function(){
    if(num <= 4, num > 0){
      $(".viewBox").stop(true,true).animate({marginLeft:"+=1400px"});
      num--;
      $(".viewPop").css({"display":"none"});
    }
    if(num == 0){
      $(".htmlPer").text('12.9%')
      $(".cssPer").text('9.1%');
      $(".jsPer").text('78.0%');
      $(".phone").removeClass('active');
      $(".computer").addClass('active');
      $(".tablet").removeClass('active');
      $(".V_com a").attr("href","http://ejh118.dothome.co.kr/")
      $(".V_Tablet").removeAttr("href");
      $(".V_Phone").removeAttr("href");
      $(".mobileIframe").attr("src","");
      $(".tabletIframe").attr("src","");
      $(".ready").css({"display":"inline"});
      $(".readyTablet").css({"display":"block"});
    }
    if(num == 1){
      $(".htmlPer").text('59.8%')
      $(".cssPer").text('30.2%');
      $(".jsPer").text('10.0%');
      $(".phone").addClass('active');
      $(".computer").removeClass('active');
      $(".tablet").removeClass('active');
      $(".V_com a").removeAttr("href");
      $(".V_Phone").attr("href","https://ejh118.github.io/KASI/")
      $(".mobileIframe").attr("src","https://ejh118.github.io/KASI/");
      $(".tabletIframe").attr("src","");
      $(".ready").css({"display":"none"});
      $(".readyTablet").css({"display":"block"});
    }
    if(num == 2){
      $(".htmlPer").text('35.8%');
      $(".cssPer").text('63.2%');
      $(".jsPer").text('1.0%');
      $(".phone").addClass('active');
      $(".computer").addClass('active');
      $(".tablet").addClass('active');
      $(".mobileIframe").attr("src","http://jme07013.dothome.co.kr/");
      $(".tabletIframe").attr("src","http://jme07013.dothome.co.kr/");
      $(".V_com a").removeAttr("href","http://jme07013.dothome.co.kr/");
      $(".ready").css({"display":"none"});
      $(".readyTablet").css({"display":"none"});
    }
    if(num == 3){
      $(".htmlPer").text('51.8%');
      $(".cssPer").text('48.2%');
      $(".jsPer").text('Not use');
      $(".phone").removeClass('active');
      $(".computer").addClass('active');
      $(".tablet").removeClass('active');
/*       $(".V_com").attr("href","https://ejh118.github.io/web_first-onepage/");
      $(".V_Tablet").removeAttr("href");
      $(".V_Phone").removeAttr("href") */
      $(".mobileIframe").attr("src","");
      $(".tabletIframe").attr("src","");
      $(".ready").css({"display":"inline"});
      $(".readyTablet").css({"display":"block"});
      $(".V_com a").removeAttr("href","https://ejh118.github.io/web_first-onepage/");
    }
  });

  $(".V_Phone").click(function(){
    $(".mockBack1").slideDown();
    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
      });
  });

  $(".V_Tablet").click(function(){
    $(".mockBack2").slideDown();
    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
      });
  });

  $(".greencarBtn").click(function(){
    $(".mockBack1").slideDown();
    $('body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
      });
  });
  $(".mockUpBackBtn").click(function(){
    $(".mockBack1").slideUp();
    $(".mockBack2").slideUp();
    $('body').off('scroll touchmove mousewheel');
  });

  $(".viewBtn").click(function(){
    $(".viewPop").slideDown();
  });

  $(".exit").click(function(){
    $(".viewPop").slideUp();
  });

  $('.viewBtn').click(function(){
    $('.viewmorePage').stop().fadeIn();
    // $('body').addClass('fixed');
    $('body').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
    });
  
    $('.exit').click(function(){
    $('.pop_up').stop().fadeOut();
    // $('body').removeClass('fixed');
    $('body').off('scroll touchmove mousewheel');
    });
    $('.arrows').click(function(){
      $('.pop_up').stop().fadeOut();
      // $('body').removeClass('fixed');
      $('body').off('scroll touchmove mousewheel');
      });


      $(".designList_uiux li").click(function(){
        $(".uiuxPopUp").scrollTop(0);
        $(".designList_uiux li").css({"width":"80px","height":"80px"});
        $(".designList_uiux").css({"top":"50%","left":"1100px","width":"10%","height":"800px","justify-content":"center","background-color":"transparent"});
        $(".designTitle").css({"opacity":"0","top":"400px"});
/*         $('.uiuxPopUp').stop().fadeIn(); */
        $(".uiuxBack").addClass("active");
        $("#fp-nav ul li").css({"display":"none"});
        $(".uiux_1 img").attr("src","img/uiux_nexon_80px_01.png")
        $(".uiux_2 img").attr("src","img/uiux_shinhan_80px_02.png")
        $(".uiux_3 img").attr("src","img/uiux_peoplecar_80px_03.png")
        $(".uiux_4 img").attr("src","img/uiux_bhs_80px_04.png")
        $(".uiux_5 img").attr("src","img/uiux_airseoul_80px_05.png")
        $(".uiux_6 img").attr("src","img/uiux_dokdo_80px_06.png")
        $(".uiux_7 img").attr("src","img/uiux_unicef_80px_07.png")
        $(".uiux_8 img").attr("src","img/uiux_billboard_80px_08.png")

        $(".uiuxPopUp").fadeOut(500);
        $("#"+$(this).attr("data-alt")).fadeIn(500);
        $(".designSelectBtn").css({"display":"none"})

        // $('body').addClass('fixed');
        $('body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
        });
      });
/*       $("#uiuxPop1").click(function(){
        $(".uiux1_obj").fadeIn();
      });
 */

        $('.backBtn').click(function(){
          $('.pop_up').stop().fadeOut();
          // $('body').removeClass('fixed');
          $('body').off('scroll touchmove mousewheel');
          });

        $(".uiuxPopUpIn").scroll(function () {
            var height = $(document).scrollTop();
            console.log(height);	// 스크롤할때마다 해당 스크롤 위치 좌표값(높이)
        });

        $(".uiuxBack").click(function(){
          $(this).removeClass("active");
          $(".uiuxPopUp").scrollTop(0);
          $(".designList_uiux li").css({"width":"150px","height":"150px","opacity":"1"});
          $(".designList_uiux").css({"top":"50%","left":"50%","width":"100%","height":"400px","justify-content":"flex-start","background-color":"transparent","border-radius":"0"});
          $('.uiuxPopUp').stop().fadeOut();
          // $('body').removeClass('fixed');
          $('body').off('scroll touchmove mousewheel');
          $(".designTitle").css({"opacity":"1","top":"50%"});
          $(".uiux_1 img").attr("src","img/uiux_nexon_150px_01.png")
          $(".uiux_2 img").attr("src","img/uiux_shinhan_150px_02.png")
          $(".uiux_3 img").attr("src","img/uiux_peoplecar_150px_03.png")
          $(".uiux_4 img").attr("src","img/uiux_bhs_150px_04.png")
          $(".uiux_5 img").attr("src","img/uiux_airseoul_150px_05.png")
          $(".uiux_6 img").attr("src","img/uiux_dokdo_150px_06.png")
          $(".uiux_7 img").attr("src","img/uiux_unicef_150px_07.png")
          $(".uiux_8 img").attr("src","img/uiux_billboard_150px_08.png")
          $("#fp-nav ul li").css({"display":"flex"});
          $(".uiuxInfoBox").scrollTop();
          $(".designSelectBtn").css({"display":"flex"})
          $(".designListBoxGlass").css({"left":"-20px"})
        });

        $(".toggleBtn").click(function(){
          $(".toggleBtnIn").toggleClass("active");
        });

        $(".twoDSelectBtn").click(function(){
          $(".designList_uiux").css({"display":"none"});
          $(".designList_TwoD").css({"display":"flex"});
          $(".designTitle h3").text("2D Graphic Design")
          $(".designTitle_info").text("포토샵, 일러스트레이터를 이용한 2D 그래픽 디자인입니다. 모든 작업물은 로로지 개인 작업물로만 이루어져있습니다.")
        });
        $(".uiuxdesignSelectBtn").click(function(){
          $(".designList_TwoD").css({"display":"none"});
          $(".designList_uiux").css({"display":"flex"});
          $(".designTitle h3").text("UI/UX Design")
          $(".designTitle_info").text("포토샵, 일러스트레이터, 피그마를 이용한 UI/UX 디자인입니다. 모든 작업물은 오로지 개인 작업물로만 이루어져있습니다.")
        });



        $(".uiuxPopUp").scroll(function(){
          $("#txt1").text($(this).scrollTop());
        });
        $("#uiuxPop3").scroll(function(){

          let scollpos=$(this).scrollTop();
      
          if(scollpos > 2000){
            $("#uiuxPop3").css({"background-color":"#000"})
            $(".uiuxInfo_content3_2").css({"opacity":"0"})
            $(".uiuxInfo_content3_3").css({"opacity":"1"})
          }else{
            $("#uiuxPop3").css({"background-color":"#efefef"})
            $(".uiuxInfo_content3_2").css({"opacity":"1"})
            $(".uiuxInfo_content3_3").css({"opacity":"0"})
          }
        });

        $(".uiuxPopUp").on('mousewheel',function(e){ 
          var wheel = e.originalEvent.wheelDelta; 
          if(wheel>0){ 
            //스크롤 올릴때 
            $(".designList_uiux").css({"left":"1100px"});
          } else { 
            //스크롤  내릴때 
            $(".designList_uiux").css({"left":"1250px"});
              } 
        });
        $(".twoDPopUp").on('mousewheel',function(e){ 
          var wheel = e.originalEvent.wheelDelta; 
          if(wheel>0){ 
            //스크롤 올릴때 
            $(".designList_TwoD").css({"top":"93vh"});
          } else { 
            //스크롤  내릴때 
            $(".designList_TwoD").css({"top":"106vh"});
              } 
        });

        /* 2D 디자인 */

        $(".designList_TwoD li").click(function(){
          $(".twoDPopUp").scrollTop(0);
          $(".designList_TwoD li").css({"width":"80px","height":"80px"});
          $(".designList_TwoD").css({"top":"93%","left":"23.5%","width":"1100px","height":"100px","justify-content":"center","background-color":"#46464654","border-radius":"40px","box-shadow":""});
          $(".designTitle").css({"opacity":"0","top":"400px"});
  /*         $('.uiuxPopUp').stop().fadeIn(); */
          $(".uiuxBack").addClass("active");
          $("#fp-nav ul li").css({"display":"none"});
          $(".twoD_1 img").attr("src","img/2D_icon_80px_01.png")
          $(".twoD_2 img").attr("src","img/2D_icon_80px_02.png")
          $(".twoD_3 img").attr("src","img/2D_icon_80px_03.png")
          $(".twoD_4 img").attr("src","img/2D_icon_80px_04.png")
          $(".twoD_5 img").attr("src","img/2D_icon_80px_05.png")
          $(".twoD_6 img").attr("src","img/2D_icon_80px_06.png")
          $(".twoD_7 img").attr("src","img/2D_icon_80px_07.png")
          $(".twoD_8 img").attr("src","img/2D_icon_80px_08.png")
          $(".twoD_9 img").attr("src","img/2D_icon_80px_09.png")
          $(".twoD_10 img").attr("src","img/2D_icon_80px_10.png")
          $(".designSelectBtn").css({"display":"none"})
          $(".designListBoxGlass").css({"left":"1500px"})
  
          $(".twoDPopUp").fadeOut(200);
          $("#"+$(this).attr("data-alt")).fadeIn(200);
  
  
          // $('body').addClass('fixed');
          $('body').on('scroll touchmove mousewheel', function(event) {
          event.preventDefault();
          event.stopPropagation();
          return false;
          });
        });
        $(".uiuxBack").click(function(){
          $(this).removeClass("active");
          $(".twoDPopUp").scrollTop(0);
          $(".designList_TwoD li").css({"width":"150px","height":"150px","opacity":"1"});
          $(".designList_TwoD").css({"top":"50%","left":"50%","width":"100%","height":"400px","justify-content":"flex-start","background-color":"transparent","border-radius":"0"});
          $('.twoDPopUp').stop().fadeOut();
          // $('body').removeClass('fixed');
          $('body').off('scroll touchmove mousewheel');
          $(".designTitle").css({"opacity":"1","top":"50%"});
          $(".twoD_1 img").attr("src","img/2D_icon_150px_01.png")
          $(".twoD_2 img").attr("src","img/2D_icon_150px_02.png")
          $(".twoD_3 img").attr("src","img/2D_icon_150px_03.png")
          $(".twoD_4 img").attr("src","img/2D_icon_150px_04.png")
          $(".twoD_5 img").attr("src","img/2D_icon_150px_05.png")
          $(".twoD_6 img").attr("src","img/2D_icon_150px_06.png")
          $(".twoD_7 img").attr("src","img/2D_icon_150px_07.png")
          $(".twoD_8 img").attr("src","img/2D_icon_150px_08.png")
          $(".twoD_9 img").attr("src","img/2D_icon_150px_09.png")
          $(".twoD_10 img").attr("src","img/2D_icon_150px_10.png")
          $("#fp-nav ul li").css({"display":"flex"});
          $(".uiuxInfoBox").scrollTop();
        });

        $(".twoDPopUp").scroll(function(){
          $("#txt1").text($(this).scrollTop());
        });
        $("#twoD_1").scroll(function(){

          let scollpos=$(this).scrollTop();

          if(scollpos > 100){
            $(".twoGraphicDesignCircle").css({"opacity":"0.1"});
          }else{
            $(".twoGraphicDesignCircle").css({"opacity":"1"});
          }
        });
        $(".neon_arrowAll").click(function(){

          $(".uiuxPopUp").animate({scrollTop:"900"},500);
          $(".twoDPopUp").animate({scrollTop:"900"},500);
        });

        $(".twoDPopUp").scroll(function(){
          var scrollTop = $(this).scrollTop();
          var innerHeight = $(this).innerHeight();
          var scrollHeight = $(this).prop('scrollHeight');
          
          if(scrollTop + innerHeight >= scrollHeight) {
            $(".designList_TwoD").css({"top":"93vh"});
          }
        });
        $(".uiuxPopUp").scroll(function(){
          var scrollTop = $(this).scrollTop();
          var innerHeight = $(this).innerHeight();
          var scrollHeight = $(this).prop('scrollHeight');
          
          if(scrollTop + innerHeight >= scrollHeight) {
            $(".designList_uiux").css({"left":"1100px"});
          }
        });

});