
document.addEventListener("DOMContentLoaded", function()
{
	var container_video = document.getElementById('video')
	var play = document.getElementById('play')


	function centrar_play()
	{
		play.style.left = (container_video.offsetWidth / 2) - (play.offsetWidth / 2) + 'px'
		play.style.top = (container_video.offsetHeight / 2) - (play.offsetHeight / 2) + 'px'
	}
	window.addEventListener('resize', centrar_play)
	centrar_play()

	setTimeout(function()
	{
		centrar_play()
	}, 1000)
})


