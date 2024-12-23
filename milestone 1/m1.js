// Select the toggle button and skills section
var toggleButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
// Add event listener for toggling visibility
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if (skillsSection) {
        skillsSection.style.display =
            skillsSection.style.display === "none" ? "block" : "none";
    }
});
