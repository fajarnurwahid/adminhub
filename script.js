const allMenu = document.querySelectorAll('.side-menu:not(.bottom) li');

allMenu.forEach(item=> {
	const a = item.querySelector('a');
	a.addEventListener('click', function () {
		allMenu.forEach(item1=> item1.classList.remove('active'))
		this.parentElement.classList.add('active');
	})
})




// Toggle sidebar
const menuBar = document.querySelector('#content nav .menu-bar');
const sideBar = document.querySelector('#sidebar');

menuBar.addEventListener('click', function () {
	sideBar.classList.toggle('hide');
})



if(window.innerWidth < 1200) {
	sideBar.classList.add('hide');
}
