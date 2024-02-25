$(document).ready(function () {
	
$(".small a").click(function(e){
if($(".big img").attr('src') !== $(this).attr("href")){

	$(".big img").hide().attr("src", $(this).attr("href")).fadeIn(1000);
}
return false;
})
$(".button").click(function(){
	$('.gallery').slideToggle(500);
	if($(".button").text()=='-'){
		$('.button').text('+')
	}
	else{
		$('.button').text('-')}
})

$(".small a img").click(function(){
	$(".small a img").fadeTo(0,1).css({
		'border':'none'
	})
	$(this).fadeTo(500,0.5).css({
		'border':'1px solid red'
	})

$(".small a img").dblclick( function(){
		$(".big img").attr('src', $(".big a").attr('href')).fadeIn(1000);
	});
});
   

});