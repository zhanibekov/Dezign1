const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__list')
if ( menuBtn && menu) {
    menuBtn.addEventListener('click',  () => {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
    })

    
	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active')
			menu.classList.toggle('active')
		})
	})
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
})