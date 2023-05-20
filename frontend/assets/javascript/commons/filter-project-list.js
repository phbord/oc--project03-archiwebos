import { fetchData } from "./requests.js";


// Récupération des données des projets
const __fetchWorks = async (cat='') => {
  const data = await fetchData(`/works`, cat);

  return data;
};

// Récupération des données des catégories
const __fetchCategories = async () => {
  const data = await fetchData(`/categories`);

  return data;
};

// Changements de classes des boutons de filtrage
const __toggleFilterButtonClass = (btnList, btn) => {
  const activeCls = 'btn-filter--active';

  btnList.forEach(item => {
    item.classList.contains(activeCls) && item.classList.remove(activeCls);
  });
  btn.classList.add(activeCls);
};

// Création d'une nouvelle liste de projets "filtrés"
const __showProjects = async (e) => {
  try {
    const data = await __fetchWorks(e.target.dataset.name);
    const galleryList = document.getElementsByClassName('gallery')[0];

    // Suppression de la liste
    galleryList.innerHTML = '';

    // Remplissage de la liste filtrée
    data.forEach(row => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption');

      img.setAttribute('src', row.imageUrl);
      img.setAttribute('alt', row.title);
      figcaption.textContent = row.title;
      figure.appendChild(img);
      figure.appendChild(figcaption);
      galleryList.append(figure);
    });
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

// Clics sur les boutons de filtrage
const __handleFilterButtons = () => {
 const btnElt = document.querySelectorAll('.btn-filter');

 // Toggle button class
 btnElt.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-filter--active')) return;
    
    __showProjects(e)
    __toggleFilterButtonClass(btnElt, btn);
  });
 });
}

// Affichage des boutons de filtrage et de la liste des projets filtrée par catégories
const createFilterButtons = async () => {
  try {
    const data = await __fetchCategories();

    // Création et ajout des boutons de filtrage
    data.forEach(row => {
      const li = document.createElement('li');
      const button = document.createElement('button');

      button.classList.add('btn-filter');
      button.setAttribute('data-name', row.name);
      button.setAttribute('type', 'button');
      button.textContent = row.name;
      li.appendChild(button);
      document.getElementsByClassName('filters-list')[0].append(li);
    });

    __handleFilterButtons();
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export { createFilterButtons };