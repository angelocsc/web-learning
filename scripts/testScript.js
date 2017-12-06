function go(){
	alert('HI');
}


var myList = [1,2,3,4];

myList.forEach(function(value , index){
	console.log(value , index);
})

var Name = document.getElementById("Name");
var showNamePlace = document.getElementById("showName")

Name.addEventListener("input" , showName);

function showName(){
	showNamePlace.innerHTML = Name.value;
}