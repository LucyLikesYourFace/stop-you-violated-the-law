var audioViolated = new Audio("stop.mp3");
var audioBlood = new Audio("blood.mp3");
var audioBattle = new Audio("battle3.mp3");

var ready = false;

var dialouge;

window.addEventListener("load",function(){
	audioViolated.play();
	ready = true;
	dialogue = document.getElementById("dialogue");
});
window.addEventListener("click", function(){
	if (ready == true) {
		ready = false;
		audioViolated.pause();
		audioBlood.play();
		dialogue.innerHTML = "Then Pay with your blood!"
	}
});
audioBlood.addEventListener("ended", function(){
	audioBattle.play();
	dialogue.innerHTML = "";
});
