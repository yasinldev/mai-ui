document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".mai-dropdown");

    dropdowns.forEach(function(dropdown) {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        const dropdownTitle = dropdownMenu.querySelector(".dropdown-title");
        const dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item");

        dropdown.addEventListener("click", function() {
            dropdown.classList.toggle("dropdown-active");
            dropdownMenu.style.display = dropdown.classList.contains("dropdown-active") ? "block" : "none";
        });

        dropdownTitle.addEventListener("click", function(event) {
            event.stopPropagation();
        });

        dropdownItems.forEach(function(item) {
            item.addEventListener("click", function() {
                dropdown.classList.remove("dropdown-active");
                dropdownMenu.style.display = "none";
            });
        });

        document.addEventListener("click", function(event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("dropdown-active");
                dropdownMenu.style.display = "none";
            }
        });
    });
});
