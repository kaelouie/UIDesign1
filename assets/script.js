const darkModeToggle = document.getElementById("dark-mode-toggle");
const toggleText = document.getElementById("toggle-text");
    
    darkModeToggle.addEventListener("change", function() {
      document.body.classList.toggle("dark-mode");
      if (darkModeToggle.checked) {
        toggleText.textContent = "Dark mode";
      } else {
        toggleText.textContent = "Day mode";
      }
    });