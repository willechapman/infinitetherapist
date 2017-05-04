var $handImage = $('.handImage');

$handImage.waypoint (function (){
  $handImage.addClass('js-handImage-animate fadeInLeft')
}, { offset:'85%' });

var $detailBtn = $('.detailBtn');

$detailBtn.waypoint (function (){
	$detailBtn.addClass('js-detailBtn-animate fadeInDown')
}, { offset:'80%'});