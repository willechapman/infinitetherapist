

// ABOUT Animation Section
var $quoteTop = $('.quoteTop')

$quoteTop.waypoint (function (){
	$quoteTop.addClass('js-quote-animate fadeInDown')
}, { offset:'85%'});

var $quoteBottom = $('.quoteBottom')

$quoteBottom.waypoint (function (){
	$quoteBottom.addClass('js-quote-animate fadeInDown')
}, { offset:'85%'});

// More Details Animation Section
var $handImage = $('.handImage');

$handImage.waypoint (function (){
  $handImage.addClass('js-handImage-animate fadeInLeft')
}, { offset:'85%' });

var $detailBtn = $('.detailBtn');

$detailBtn.waypoint (function (){
	$detailBtn.addClass('js-detailBtn-animate fadeInDown')
}, { offset:'80%'});