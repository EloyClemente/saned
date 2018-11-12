
var boton_castellano = document.getElementById('boton_castellano')
var boton_catalan = document.getElementById('boton_catalan')
var boton_ingles = document.getElementById('boton_ingles')
var menu_saned = document.getElementById('menu_saned')
var menu_receta = document.getElementById('menu_receta')
var menu_intranet = document.getElementById('menu_intranet')
var parrafo_portada = document.getElementById('parrafo_portada')
var texto_vertical_nosotros = document.getElementById('texto_vertical_nosotros')
var texto_vertical_servicios = document.getElementById('texto_vertical_servicios')
var texto_vertical_compromisos = document.getElementById('texto_vertical_compromisos')
var titulo_nosotros = document.getElementById('titulo_nosotros')
var titular_1 = document.getElementById('titular_1')
var parrafo_1 = document.getElementById('parrafo_1')
var parrafo_2 = document.getElementById('parrafo_2')
var video_source = document.getElementById('video_source')
var video_caption = document.getElementById('video_caption')
var titulo_servicios = document.getElementById('titulo_servicios')
var parrafo_3 = document.getElementById('parrafo_3')
var titular_2 = document.getElementById('titular_2')
var li_servicios = document.getElementById('li_servicios')
var li_a = document.getElementById('li_a')
var li_b = document.getElementById('li_b')
var li_c = document.getElementById('li_c')
var li_d = document.getElementById('li_d')
var li_e = document.getElementById('li_e')
var titulo_compromisos = document.getElementById('titulo_compromisos')
var titular_3 = document.getElementById('titular_3')
var capa_alimentario_titulo = document.getElementById('capa_alimentario_titulo')
var capa_alimentario_parrafo = document.getElementById('capa_alimentario_parrafo')
var capa_sanitario_titulo = document.getElementById('capa_sanitario_titulo')
var capa_sanitario_parrafo = document.getElementById('capa_sanitario_parrafo')
var capa_medioambiental_titulo = document.getElementById('capa_medioambiental_titulo')
var capa_medioambiental_parrafo = document.getElementById('capa_medioambiental_parrafo')
var capa_social_titulo = document.getElementById('capa_social_titulo')
var capa_social_parrafo = document.getElementById('capa_social_parrafo')
var titulo_nuestra = document.getElementById('titulo_nuestra')
var titulo_recepta = document.getElementById('titulo_recepta')
var texto_ingredientes = document.getElementById('texto_ingredientes')
var texto_nutricion = document.getElementById('texto_nutricion')
var texto_personas = document.getElementById('texto_personas')
var titulo_ingredientes = document.getElementById('titulo_ingredientes')
var titulo_nutricion = document.getElementById('titulo_nutricion')
var titulo_personas = document.getElementById('titulo_personas')
var trabaja = document.getElementById('trabaja')
var texto_trabaja = document.getElementById('texto_trabaja')
var software = document.getElementById('software')
var usuario = document.getElementById('usuario')
var contrasena = document.getElementById('contrasena')
var submit = document.getElementById('submit')
var legal = document.getElementById('legal')
var parrafo_portada = document.getElementById('parrafo_portada')
var linea_oblicua = document.getElementById('linea_oblicua')





boton_castellano.addEventListener('click', function()
{
	var texto_idioma = this.innerHTML // Obtener texto del botón
	texto_boton(texto_idioma)
	traducir()
})

boton_catalan.addEventListener('click', function()
{
	var texto_idioma = this.innerHTML // Obtener texto del botón
	texto_boton(texto_idioma)
	traducir()
})

boton_ingles.addEventListener('click', function()
{
	var texto_idioma = this.innerHTML // Obtener texto del botón
	texto_boton(texto_idioma)
	traducir()
})






