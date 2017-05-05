// Button Animation
var $btnA = $('.btnA'); 

$btnA.waypoint (function (){
	$btnA.addClass('js-btnA-animate fadeInDown')
}, { offset: '95%'});

var $btnB = $('.btnB');

$btnB.waypoint (function (){
	$btnB.addClass('js-btnB-animate fadeInDown')
}, { offset: '90%'});

var $btnC = $('.btnC');

$btnC.waypoint (function (){
	$btnC.addClass('js-btnC-animate fadeInDown')
}, { offset: '85%'});