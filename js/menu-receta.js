
var section_3_container = document.getElementById('section_3_container')
var receta_bloque_1 = document.getElementById('receta_bloque_1')
var link_ingredientes = document.getElementById('link_ingredientes')
var parrafo_ingredientes = document.getElementById('parrafo_ingredientes')
var link_nutricion = document.getElementById('link_nutricion')
var parrafo_nutricion = document.getElementById('parrafo_nutricion')
var link_personas = document.getElementById('link_personas')
var parrafo_personas = document.getElementById('parrafo_personas')
var receta_titular = document.getElementById('receta_titular')
var mano_ingredientes = document.getElementById('mano_ingredientes')
var mano_nutricion    = document.getElementById('mano_nutricion')
var mano_personas     = document.getElementById('mano_personas')
var titular_ingredientes = '“Ingredients frescos i de gran qualitat”'
var titular_nutricion  
var titular_personas 




function traducir() // Titulares
{
	var clave = localStorage.getItem('idioma')

	if(clave == 'castellano')
	{
		titular_ingredientes = '"Ingredientes frescos y de gran calidad"'
		titular_nutricion    = '"Menús gourmet"'
		titular_personas     = '"Personas que aman lo que hacen"'
		receta_titular.children[0].innerHTML = titular_ingredientes
	}
	else if(clave == 'catalan')
	{
		titular_ingredientes = '“Ingredients frescos i de gran qualitat”'
		titular_nutricion    = '"Menús gourmet"'
		titular_personas      = '"Persones que estimen el que fan"'
		receta_titular.children[0].innerHTML = titular_ingredientes
	}
	else
	{
		titular_ingredientes = '"Fresh, top quality ingredients"'
		titular_nutricion    = '"Gourmet menus"'
		titular_personas      = '"People who love what they do"'
		receta_titular.children[0].innerHTML = titular_ingredientes
	}
}
traducir()







// Ingredientes abierto por defecto
//..............................................................
var altura_texto = parrafo_ingredientes.children[0].offsetHeight
parrafo_ingredientes.style.height = altura_texto + "px"


// Mano ingredientes visible
link_ingredientes.children[0].style.opacity = "1"



// Eventos
//.......................................................
link_ingredientes.addEventListener('click', ingredientes)
link_nutricion.addEventListener('click', nutricion)
link_personas.addEventListener('click', personas)




function ingredientes()
{
	var altura_texto = parrafo_ingredientes.children[0].offsetHeight

	parrafo_ingredientes.style.height = altura_texto + "px"
	parrafo_nutricion.style.height = "0px"
	parrafo_personas.style.height = "0px"





	margen(160)




	// Insertar titular
	//.............................
	titulares(titular_ingredientes)

	formatoCapa(160, 30)


	// Manos
	//............................................
	if(window.innerWidth > 450)
	{
		link_ingredientes.children[0].style.opacity = "1"
	}
	link_nutricion.children[0].style.opacity = "0"
	link_personas.children[0].style.opacity = "0"
}


function nutricion()
{
	var altura_texto = parrafo_nutricion.children[0].offsetHeight


	parrafo_ingredientes.style.height = "0px"
	parrafo_nutricion.style.height = altura_texto + "px"
	parrafo_personas.style.height = "0px"

	margen(250)



	// Insertar titular
	//..........................
	titulares(titular_nutricion)

	formatoCapa(220, 80)


	// Manos
	//............................................
	link_ingredientes.children[0].style.opacity = "0"

	if(window.innerWidth > 450)
	{
		link_nutricion.children[0].style.opacity = "1"
	}
	
	link_personas.children[0].style.opacity = "0"
}


function personas()
{
	var altura_texto = parrafo_personas.children[0].offsetHeight

	parrafo_ingredientes.style.height = "0px"
	parrafo_nutricion.style.height = "0px"
	parrafo_personas.style.height = altura_texto + "px"


	
	var altura = parrafo_personas.children[0].offsetHeight
	margen(altura)



	// Insertar titular
	//.........................
	titulares(titular_personas)

	// Cambiar formato
	//.................
	formatoCapa(145, 110)


	// Manos
	//............................................
	link_ingredientes.children[0].style.opacity = "0"
	link_nutricion.children[0].style.opacity = "0"

	if(window.innerWidth > 450)
	{
		link_personas.children[0].style.opacity = "1"
	}
}




// INSERTAR TITULARES
//.........................
function titulares(titular)
{
	// Ocultar
	//....................
	setTimeout(function(){
		receta_titular.style.opacity = "0"
	}, 300)
	

	// Escribir titular
	//....................
	setTimeout(function(){
		receta_titular.children[0].innerHTML = titular
	}, 1500)
}




// TAMAÑO Y POSICIÓN DE CAPA
//...........................
function formatoCapa(width, top)
{

	// Cambiar tamaño
	//....................
	setTimeout(function(){

		if(window.innerWidth > 850)
		{
			receta_titular.children[0].style.width = width + "px"
		}
		
		
		// Mostrar
		//................................
		receta_titular.style.opacity = "1"

	}, 1500)



	if(window.innerWidth > 850)
	{
		// Mover top
		//....................
		setTimeout(function(){
			receta_bloque_1.style.top   = top + "px"

		}, 2000)
	}
}






function margen(altura)
{
	if(window.innerWidth < 850)
	{
		section_3_container.style.marginBottom = (altura - 100) + "px"
	}
}


window.addEventListener('resize', function(){

	var altura_texto = parrafo_ingredientes.children[0].offsetHeight
	parrafo_ingredientes.style.height = altura_texto + "px"


	parrafo_nutricion.style.height = "0px"
	parrafo_personas.style.height = "0px"




	if(window.innerWidth > 850)
	{
		section_3_container.style.marginBottom = "0px"
		ingredientes()
	}
	else
	{
		section_3_container.style.marginBottom = parrafo_personas.children[0].offsetHeight
		receta_titular.children[0].style.width = "100%"
	}

	if(window.innerWidth > 450)
	{
		mano_ingredientes.style.opacity = "1"
	}
	else
	{
		mano_ingredientes.style.opacity = "0"
		section_3_container.style.marginBottom = parrafo_personas.children[0].offsetHeight / 4 + "px"
	}
	
	mano_nutricion.style.opacity = "0"
	mano_personas.style.opacity = "0"

})





