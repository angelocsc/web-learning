$(function(){
	var showName = $("#showName")
	function addContent(){
		showName.append("new content");
	}

	showName.on("click" , addContent);
	$("#myButton").on("click" , remove);

	function remove(){
		showName.fadeToggle(200)
	}
});