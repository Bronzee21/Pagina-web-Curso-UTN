
/* video */ 
let video=document.querySelector('video');

function play(){
	if (video.paused)
		video.play();
}
function pause(){
	if (video.play)
		video.pause();
}

function stop(){
	video.pause();
	video.currentTime = 0;
}