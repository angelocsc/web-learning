//wait for fullly load
$(function(){
	var showName = $("#showName");
	var name = $("#Name");
	var input_form = $("#input_form");

	name.hide(500).delay(100).show(500)

	showName.on("click" , addContent);
	function addContent(){
		showName.addClass('special');
	}

	
	$("#myButton").on("click" , remove);

	function remove(){
		showName.fadeToggle(200);
	}
	
	$(".button").on("click",fadeEffect);
	function fadeEffect(){
		var panelID = $(this).attr('data-panel');
		$("#"+panelID).addClass('special');
	}
});