function texto_boton(texto_idioma)
{
	if(texto_idioma == "Castellano")
	{
		var clave = localStorage.setItem('idioma', 'castellano')
		traducir_castellano()
	}
	else if(texto_idioma == "Catalán")
	{
	 	localStorage.setItem('idioma', 'catalan')
		traducir_catalan()
	}
	else
	{
		localStorage.setItem('idioma', 'ingles')
		traducir_ingles()
	}
}






function traducir_catalan()
{
	menu_saned.innerHTML = 'Saned'
	menu_receta.innerHTML = 'La nostra recepta'
	menu_intranet.innerHTML = 'Intranet'
	
	parrafo_portada.innerHTML = 'El nostre repte és crear, dia a dia, plats equilibrats, sans, que acariciïn la sofisticació, tinguin esperit creatiu, fets amb amor per aconseguir menús “gourmet” dissenyats per agradar.'
	texto_vertical_nosotros.innerHTML = 'Nosaltres'
	texto_vertical_servicios.innerHTML = 'Serveis'
	texto_vertical_compromisos.innerHTML = 'Compromisos'
	titulo_nosotros.innerHTML = '· NOSALTRES ·'
	titular_1.innerHTML = '<em>"Saned és alta <br> cuina escolar"</em>'
	parrafo_1.innerHTML = 'La millor gastronomia compta sempre amb <strong>3 ingredients bàsics: </strong>la qualitat i procedència dels seus ingredients, l’originalitat i elegància dels seus plats i la implicació del seu equip humà. Una recepta infal•lible que Saned ha aplicat fa més des de més de 20 anys en els seus serveis de restauració gourmet per als centres escolars. Una alternativa gourmet d’alta qualitat per a aquells centres que vulguin fer del seu menjador escolar un valor diferencial.'
	parrafo_2.innerHTML = 'La millor gastronomia compta sempre amb <strong>3 ingredients bàsics: </strong>la qualitat i procedència dels seus ingredients, l’originalitat i elegància dels seus plats i la implicació del seu equip humà. Una recepta infal•lible que Saned ha aplicat fa més des de més de 20 anys en els seus serveis de restauració gourmet per als centres escolars. Una alternativa gourmet d’alta qualitat per a aquells centres que vulguin fer del seu menjador escolar un valor diferencial.'
	video_source.src = 'video/saned_cat.mp4'
	video_caption.innerHTML = 'Mira el nostre vídeo'
	titulo_servicios.innerHTML = '· SERVEIS ·'
	parrafo_3.innerHTML = 'L’<strong>Equip de Pedagogia</strong> de Saned posa a disposició del centre, monitors i educadors que complementen el servei de menjador amb activitats relacionades amb hàbits alimentaris, higiene, socials i de comportament. Activitats que es coordinen dins un Pla de Menjador específic per al centre.'
	titular_2.innerHTML = '“Cuinar i educar”'
	li_servicios.innerHTML = 'ALTRES SERVEIS'
	li_a.innerHTML = 'Servei d’acollida matinal i de tarda'
	li_b.innerHTML = 'Excursions i sortides culturals'
	li_c.innerHTML = 'Colònies i campaments'
	li_d.innerHTML = 'Monitors de piscina, gimnàs, etc.'
	li_e.innerHTML = 'Ludoteques'
	titulo_compromisos.innerHTML = '· COMPROMISOS ·'
	titular_3.innerHTML = '<em>“Els nostres compromisos ens </br> animen a seguir creixent”</em>'
	capa_alimentario_titulo.innerHTML = 'COMPROMÍS ALIMENTARI'
	capa_alimentario_parrafo.innerHTML = 'El nostre principal compromís consisteix en oferir una alimentació variada, equilibrada, sana i tremendament atractiva. Fomentant una sèrie d’hàbits saludables en els nens que desprès es traslladin a la seva vida adulta.'
	capa_sanitario_titulo.innerHTML = 'COMPROMÍS ALIMENTARI'
	capa_sanitario_parrafo.innerHTML = 'Comptem amb un procés propi d’Anàlisi de Perills i Punts de Control Crític (APPCC) que avalua i controla la traçabilitat de tots els nostres serveis.'
	capa_medioambiental_titulo.innerHTML = 'COMPROMÍS MEDIAMBIENTAL'
	capa_medioambiental_parrafo.innerHTML = 'Realitzem la selecció i reciclatge dels nostres residus i portem a terme projectes de sostenibilitat mediambiental amb les escoles.'
	capa_social_titulo.innerHTML = 'COMPROMÍS SOCIAL'
	capa_social_parrafo.innerHTML = 'Col•laborem amb diferents causes socials com la Fundació Vicente Ferrer o la Fundació Jaume Casademont, així com ONG’s locals que ajuden a minimitzar el malbaratament d’aliments.'
	titulo_nuestra.innerHTML = 'LA NOSTRA'
	titulo_nuestra.classList.add('titulo-nuestra-interlineado')
	titulo_recepta.innerHTML = 'RECEPTA'
	texto_ingredientes.innerHTML = 'Les nostres fruites i verdures són ecològiques i de productors locals i els nostres peixos de llotja. Ingredients sempre frescos i de proveïdors certificats amb la màxima garantia sanitària.'
	texto_nutricion.innerHTML = "El nostre <strong>Equip de Nutrició i Dietètica</strong> elabora al costat dels nostres xefs creadors dels nostres plats, menús variats i equilibrats, que no només tenen en compte aspectes nutricionals o sensorials, també són avaluats cada any en funció de la seva acceptació pels nens. Una tasca d'investigació i creativa que reinterpreta la cuina mediterrània."
	texto_personas.innerHTML = "Tots els nostres plats són elaborats en el propi centre pel nostre personal, amb especial sensibilitat, tendresa i l'experiència d'un bon professional. Treballem perquè la felicitat dels nostres equips es transmeti amb il·lusió i entusiasme al seu dia a dia, com a base de l'èxit de l'empresa."
	titulo_ingredientes.innerHTML = '· INGREDIENTS ·'
	titulo_nutricion.innerHTML = '· NUTRICIÓ + INNOVACIÓ ·'
	titulo_personas.innerHTML = '· PERSONES ·'
	trabaja.innerHTML = '<strong>TREBALLA AMB NOSALTRES</strong>'
	texto_trabaja.innerHTML = "Si t'apassiona l'alimentació i l'educació i vols formar part de l'equip de Saned, no dubtis a posar-te en contacte amb nosaltres a <a href='mailto:equip@saned.net'>equip@saned.net</a>"
	software.innerHTML = 'El nostre software Iara està dissenyat per a fer partícips els pares dels alumnes de l’alimentació dels seus fills i facilitar el dia a dia dels centres. Amb 3 zones restringides independents (Zona de Pares, Zona d’Escoles, Zona de Monitors)'
	usuario.innerHTML = 'Usuari'
	contrasena.innerHTML = 'Contrasenya'
	submit.value = 'Enviar'
	legal.innerHTML = "Avís legal"
	parrafo_portada.classList.remove('parrafo-section-1--ingles')
	linea_oblicua.classList.remove('linea-oblicua--ingles')

	light_effect()
}



