$(document).ready(function(){
	var i = 0;
	var j=0;
	$("p").click(function(){
		$(this).hide(500,function(){alert("It is now hidden.")});
	});
	$("#addButton").click(function(){
		$($(".replicate")[i++]).clone().insertBefore(".addBefore")
		$($(".replicate")[i]).html('<p>'+$("#textInput").val()+'</p><nav><ul class = "listAppend">  <!-- Unordered List --><li >In progress.</li></ul></nav><input type="text" id="listInput"><button class="listAddButton">Add</button>');
		alert("Collaborator "+i+" : "+$("#textInput").val()+" added");
		$("#textInput").val("");
	});
	$(".listAddButton").click(function(){
		$("li").clone().appendTo("li");
		$("li").html("<li>"+$("#listInput").val()+"</li>");
	});
	
});



//alert($("p").size());

//$("#1234").hide(2000);
