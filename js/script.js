function toggleDropdown() {
    const dropdown = document.getElementById("lang-dropdown");
    dropdown.classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.closest('.button-dropdown')) {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      });
    }
  }