function traducir_castellano()
{
	menu_saned.innerHTML = 'Saned'
	menu_receta.innerHTML = 'Nuestra receta'
	menu_intranet.innerHTML = 'Intranet'

	parrafo_portada.innerHTML = 'Nuestro reto es crear día a día platos equilibrados, sanos, que acaricien lo sofisticado, que tengan espíritu creativo, hechos con amor para conseguir menús "gourmet" diseñados para gustar.'
	texto_vertical_nosotros.innerHTML = 'Nosotros'
	texto_vertical_servicios.innerHTML = 'Servicios'
	texto_vertical_compromisos.innerHTML = 'Compromisos'
	titulo_nosotros.innerHTML = '· NOSOTROS ·'
	titular_1.innerHTML = '<em>"Saned es alta <br> cocina escolar"</em>'
	parrafo_1.innerHTML = 'La mejor gastronomía cuenta siempre con <strong>3 ingredientes básicos: </strong>la calidad y procedencia de sus ingredientes, la originalidad y elegancia de sus platos y la implicación de su equipo humano. Una receta infalible que Saned ha aplicado desde hace más de 20 años en sus servicios de restauración gourmet para centros escolares. </br> Una alternativa gourmet de alta calidad para aquellos centros que quieran hacer de su comedor escolar un valor diferencial.	'
	parrafo_2.innerHTML = 'La mejor gastronomía cuenta siempre con <strong>3 ingredientes básicos: </strong>la calidad y procedencia de sus ingredientes, la originalidad y elegancia de sus platos y la implicación de su equipo humano. Una receta infalible que Saned ha aplicado desde hace más de 20 años en sus servicios de restauración gourmet para centros escolares. </br> Una alternativa gourmet de alta calidad para aquellos centros que quieran hacer de su comedor escolar un valor diferencial.	'
	video_source.src = 'video/saned_esp.mp4'
	video_caption.innerHTML = 'Mira nuestro vídeo'
	titulo_servicios.innerHTML = '· SERVICIOS ·'
	parrafo_3.innerHTML = 'El <strong>Equipo de Pedagogía</strong> de Saned pone a disposición del centro monitores y educadores, que complementan el servicio de comedor con actividades relacionadas con hábitos alimentarios, de higiene, sociales y de comportamiento. Actividades que se coordinan dentro de un Plan de Comedor específico para el centro.'
	titular_2.innerHTML = '“Cocinar y educar”'
	li_servicios.innerHTML = 'OTROS SERVICIOS'
	li_a.innerHTML = 'Servicio de acogida matinal y de tarde'
	li_b.innerHTML = 'Excursiones y salidas culturales'
	li_c.innerHTML = 'Colonias y campamentos'
	li_d.innerHTML = 'Monitores de piscina, gimnasio, etc.'
	li_e.innerHTML = 'Ludotecas'
	titulo_compromisos.innerHTML = '· COMPROMISOS ·'
	titular_3.innerHTML = '<em>"Nuestros compromisos nos </br> animan a seguir creciendo"</em>'
	capa_alimentario_titulo.innerHTML = 'COMPROMISO ALIMENTARIO'
	capa_alimentario_parrafo.innerHTML = 'Nuestro principal compromiso consiste en ofrecer una alimentación variada, equilibrada, sana y tremendamente atractiva, fomentando una serie de hábitos saludables en los niños que después se trasladen a su vida adulta.'
	capa_sanitario_titulo.innerHTML = 'COMPROMISO SANITARIO'
	capa_sanitario_parrafo.innerHTML = 'Contamos con un proceso propio de Análisis de Peligros y Puntos de Control Crítico (APPCC) que evalúa y controla la trazabilidad de todos nuestros servicios.'
	capa_medioambiental_titulo.innerHTML = 'COMPROMISO MEDIOAMBIENTAL'
	capa_medioambiental_parrafo.innerHTML = 'Realizamos la selección y reciclado de nuestros residuos y llevamos a cabo proyectos de sostenibilidad medioambiental con las escuelas.'
	capa_social_titulo.innerHTML = 'COMPROMISO SOCIAL'
	capa_social_parrafo.innerHTML = 'Colaboramos con diferentes causas sociales como la Fundación Vicente Ferrer o la Fundació Jaume Casademont, así como ONG´s locales que ayudan a minimizar el sobrante de alimentos.'
	titulo_nuestra.innerHTML = 'NUESTRA'
	titulo_nuestra.classList.remove('titulo-nuestra-interlineado')
	titulo_recepta.innerHTML = 'RECETA'
	texto_ingredientes.innerHTML = 'Nuestras frutas y verduras de temporada son Ecológicas y de productores locales, y nuestros pescados de lonja. Ingredientes siempre frescos y de proveedores certificados, con la máxima garantía sanitaria.'
	texto_nutricion.innerHTML = 'Nuestro <strong>Equipo de Nutrición y Dietética</strong> elabora junto a nuestros chefs creadores de nuestros platos, menus variados y equilibrados, que no sólo tienen en cuenta aspectos nutricionales o sensoriales, también son evaluados cada año en función de su aceptación por los niños. Una labor de investigación y creativa que reinterpreta la cocina mediterranea.'
	texto_personas.innerHTML = 'Todos nuestros platos son elaborados en el propio centro por nuestro personal, con especial sensibilidad, ternura y la experiencia de un buen profesional. Trabajamos para que la felicidad de nuestros equipos se transmita con ilusión y entusiasmo a su día a día, como base del éxito de la empresa.'
	titulo_ingredientes.innerHTML = '· INGREDIENTES ·'
	titulo_nutricion.innerHTML = '· NUTRICIÓN + INNOVACIÓN ·'
	titulo_personas.innerHTML = '· PERSONAS ·'
	trabaja.innerHTML = '<strong>TRABAJA CON NOSOTROS</strong>'
	texto_trabaja.innerHTML = 'Si te apasiona la alimentación y la educación y quieres formar parte del equipo de Saned, no dudes en ponerte en contacto con nosotros en <a href="mailto:equip@saned.net">equip@saned.net</a>'
	software.innerHTML = 'Nuestro software lara está diseñado para hacer partícipes a los padres de los alumnos de la alimentación de sus hijos y facilitar el día a día de los centros. Con 3 zonas restringidas independientes (ZonaPadres, Zona Colegios y Zona Monitores)'
	usuario.innerHTML = 'Usuario'
	contrasena.innerHTML = 'Contraseña'
	submit.value = 'Enviar'
	legal.innerHTML = "Aviso legal"
	parrafo_portada.classList.remove('parrafo-section-1--ingles')
	linea_oblicua.classList.remove('linea-oblicua--ingles')

	light_effect()
}





