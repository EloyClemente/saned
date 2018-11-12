document.addEventListener('DOMContentLoaded', function(){


// ILUSTRACIONES LATERALES
//.........................
var macarrones = document.getElementById('ilustracion-macarrones')
var bowl = document.getElementById('ilustracion-bowl')
var tomates = document.getElementById('ilustracion-tomates')
var pimientos = document.getElementById('ilustracion-pimientos')
var olla = document.getElementById('ilustracion-olla')
var sandwich = document.getElementById('ilustracion-sandwich')
var pasta = document.getElementById('ilustracion-pasta')
var champis = document.getElementById('ilustracion-champis')



macarrones.style.left = "100%"
bowl.style.left       = "100%"
tomates.style.left    = "-40%"
pimientos.style.left  = "100%"
olla.style.left       = "-10%"
sandwich.style.left   = "100%"
pasta.style.left      = "-20%"
champis.style.left    = "100%"




function detectar()
{
	var viewport = window.innerHeight

	if(macarrones.getBoundingClientRect().top < viewport / 2)
	{
		macarrones.style.left = "80%"
	}
	else
	{
		macarrones.style.left = "100%"
	}


	if(bowl.getBoundingClientRect().top < viewport / 2)
	{
		bowl.style.left = "79.8%"
	}
	else
	{
		bowl.style.left = "100%"
	}


	if(tomates.getBoundingClientRect().top < viewport / 2)
	{
		tomates.style.left = "-19.8%"
	}
	else
	{
		tomates.style.left = "-35%"
	}


	if(pimientos.getBoundingClientRect().top < viewport / 2)
	{
		pimientos.style.left = "85.8%"
	}
	else
	{
		pimientos.style.left = "100%"
	}


	if(olla.getBoundingClientRect().top < viewport / 2)
	{
		olla.style.left = "0%"
	}
	else
	{
		olla.style.left = "-10%"
	}


	if(sandwich.getBoundingClientRect().top < viewport / 2)
	{
		sandwich.style.left = "86%"
	}
	else
	{
		sandwich.style.left = "100%"
	}


	if(pasta.getBoundingClientRect().top < viewport / 2)
	{
		pasta.style.left = "0%"
	}
	else
	{
		pasta.style.left = "-18%"
	}


	if(champis.getBoundingClientRect().top < viewport)
	{
		setTimeout(function()
		{
			champis.style.left = "85%"
		}, 1000)
	}
	else
	{
		champis.style.left = "100%"
	}
}


window.addEventListener('scroll', detectar)







// ESCALAR LOGO
//.....................................................................

var capa_logo = document.getElementById('capa_logo')
var idioma_box = document.getElementById('idioma_box')
var container_logo_article = document.getElementById('container_logo_article')




window.addEventListener('scroll', escalarLogo)
window.addEventListener('resize', escalarLogo)

function escalarLogo()
{
	if(window.innerWidth > 480)
	{
		if(container_logo_article.getBoundingClientRect().bottom > 0)
		{
			idioma_box.style.top      = "22px"
			capa_logo.style.transform = "scale(0,0)"
		}
		else
		{
			idioma_box.style.top      = "-10px" // !!!!
			capa_logo.style.transform = "scale(1,1)"
		}
	}
	else
	{
		if(container_logo_article.getBoundingClientRect().bottom > 0)
		{
			idioma_box.style.top      = "4px"
			capa_logo.style.transform = "scale(0,0)"
		}
		else
		{
			idioma_box.style.top      = "4px"
			capa_logo.style.transform = "scale(1,1)"
		}
	}
}










// FADE IN BODEGON LOGO
//........................................................
var bodegon_logo = document.querySelector('.bodegon-logo');


function fadeIn(elemento, intervalos){

	var opacidad   = 0;

	var iniciar = setInterval(function(){
	
				  opacidad =  opacidad + 0.01;

				  elemento.style.opacity = opacidad;

				  if(opacidad >= 1)
				  {
					clearInterval(iniciar);
				  }

	}, intervalos);
}
//.........................................................
fadeIn(bodegon_logo, 20);




// DESPLAZAMIENTO BODEGÓN LOGO
//.............................
setTimeout(function()
{
	bodegon_logo.style.top = "0px"
}, 500)
//..................................



var img_bodegon = document.getElementById('img_bodegon')

function cargarBodegon(event)
{
	if(event.propertyName == "top")
	{
		img_bodegon.src = "img/cabecera_Saned.gif"
	}
	
}
bodegon_logo.addEventListener('transitionend', cargarBodegon)



});















