import { fetchData } from "./requests.js";


// Récupération des données des projets
const __fetchWorks = async () => {
  const data = await fetchData(`/works`);

  return data;
};


// Affichage des boutons de la liste complète des projets
const showProjects = async () => {
  try {
    const data = await __fetchWorks();

    data.forEach(row => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption');

      img.setAttribute('src', row.imageUrl);
      img.setAttribute('alt', row.title);
      figcaption.textContent = row.title;
      figure.appendChild(img);
      figure.appendChild(figcaption);
      // Ajout de l'item dans la page
      document.getElementsByClassName('gallery')[0].append(figure);
    });
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
  }
};


export { showProjects };