function traducir_ingles()
{
	menu_saned.innerHTML = 'Saned'
	menu_receta.innerHTML = 'Our recipe'
	menu_intranet.innerHTML = 'Intranet'

	parrafo_portada.innerHTML = 'Our goal is to prepare balanced, healthy meals every day, meals that have a touch of sophistication, a flair of creativity and are made with love. We want to make “gourmet” meals that are prepared with love and created to be enjoyed.'
	texto_vertical_nosotros.innerHTML = 'About us'
	texto_vertical_servicios.innerHTML = 'Services'
	texto_vertical_compromisos.innerHTML = 'Our commitments'
	titulo_nosotros.innerHTML = '· ABOUT US ·'
	titular_1.innerHTML = '<em>"Saned is fine <br> dining for schools"</em>'
	parrafo_1.innerHTML = 'The best cooking always has <strong>3 basic ingredients:</strong> well-sourced, quality ingredients, original and elegant dishes and a dedicated human team. Saned has been using this infallible recipe for over 20 years, providing gourmet catering services for schools. <br><br> Saned offers a high quality gourmet alternative for schools who want their meals to become a differential value. '
	parrafo_2.innerHTML = 'The best cooking always has <strong>3 basic ingredients:</strong> well-sourced, quality ingredients, original and elegant dishes and a dedicated human team. Saned has been using this infallible recipe for over 20 years, providing gourmet catering services for schools. <br><br> Saned offers a high quality gourmet alternative for schools who want their meals to become a differential value. '
	video_source.src = 'video/saned_eng.mp4'
	video_caption.innerHTML = 'Take a look at our video'
	titulo_servicios.innerHTML = '· SERVICES ·'
	parrafo_3.innerHTML = 'SANED’s <strong>Educational Team</strong> provides instructors and educators to compliment your dinner service with activities related to healthy eating habits, good hygiene, social skills and exemplary behaviour. These activities are programmed in a Dinner Plan specifically designed for your school.'
	titular_2.innerHTML = '"Cook and Educate”'
	li_servicios.innerHTML = 'OTHER SERVICES'
	li_a.innerHTML = 'Morning and afternoon child care service'
	li_b.innerHTML = 'School trips and cultural visits'
	li_c.innerHTML = 'Holiday Camps'
	li_d.innerHTML = 'Swimming and gym instructors'
	li_e.innerHTML = 'Playgroups'
	titulo_compromisos.innerHTML = '· OUR COMMITMENTS ·'
	titular_3.innerHTML = '<em>"Our commitments are the driving force </br> behind our continued growth"</em>'
	capa_alimentario_titulo.innerHTML = 'FOOD COMMITMENT'
	capa_alimentario_parrafo.innerHTML = 'Our main commitment is to offer varied, balanced and healthy meals that are also very attractive, encouraging plenty of healthy habits that children will carry on into adulthood.'
	capa_sanitario_titulo.innerHTML = 'HEALTH COMMITMENT'
	capa_sanitario_parrafo.innerHTML = 'We have our own Hazard Analysis and Critical Control Points (HACCP) system that assesses and monitors product traceability. '
	capa_medioambiental_titulo.innerHTML = 'ENVIRONMENTAL COMMITMENT'
	capa_medioambiental_parrafo.innerHTML = 'We sort and recycle our waste, and organise environmental sustainability projects at schools.'
	capa_social_titulo.innerHTML = 'SOCIAL COMMITMENT'
	capa_social_parrafo.innerHTML = 'We support a number of social causes such as Fundación Vicente Ferrer or Fundació Jaume Casademont, as well as local charities that help to minimise food waste.'
	titulo_nuestra.innerHTML = 'OUR'
	titulo_nuestra.classList.add('titulo-nuestra-interlineado')
	titulo_recepta.innerHTML = 'RECIPE'
	texto_ingredientes.innerHTML = 'We use seasonal, organic fruit & veg that is produced locally. We buy our fish fresh from the fish market. We always use fresh ingredients delivered by certified suppliers who offer the best health guarantee.'
	texto_nutricion.innerHTML = 'Our <strong>team of Nutritionists and Dieticians</strong> work along with the Chefs who create our dishes and balanced menus. They not only consider nutritional and sensory factors, but also make yearly assessments to gauge the level of child acceptance of each dish. We use research and creativity to reinvent the mediterranean diet.'
	texto_personas.innerHTML = 'Our team prepare all dishes on site at the school with delicacy, warmth and the experience of a good professional. We endeavour to ensure that the happiness of the team translates in to enthusiasm and excitement every day; the essence of the company’s success.'
	titulo_ingredientes.innerHTML = '· INGREDIENTS ·'
	titulo_nutricion.innerHTML = '· NUTRITION + INNOVATION ·'
	titulo_personas.innerHTML = '· PEOPLE ·'
	trabaja.innerHTML = '<strong>JOIN OUR TEAM</strong>'
	texto_trabaja.innerHTML = 'If you are passionate about food and education, come and join our team at Saned by contacting us at <a href="mailto:equip@saned.net">equip@saned.net</a>'
	software.innerHTML = 'Our lara software is designed to encourage parents to get involved in their child’s eating habits and make day-to-day activities easier at school. It provides 3 independent restricted zones (Parent Zone, School Zone and Instructor Zone)'
	usuario.innerHTML = 'Username'
	contrasena.innerHTML = 'Password'
	submit.value = 'Send'
	legal.innerHTML = "Legal Notice"
	parrafo_portada.classList.add('parrafo-section-1--ingles')
	linea_oblicua.classList.add('linea-oblicua--ingles')

	light_effect()
}




function idioma_almacenado()
{
	var clave = localStorage.getItem('idioma')


	if(clave == 'castellano')
	{
		traducir_castellano()
	}
	else if(clave == 'catalan')
	{
		traducir_catalan()
	}
	else
	{
		traducir_ingles()
	}
}
idioma_almacenado()