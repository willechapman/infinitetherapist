

  /* ----- MOBILE NAVIGATION -----*/
  $('.js-hamburger, .js-main-nav a').click(function() {
    var icon = $('.js-hamburger i');
    var nav = $('.js-main-nav');

    if ($(window).width() < 901) {
      nav.slideToggle(500);

      if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
      } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
      }
    }
  });

  $(window).resize(function() {
    var icon = $('.js-hamburger i');
    var nav = $('.js-main-nav');

    if ($(window).width() > 901) {
      nav.css("display", "block");
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      nav.css("display", "none");
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });


  /* ----- ANIMATIONS ON SCROLL -----*/
// Header Section H1 and Button Animation
var $head = $('.head');

$head.waypoint (function (){
  $head.addClass('js-head-animate fadeInDown')
}, { offset:'100%' });

var $leftButton = $('.leftButton');

$leftButton.waypoint (function (){
  $leftButton.addClass('js-leftButton-animate fadeInRight')
}, { offset:'100%' });

var $rightButton = $('.rightButton');

$rightButton.waypoint (function (){
  $rightButton.addClass('js-rightButton-animate fadeInLeft')
}, { offset:'100%' });

// Brief Descript Section SubInfo Animation
var $subInfoA = $('.subInfoA');

$subInfoA.waypoint (function (){
  $subInfoA.addClass('js-subInfo-animate-a fadeInDown');
}, { offset: '85%' });

var $subInfoB = $('.subInfoB');

$subInfoB.waypoint (function (){
  $subInfoB.addClass('js-subInfo-animate-b fadeInDown');
}, { offset: '80%' });

var $subInfoC = $('.subInfoC');

$subInfoC.waypoint (function (){
  $subInfoC.addClass('js-subInfo-animate-c fadeInDown');
}, { offset: '75%' });

// Contact Section Image and Button Animation
var $mailImage = $('.mailImage');

$mailImage.waypoint (function (){
  $mailImage.addClass('js-mailImage-animate fadeInLeft'); 
}, { offset: '75%'});


var $contactBtn = $('.contactBtn')

$contactBtn.waypoint (function (){
  $contactBtn.addClass('js-contactBtn-animate fadeInRight')
}, { offset: '70%'});
