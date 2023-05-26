import { showProjects } from "./commons/project-list.js";
import { createFilterButtons } from "./commons/filter-project-list.js";
import { toggleAllAdminBlocks, handleLogout, handleOpenModal, handleCloseModal, handlePublishButton } from "./commons/publish-pictures.js";

document.addEventListener('DOMContentLoaded', () => {
  // Affichage de toutes les images
  showProjects();

  // Affichage des images filtrées
  createFilterButtons();

  // Déconnexion
  handleLogout();
  
  // Affichage des blocs du mode Administrateur
  toggleAllAdminBlocks('edit-mode');
  toggleAllAdminBlocks('edit-btn');
  toggleAllAdminBlocks('item-logout');
  toggleAllAdminBlocks('item-login', 'd-none');

  // Affichage/Masquage de la modale
  handleOpenModal();
  handleCloseModal();

  // Affichage des changements
  handlePublishButton();
});