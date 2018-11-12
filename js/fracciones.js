document.addEventListener('DOMContentLoaded', function(){

var titulo_saned = document.getElementById('titulo_saned')
var titulo_receta = document.getElementById('titulo_receta')
var titulo_intranet = document.getElementById('titulo_intranet')
var fracciones_top_capas = document.getElementById('fracciones_top_capas')



// EVENTO SCROLL
//...........................................
window.addEventListener('scroll', fracciones)



// Llamada con el scroll
//......................
function fracciones()
{
	// Section 1
	//...................................................................
	if(titulo_saned.getBoundingClientRect().top > window.innerHeight / 2)
	{
		fraction_1()
	}

	// Section 2
	//...................................................................
	if(titulo_saned.getBoundingClientRect().top  < window.innerHeight / 2
	&& titulo_receta.getBoundingClientRect().top > window.innerHeight / 2)
	{
		fraction_2()
	}

	// Section 3
	//...................................................................
	if(titulo_receta.getBoundingClientRect().top   < window.innerHeight / 2
	&& titulo_saned.getBoundingClientRect().top    < window.innerHeight / 2
	&& titulo_intranet.getBoundingClientRect().top > window.innerHeight / 2)
	{
		fraction_3()
	}

	// Section 4
	//...................................................................
	if(titulo_intranet.getBoundingClientRect().top < window.innerHeight / 2)
	{
		fraction_4()
	}
}





// Ocultar capas
//................
function opacidad()
{
	fracciones_top_capas.children[0].style.color = "transparent"
	fracciones_top_capas.children[1].style.color = "transparent"
	fracciones_top_capas.children[2].style.color = "transparent"
	fracciones_top_capas.children[3].style.color = "transparent"
}
opacidad()




// Mostrar fracción 1
//...................................................
fracciones_top_capas.children[0].style.color = "#000"




function fraction_1()
{
	opacidad()
	fracciones_top_capas.style.top = "30%"
	fracciones_top_capas.children[0].style.color = "#000"

	// Perspectiva
	fracciones_top_capas.children[0].style.transform = "rotateX(0deg)"
	fracciones_top_capas.children[1].style.transform = "rotateX(80deg)"
}

function fraction_2()
{
	opacidad()
	fracciones_top_capas.style.top = "-5%"
	fracciones_top_capas.children[1].style.color = "#000"

	// Perspectiva
	fracciones_top_capas.children[0].style.transform = "rotateX(80deg)"
	fracciones_top_capas.children[1].style.transform = "rotateX(0deg)"
	fracciones_top_capas.children[2].style.transform = "rotateX(80deg)"
}

function fraction_3()
{
	opacidad()
	fracciones_top_capas.style.top = "-40%"
	fracciones_top_capas.children[2].style.color = "#000"

	// Perspectiva
	fracciones_top_capas.children[1].style.transform = "rotateX(80deg)"
	fracciones_top_capas.children[2].style.transform = "rotateX(0deg)"
	fracciones_top_capas.children[3].style.transform = "rotateX(80deg)"
}

function fraction_4()
{
	opacidad()
	fracciones_top_capas.style.top = "-70%"
	fracciones_top_capas.children[3].style.color = "#000"

	// Perspectiva
	fracciones_top_capas.children[2].style.transform = "rotateX(80deg)"
	fracciones_top_capas.children[3].style.transform = "rotateX(0deg)"
}


});