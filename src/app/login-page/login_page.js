document.getElementById('forgot-password').addEventListener('click', function() {
    document.getElementById('recover-popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('recover-popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('recover-popup')) {
        document.getElementById('recover-popup').style.display = 'none';
    }
});

function togglePassword(inputId, toggleIcon) {
      const input = document.getElementById(inputId);
      if (input.type === "password") {
        input.type = "text";
        toggleIcon.classList.replace('bx-hide', 'bx-show');
      } else {
        input.type = "password";
        toggleIcon.classList.replace('bx-show', 'bx-hide');
      }
    }

    function hidePasswordIcons() {
      const icons = document.querySelectorAll('.input-box .visibility-toggle');
      icons.forEach(icon => {
        icon.style.display = 'none';
      });
    }

    function closePopup() {
      document.getElementById("recover-popup").style.display = "none";
      showPasswordIcons();
    }

    function showPasswordIcons() {
      const icons = document.querySelectorAll('.input-box .visibility-toggle');
      icons.forEach(icon => {
        icon.style.display = 'inline'; // or use 'block' depending on your layout
      });
    }