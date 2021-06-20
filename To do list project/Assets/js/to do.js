//Strike through specific to do by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		//taking new to do text
		let toDoText = $(this).val();
		//clear input
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + toDoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(200);
});