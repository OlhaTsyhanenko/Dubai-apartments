let menuBtn = document.querySelector('.menu-open');
let menu = document.querySelector('.header__menu');
let menuMob = document.querySelector('.nav__wrapper');
let menuTab = document.querySelector('.menu__inner');

menuBtn.addEventListener('click', function(){
	if (window.innerWidth < 768) {
		menuMob.classList.toggle('active');
	}
	if (window.innerWidth >= 768) {
		menuTab.classList.toggle('active');
	}
	if (window.innerWidth >= 1400) {
		menu.classList.toggle('active');
	}

})
