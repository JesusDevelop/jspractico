const navEmail = document.querySelector('.navbar-email');
const emailMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

    emailMenu.classList.toggle('inactive');
    
}