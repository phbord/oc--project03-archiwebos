import { showProjects, handlePublishNewList, showModalProjects } from "./commons/project-list.js";
import { createFilterButtons, fetchCategoriesSelect } from "./commons/filter-project-list.js";
import { toggleAllAdminBlocks, handleLogout, handleOpenModal, handleCloseModal, handlePrevNextStep } from "./commons/modal.js";
import { handleDeletePicture } from "./commons/delete-picture.js";
import { handleCreatePicture } from "./commons/create-picture.js";


document.addEventListener('DOMContentLoaded', () => {
  // Affichage de toutes les images
  showProjects();       // Page
  showModalProjects();  // Modale

  // Affichage des images filtrées
  createFilterButtons();
  
  // Affichage des blocs du mode Administrateur
  toggleAllAdminBlocks('edit-mode');
  toggleAllAdminBlocks('edit-btn');
  toggleAllAdminBlocks('item-logout');
  toggleAllAdminBlocks('item-login', 'd-none');

  // Affichage de la liste de photos mise à jour
  handlePublishNewList();

  // Affichage des catégories de la liste déroulante de la modale
  fetchCategoriesSelect();

  // Affichage/Masquage de la modale
  handleOpenModal();
  handleCloseModal();

  // Affichage du bloc précédent
  handlePrevNextStep('btn-prev', 'modal-step-2', 'modal-step-1');

  // Affichage du bloc suivant
  handlePrevNextStep('btn-add-picture', 'modal-step-1', 'modal-step-2');

  // Suppression d'une photo
  handleDeletePicture();

  // Ajout d'une photo
  handleCreatePicture();

  // Déconnexion
  handleLogout();
});