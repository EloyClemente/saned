
var video = document.getElementById('video')
var capa_video = document.getElementById('capa_video')
var ventana_modal = document.getElementById('ventana_modal')



video.addEventListener('click', mostrarModal)
ventana_modal.addEventListener('click', ocultarModal)




function mostrarModal()
{
	ventana_modal.style.display = "flex";

	setTimeout(function(){
		ventana_modal.style.opacity = "1";
		capa_video.load()
		capa_video.autoplay = true
	}, 500)
}



function ocultarModal()
{
	ventana_modal.style.transition = "all, .5s"

	ventana_modal.style.opacity = "0";

	capa_video.pause()

	setTimeout(function(){
		ventana_modal.style.display = "none";
	}, 500)
}



