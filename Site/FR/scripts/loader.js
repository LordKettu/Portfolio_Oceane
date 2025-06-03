// Fonction pour charger une page dans le <main>
function loadPage(pageName) {
  fetch(`./Page_Content/${pageName}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById('main-content').innerHTML = data;
    });
}

// Navigation dynamique
function setupNavigation() {
  document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      loadPage(page);
    });
  });
}

// Charger la page par défaut après chargement du header
window.addEventListener('DOMContentLoaded', () => {
  loadPage('Profil');
  setupNavigation(); // important ici pour l’activer
});
