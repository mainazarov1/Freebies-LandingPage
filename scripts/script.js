const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', (e) => {
	e.preventDefault();
	burger.classList.toggle('burger__active');
	nav.classList.toggle('nav__active');
})


new Glide('.glide', {
	type: 'carousel',
	// autoplay: 3000,
	duration: 1000,
	animationTimingFunc: 'ease-in-out',
	startAt: 0,
	perView: 3,
	gap: 50,
	keyboard: true,
	breakpoints: {
		1024: {
			perView: 2
		},
		730: {
			perView: 1
		},
		500: {
			perView: .5
		}
	}
}).mount();