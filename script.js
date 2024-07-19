const buttonShowMenu = document.querySelector('#btn-menu'),
	itemsBox = document.querySelector('.items_box'),
	menuItem = document.querySelector('.menu_item'),
	menuBox = document.querySelector('.menu');
let menuStatus = false;

buttonShowMenu.addEventListener('click', function () {
	menuBox.style.top = buttonShowMenu.offsetHeight + 'px';
	menuItem.style.minWidth = buttonShowMenu.clientWidth + 'px';

	if (!menuStatus) {
		menuBox.style.display = 'block';
		itemsBox.classList.add('animOpenMenu');
		menuStatus = true;
		buttonShowMenu.disabled = true;
		itemsBox.addEventListener('animationend', function () {
			buttonShowMenu.disabled = false;
			itemsBox.classList.remove('animOpenMenu');
		});
	}
	else if (menuStatus) {
		menuBox.style.display = 'none';
		menuStatus = false;
	}
	//menuBox.classList.add('animOpenMenu');
})