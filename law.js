var audioViolated = new Audio("stop.mp3");
var audioBlood = new Audio("blood.mp3");
var audioBattle = new Audio("battle3.mp3");

var state = 0;

var dialouge;


window.addEventListener("click", function(){
	if (state == 0) {
		guard.src = "img/guard.jpg"
		audioViolated.play();
		state = 1;
		guard = document.getElementById("guard")
		dialogue = document.getElementById("dialogue");
		dialogue.innerHTML = "Stop! You violated the law. Pay the court a fine or serve your sentence. Your stolen goods are now forfeit."
	} else if (state == 1) {
		state = 2;
		audioViolated.pause();
		audioBlood.play();
		dialogue.innerHTML = "Then Pay with your blood!"
	}
});
audioBlood.addEventListener("ended", function(){
	audioBattle.play();
	dialogue.innerHTML = "";
});
