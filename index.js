/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});




/* softwares logo 

// Function to show the skills panel
function showSkillsPanel() {
  const panel = document.getElementById('skillsPanel'); // Target the panel by ID
  panel.classList.add('visible'); // Add the 'visible' class for the show animation
  panel.classList.remove('hidden'); // Remove the 'hidden' class to make it visible
}

// Function to hide the skills panel
function hideSkillsPanel() {
  const panel = document.getElementById('skillsPanel'); // Target the panel by ID
  panel.classList.remove('visible'); // Remove the 'visible' class to hide the panel
  setTimeout(() => {
    panel.classList.add('hidden'); // Add the 'hidden' class after the transition ends
  }, 300); // Delay matches the CSS transition duration
}

// Add event listeners to handle the interaction
document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to the Maya logo
  const mayaLogo = document.querySelector('.software__logo--image');
  if (mayaLogo) {
    mayaLogo.addEventListener('click', showSkillsPanel); // Show the panel when the logo is clicked
  }

  // Add event listener to the close button in the panel
  const closeButton = document.querySelector('.close-panel');
  if (closeButton) {
    closeButton.addEventListener('click', hideSkillsPanel); // Hide the panel when the close button is clicked
  }
});*/

