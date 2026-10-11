document.addEventListener('DOMContentLoaded', function () {
	// footer year
	const y = document.getElementById('year');
	if (y) y.textContent = new Date().getFullYear();

	// mobile nav toggle
	const nav = document.getElementById('mainNav');
	const btn = document.getElementById('navToggle');
	if (btn && nav) {
		btn.addEventListener('click', () => {
			// toggle using class for smooth behavior
			nav.classList.toggle('open');
		});
	}
});
