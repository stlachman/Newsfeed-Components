const toggleMenu = () => {
	// Toggle the "menu--open" class on your menu refence.
	menu.classList.toggle('menu--open');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// Add event listener to close menu when clicked outside of menu
document.addEventListener('click', (event) => {
  // closest returns the closest ancestor of the current element or the current element itelf, null otherwise
  if ((event.target.closest('.menu') === null) && (event.target.classList.value != ('menu-button'))) {
    menu.classList.remove('menu--open');
  }
})