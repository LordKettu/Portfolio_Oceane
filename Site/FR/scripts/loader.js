// Fonction pour charger une page dans le <main>
function loadPage(pageName) {
  fetch('../../Ressources/Jeu_WebGl/index.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return response.text();  // ou response.json(), response.blob(), etc. selon le type de fichier
  })
  .then(data => {
    console.log('Contenu du fichier:', data);
    // Faire quelque chose avec data (le contenu du fichier)
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier:', error);
  });
  
  fetch('../../Ressources/Images/CVOceane.png')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return response.text();  // ou response.json(), response.blob(), etc. selon le type de fichier
  })
  .then(data => {
    console.log('Contenu du fichier:', data);
    // Faire quelque chose avec data (le contenu du fichier)
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier:', error);
  });


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
