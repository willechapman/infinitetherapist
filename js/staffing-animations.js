// Staffing Solutions
var $staffSolLeft = $('.staffSolLeft');

$staffSolLeft.waypoint(function (){
	$staffSolLeft.addClass('js-staffSolLeft-animate fadeInDown');
}, { offset: '85%'});

var $staffSolMiddle = $('.staffSolMiddle');

$staffSolMiddle.waypoint(function (){
	$staffSolMiddle.addClass('js-staffSolMiddle-animate fadeInDown');
}, { offset: '80%'});

var $staffSolRight = $('.staffSolRight');

$staffSolRight.waypoint(function (){
	$staffSolRight.addClass('js-staffSolRight-animate fadeInDown');
}, { offset: '75%'});


// More Details Button
var $btn = $('.detailBtn');

$btn.waypoint (function (){
	$btn.addClass('js-btn-animate fadeInDown');
}, { offset: '85%'});