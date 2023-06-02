import { fetchData } from "../models/requests.js";


// Récupération des données des projets
const __fetchWorks = async () => {
  const data = await fetchData(`/works`);

  return data;
};


// Affichage des boutons de la liste complète des photos
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


const reloadNewList = () => {
  // Suppression de la liste de photos
  document.querySelector('.gallery').innerHTML = '';
  document.querySelector('.modal-picture-list').innerHTML = '';
  // Affichage de la liste de photos mise à jour
  showProjects();
  showModalProjects();
}


const handlePublishNewList = () => {
  // SI le bouton n'existe pas
  if (!document.querySelector('.edit-mode__btn') || !document.querySelector('.edit-mode') || !document.querySelector('.gallery')) return;

  document.querySelector('.edit-mode__btn').addEventListener('click', () => {
    reloadNewList();
  });
};


// Affichage de la liste complète des photos dans la modale
const showModalProjects = async () => {
  // SI le bloc n'existe pas
  if (!document.querySelector('.modal-picture-list')) return;

  try {
    const data = await __fetchWorks();

    data.forEach(row => {
      const li = document.createElement('li');
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption');
      const button = document.createElement('button');
      const buttonDelete = document.createElement('button');
      const i = document.createElement('i');

      img.setAttribute('src', row.imageUrl);
      img.setAttribute('alt', row.title);
      img.classList.add('modal-picture');
      i.classList.add('fa-solid');
      i.classList.add('fa-trash-can');
      button.textContent = 'éditer';
      button.classList.add('modal-edit-btn');
      buttonDelete.classList.add('modal-delete-btn');
      buttonDelete.setAttribute('data-id', row.id)
      buttonDelete.appendChild(i);
      figcaption.appendChild(button);
      figure.appendChild(img);
      figure.appendChild(figcaption);
      li.appendChild(figure);
      li.appendChild(buttonDelete);
      // Ajout de l'item dans la page
      document.getElementsByClassName('modal-picture-list')[0].append(li);
    });
  }
  catch (error) {
    console.error(`Error: ${error.message}`);
  }
};


export { showProjects, handlePublishNewList, showModalProjects, reloadNewList };