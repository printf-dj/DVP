const sections = document.querySelectorAll('.scroll');
const viewHeight = window.innerHeight;

const revealSection = () => {
	sections.forEach(div => {
		const distanceFromTop = div.getBoundingClientRect().top;
		distanceFromTop < viewHeight -100
			? div.classList.add('scroll-reveal')
			: div.classList.remove('scroll-reveal');
	});
};

window.addEventListener('load', () => revealSection());
window.addEventListener('scroll', () => revealSection());
