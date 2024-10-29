const phoneMenu = document.getElementById("menu-phone");
const menuBtn = document.getElementById("menu-phone-button");
let isOpen = false;

menuBtn.addEventListener('click', () => {
	phoneMenu.classList.toggle("menu-visible");
	if (isOpen) {
		menuBtn.style.transform = "rotate(0deg)";
		menuBtn.querySelector("img").src = "imgs/menu.svg";
	}
	else {
		menuBtn.style.transform = "rotate(720deg)";
		menuBtn.querySelector("img").src = "imgs/close-x.svg";

	}

	isOpen = !isOpen;
});

const menuItemsDT = document.querySelectorAll(".menu-item-desktop");

menuItemsDT.forEach(element => {
	element.addEventListener('click', () => {
		menuItemsDT.forEach(element => element.classList.remove("menu-selected"));
		element.classList.add("menu-selected");
	});
});