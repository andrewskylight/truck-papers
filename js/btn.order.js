$(document).ready(function(){
	$('.add-to-cart').click(function(){
		
		var count=$('#count').val();

		$(this).animate({width:'0px'},'slow');
		$(this).animate({opacity:'0'},'0');
		$('#total-count').text(count);
		
		/*$(this).fadeOut('fast');*/
		
		$('.total-visible').animate({opacity:'1'},'fast');
	});
});