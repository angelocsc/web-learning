var showName = $("#showName")
function addContent(){
	showName.append("<p>New Line</p>");
}

showName.on("click" , addContent);