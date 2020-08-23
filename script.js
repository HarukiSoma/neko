$(function () {

  //headerのnav//
  $('.header-content').hide();
  $('.header-name').hover(function() {
    $(this).find('ul').stop().show(200);
  },function() {
    $(this).find('ul').stop().hide(400);
  });

  //mainのslick//
  $('.main-slick').slick({
    arrows: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: true,
  });

  //newsのslick//
  $('.main-news').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1000,
    autoplaySpeed: 10000,
    autoplay: true,
  });

  //scrollの表示非表示//
  $('.scroll').hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll').fadeIn();
      } else {
        $('.scroll').fadeOut();
       }
  });
  //footerでstop//
  $(window).scroll(function () {
    //ドキュメントの高さ
    var height = $(document).height();
    //ページトップから現在地までの高さ
    var position = $(window).height() + $(window).scrollTop();
    //フッターの高さ
    var footer = $("footer").height();
    if ( height - position < footer ) { 
      $('.scroll').css({
          position : "absolute",
          top : -280
        });
    } else { 
      $('.scroll').css({
          position : "fixed",
          top: "auto"
        });
    }
  });

  //スクロールしてトップへ戻る
  $('.scroll').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });

  //menusを開く//
  $('.menus').hide();
  $('.menu-icon').click(function(){
    $('.menus').slideToggle();
    //menuのみscrollする=本文のscrollを固定//
    $('main , footer').fadeToggle();
  });

  //menu-barを開く//
  $('.menu-list').hide();
  $('.list-slide').click(function(){
    $(this).find('.menu-list').slideToggle();
    $(this).toggleClass('open');
    return false;
  });

  //メディアクリの時の下のボタン//
  var startPos = 0,winScrollTop = 0;
  $(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('.media-btn').addClass('hide');
    } else {
        $('.media-btn').removeClass('hide');
    }
    startPos = winScrollTop;
  });

});