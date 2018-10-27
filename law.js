var audioViolated = new Audio("stop.mp3");
var audioBlood = new Audio("blood.mp3");
var audioBattle = new Audio("battle3.mp3");

var ready = false;

window.addEventListener("load",function(){
	audioViolated.play();
	ready = true;
});
window.addEventListener("click", function(){
	if (ready == true) {
		ready = false;
		audioViolated.pause();
		audioBlood.play();
	}
});
audioBlood.addEventListener("ended", function(){
	audioBattle.play();
});
