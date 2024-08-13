function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Mostrar la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
        sectionToShow.classList.add('active');
    }
}

// Mostrar la sección "adoptar" al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('adoptar.html')) {
        showSection('adoptar');
    } else if (currentPath.includes('quienesomos.html')) {
        showSection('quienesomos');
    } else {
        showSection('home');
    }
});

function showPetDetails(name, sex, age, size, city, imageSrc, description, weight = 'N/A', character = 'N/A', coexists = 'N/A') {
    document.getElementById('pet-name').innerText = name || 'N/A';
    document.getElementById('pet-sex').innerText = sex || 'N/A';
    document.getElementById('pet-age').innerText = age || 'N/A';
    document.getElementById('pet-weight').innerText = weight || 'N/A';
    document.getElementById('pet-size').innerText = size || 'N/A';
    document.getElementById('pet-character').innerText = character || 'N/A';
    document.getElementById('pet-coexists').innerText = coexists || 'N/A';
    document.getElementById('pet-city').innerText = city || 'N/A';
    document.getElementById('pet-image').src = imageSrc || '';
    document.getElementById('pet-description').innerText = description || '';
    showSection('pet-details');
}
