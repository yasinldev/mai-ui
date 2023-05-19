document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('[data-mai-navbar-toggle]');
    const navbarResponsive = document.querySelector('.navbar-responsive');

    navbarToggle.addEventListener('click', function() {
        navbarResponsive.classList.toggle('navbar-toggled');
    });
});
