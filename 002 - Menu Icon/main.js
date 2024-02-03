document.querySelectorAll(".menu-icon").forEach(function (menuIcon) {
	menuIcon.addEventListener("click", function () {
		this.classList.toggle("active");
		this.querySelectorAll("div").forEach(function (div) {
			div.classList.remove("no-animation");
		});
	});
});
