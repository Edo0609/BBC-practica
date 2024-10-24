const phoneMenu = document.getElementById("menu-phone");
const menuBtn = document.querySelector("#menu-phone-button p");

menuBtn.addEventListener('click', () => {
	phoneMenu.classList.toggle("menu-visible")
})

const menuItemsDT = document.querySelectorAll(".menu-item-desktop");

menuItemsDT.forEach(element => {
	element.addEventListener('click', () => {
		menuItemsDT.forEach(element => element.classList.remove("menu-selected"));
		element.classList.add("menu-selected");
	});
});