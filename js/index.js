$(document).ready(function(){
  $('#fullpage').fullpage({
      //options here
      navigation: true,
      navigationPosition: 'right',
      css3:false,
      navigationTooltips: [
        'Intro',
        'Profile',
        'Web Publishing',
        'Graphic Design'
      ],
      afterLoad: function (anchorLink, index) {
        if (index == 1){
        }
        if (index == 2){
          $("#fp-nav ul").css({"display":"block"});
          $(".profileLeftGlass").css({"left":"15px","opacity":"1"});
          $(".profileRightGlass").css({"right":"0","opacity":"1"});
          $(".myprofileText").css({"display":"block","left":"-50px"});
        }
        if (index == 3) {
          $("#fp-nav ul").css({"display":"block"})
          $(".view").css({"opacity":"1"});
          $(".bottombar").css({"left":"50%","opacity":"1"})
          $(".arrows").css({"opacity":"1"});
          $(".decoText").css({"display":"block"});
        }
        if (index == 4) {
          $(".designTitle h3").css({"display":"block"});
        }
      }
  });
});