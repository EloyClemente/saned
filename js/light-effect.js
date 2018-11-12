
// INSTRUCCIONES
// Asignar la clase light-effect
// a cualquier elemento que contenga texto.
//.........................................

var element = document.getElementsByClassName('light-effect')


var color_1        = '#333'      // Color de fuente
var color_2        = '#00D1C1'   // Color on hover
var espaciado      = 5           // Pixels de espacio entre palabras (spans vacíos)
var letter_spacing = 4           // Espacio entre letras



function light_effect()
{
	for(var i=0; i < element.length; i++)   // Buscar todos los elementos con la clase light-effect
	{
		var texto = element[i].innerHTML  // Localizamos el texto del enlace
		element[i].innerHTML = ""         // Borramos el texto
		letras(texto, i)

	}


	function letras(texto, i)
	{
		for(var x=0; x < texto.length; x++) // Recorremos las letras
		{
			var span = document.createElement('span') // Creamos un span para cada letra

			span.style.color = color_1 // Color de fuente
			span.style.letterSpacing = letter_spacing + 'px' // Separación de las letras


			if(texto[x] == " ")
			span.style.width = espaciado + 'px' // Pixels de espacio entre palabras (spans vacíos)
			

			span.innerHTML = texto[x] // Insertamos cada letra en un span

			element[i].appendChild(span) // Insertamos los spans en la capa padre

			element[i].addEventListener('mouseenter', color) // Asignamos el evento
			element[i].addEventListener('mouseleave', color)
		}	
	}

}







function color(event)
{
	var contSpans = 0

	var that = this


	var execute = setInterval(function()
	{
		var spans = that.getElementsByTagName('span') // Localizamos los spans

			try
			{
				spans[contSpans].style.transition = "all, .3s"
			}
			catch
			{
				
			}
			

			try
			{
				if(event.type == 'mouseenter') // Colorear en función del tipo de evento
				spans[contSpans].style.color = color_2
				
				else
				spans[contSpans].style.color = color_1	
			}
			catch
			{
				
			}

			
			contSpans++


			if(contSpans >= spans.length) // Si se han recorrido todas las letras
			{
				clearInterval(execute) // Detener
			}
		
	}, 40)	
}




























































