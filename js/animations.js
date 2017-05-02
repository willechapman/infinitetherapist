

  // /* ----- MOBILE NAVIGATION -----*/
  // $('.js-hamburger, .js-main-nav a').click(function() {
  //   var icon = $('.js-hamburger i');
  //   var nav = $('.js-main-nav');

  //   if ($(window).width() < 767) {
  //     nav.slideToggle(200);

  //     if (icon.hasClass('ion-navicon-round')) {
  //       icon.addClass('ion-close-round');
  //       icon.removeClass('ion-navicon-round');
  //     } else {
  //       icon.addClass('ion-navicon-round');
  //       icon.removeClass('ion-close-round');
  //     }
  //   }
  // });

  // $(window).resize(function() {
  //   var icon = $('.js-hamburger i');
  //   var nav = $('.js-main-nav');

  //   if ($(window).width() > 767) {
  //     nav.css("display", "block");
  //     icon.addClass('ion-close-round');
  //     icon.removeClass('ion-navicon-round');
  //   } else {
  //     nav.css("display", "none");
  //     icon.addClass('ion-navicon-round');
  //     icon.removeClass('ion-close-round');
  //   }
  // });


  /* ----- ANIMATIONS ON SCROLL -----*/
var $subInfoA = $('.subInfoA');

$subInfoA.waypoint (function (){
  $subInfoA.addClass('js-subInfo-animate-a fadeInLeft');
}, { offset: '85%' });

var $subInfoB = $('.subInfoB');

$subInfoB.waypoint (function (){
  $subInfoB.addClass('js-subInfo-animate-b fadeInLeft');
}, { offset: '85%' });

var $subInfoC = $('.subInfoC');

$subInfoC.waypoint (function (){
  $subInfoC.addClass('js-subInfo-animate-c fadeInLeft');
}, { offset: '85%' });


