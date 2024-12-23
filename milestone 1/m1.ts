

// Select the toggle button and skills section
const toggleButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");

// Add event listener for toggling visibility
toggleButton?.addEventListener("click", () => {
  if (skillsSection) {
    skillsSection.style.display =
      skillsSection.style.display === "none" ? "block" : "none";
  }
});
