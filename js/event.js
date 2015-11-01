$(function(){
	$('.tabs .box:not(.cur)').find('ul').slideUp();
	$('body')
		.on('click','.tabs .box h2',function(){
			//var index = $(this).parent().index();
			$('.tabs .box ul').slideUp();
			$('.tabs .box').removeClass('cur');
			$(this).next().slideDown();
			$(this).parent().addClass('cur');
		})
});