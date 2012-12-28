$(document).ready(function(){
	var i = 0;
	$("p").click(function(){
		$(this).hide(500,function(){alert("It is now hidden.")});
	});
	$("#addButton").click(function(){
		$($(".replicate")[i++]).clone().insertBefore(".addBefore")
		$($(".replicate")[i]).html('<p>'+$("#textInput").val()+'</p><nav><ul>  <!-- Unordered List --><li >Create Movie Structure</li></ul></nav>');
		alert("Collaborator "+i+" added");
	});
});



//alert($("p").size());

//$("#1234").hide(2000);
