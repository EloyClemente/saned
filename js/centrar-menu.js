
var menu__bars = document.getElementById('menu__bars')
var menu__ul = document.getElementById('menu__ul')
var foo = false

menu__bars.addEventListener('click', mostrar_ul)



function centrar_ul()
{
	if(window.innerWidth < 780)
	{
		menu__ul.style.left = (window.innerWidth / 2) - (menu__ul.offsetWidth / 2) + 'px'
	}
	else
	{
		menu__ul.style.left = '-500px'
		foo = false
	}
}
window.addEventListener('resize', centrar_ul)
centrar_ul()




function top_ul()
{
	if(window.innerWidth < 780)
	{
		if(document.body.getBoundingClientRect().top < 0)
		{
			menu__ul.style.top = '20px'
		}
		else
		{
			menu__ul.style.top = '60px'
		}
	}
	else
	{
		menu__ul.style.top = '33px'
	}
	
}
window.addEventListener('resize', top_ul)
window.addEventListener('scroll', top_ul)
top_ul()



function mostrar_ul()
{
	if(foo == false)
	{
		menu__ul.style.left = '13%'
		foo = true
	}
	else
	{
		menu__ul.style.left = '-500px'
		foo = false
	}
}