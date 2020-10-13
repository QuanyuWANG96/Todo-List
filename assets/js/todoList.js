

//check out Specific Todos By Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});


//click on X to delete Todo   (delete only when ul(span) was been clicked)
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//阻止传播
	event.stopPropagation();
});


$("#input1").keypress(function(event){
	if(event.which === 13){
		todoText = $(this).val();
		$(this).val("");
		$("#ul1").append("<li><span><i class=\"fas fa-trash-alt\"></i> </span>"+todoText+"</li>");
	}
});

$("#input2").keypress(function(event){
	if(event.which === 13){
		todoText = $(this).val();
		$(this).val("");
		$("#ul2").append("<li><span><i class=\"fas fa-trash-alt\"></i> </span>"+todoText+"</li>");
	}
});

$("#input3").keypress(function(event){
	if(event.which === 13){
		todoText = $(this).val();
		$(this).val("");
		$("#ul3").append("<li><span><i class=\"fas fa-trash-alt\"></i> </span>"+todoText+"</li>");
	}
});

$("#input4").keypress(function(event){
	if(event.which === 13){
		todoText = $(this).val();
		$(this).val("");
		$("#ul4").append("<li><span><i class=\"fas fa-trash-alt\"></i> </span>"+todoText+"</li>");
	}
});

$("#input5").keypress(function(event){
	if(event.which === 13){
		todoText = $(this).val();
		$(this).val("");
		$("#ul5").append("<li><span><i class=\"fas fa-trash-alt\"></i> </span>"+todoText+"</li>");
	}
});


$("#plus1").click(function(){
	$("#input1").fadeToggle();
})

$("#plus2").click(function(){
	$("#input2").fadeToggle();
})

$("#plus3").click(function(){
	$("#input3").fadeToggle();
})

$("#plus4").click(function(){
	$("#input4").fadeToggle();
})

$("#plus5").click(function(){
	$("#input5").fadeToggle();
})

