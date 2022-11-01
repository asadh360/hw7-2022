var video;

// page load: Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

// play button: Play the video and update the volume information.
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol_slider  = document.getElementById("slider");
	document.getElementById("volume").innerHTML = vol_slider.value + "%";
});

// pause button: Pause the video.
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

/* slow down: Slow the current video speed by 10% each time 
the button is clicked and log the new speed to the console. */
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slowed Video. New speed: " + video.playbackRate);
});

/* speed up: Increase the current video speed each time
the button is clicked and log the new speed to the console.
Change it by an amount proportional to the slow down.*/
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Sped-up Video. New speed: " + video.playbackRate);
});

/* skip ahead: Advance the current video by 10 seconds.
If the video length has been exceeded go back to the start of the video - no farther.
Log the current location of the video. */
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = (video.currentTime + 10 > video.duration) ?
		0 : video.currentTime + 10;
	console.log("Skipping Ahead. Current Location: " + video.currentTime);
});

// mute: Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	this.innerHTML = (video.muted) ? "Unmute" : "Mute";
});

// volume slider: Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.getElementById("volume").innerHTML = this.value + "%";
});

// styled: Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// original: Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});