document.addEventListener('DOMContentLoaded', () => {
    showSections(['home', 'quienesomos']);
});

function showSections(sectionIds) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    sectionIds.forEach(id => {
        const sectionToShow = document.getElementById(id);
        if (sectionToShow) {
            sectionToShow.classList.remove('hidden');
            sectionToShow.classList.add('active');
        }
    });
}
