document.addEventListener("DOMContentLoaded", function() {
    // Show the "About Me" section by default
    var aboutSection = document.getElementById('about');
    aboutSection.style.display = 'block';

    // Hide other sections
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });
});

function toggleSection(sectionId) {
    var sections = document.querySelectorAll('.content');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
