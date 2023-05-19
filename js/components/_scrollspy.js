const scrollSpyItems = document.querySelectorAll('.scroll-spy-item');

function handleScrollSpyClick(e) {
    e.preventDefault();

    const targetId = this.getAttribute('data-mai-scroll-spy-id');

    const targetElement = document.querySelector(targetId);

    const scrollTopValue = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: scrollTopValue, behavior: 'smooth' });

    scrollSpyItems.forEach((item) => {
        item.classList.remove('scroll-spy-active');
    });
    this.add('scroll-spy-active');
}

scrollSpyItems.forEach((item) => {
    item.addEventListener('click', handleScrollSpyClick);
});

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    scrollSpyItems.forEach((item) => {
        const targetId = item.getAttribute('data-mai-scroll-spy-id');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.offsetTop - 100;

        if (scrollPosition >= targetPosition) {
            scrollSpyItems.forEach((item) => {
                item.classList.remove('scroll-spy-active');
            });
            item.classList.add('scroll-spy-active');
        }
    });
});

