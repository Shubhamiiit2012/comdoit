$(document).ready(function(){
	var i = 0;
	$("p").click(function(){
		$(this).hide(500,function(){alert("It is now hidden.")});
	});
	$("#addButton").click(function(){
		$($(".replicate")[i++]).clone().insertBefore(".addBefore")
		$($(".replicate")[i]).html("Hello");
		$($(".replicate")[i]).html("Hello");
		alert(i);
	});
});



//alert($("p").size());

//$("#1234").hide(2000);
