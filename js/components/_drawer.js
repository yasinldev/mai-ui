function toggleDrawer(event) {
    const target = event.currentTarget.getAttribute('data-mai-drawer-toggle');
    const drawer = document.querySelector('[data-mai-drawer-name="' + target + '"]');
    drawer.classList.toggle('drawer-toggled');
}

const toggleButtons = document.querySelectorAll('[data-mai-drawer-toggle]');
toggleButtons.forEach(function(button) {
    button.addEventListener('click', toggleDrawer);
});

const closeButton = document.querySelector('#drawer-close');

closeButton.addEventListener('click', function() {
    const drawer = document.querySelector('.drawer-toggled');
    drawer.classList.toggle('drawer-toggled');
});
