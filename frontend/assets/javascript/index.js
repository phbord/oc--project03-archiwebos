import { showProjects, showModalProjects } from "./commons/project-list.js";
import { createFilterButtons } from "./commons/filter-project-list.js";
import { toggleAllAdminBlocks, handleLogout, handleOpenModal, handleCloseModal, handlePrevNextStep } from "./commons/modal.js";
import { handlePublishButton } from "./commons/publish.js";


document.addEventListener('DOMContentLoaded', () => {
  // Affichage de toutes les images
  showProjects();       // Page
  showModalProjects();  // Modale

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

  // Affichage du bloc précédent
  handlePrevNextStep('btn-prev', 'modal-step-2', 'modal-step-1');

  // Affichage du bloc suivant
  handlePrevNextStep('btn-add-picture', 'modal-step-1', 'modal-step-2');

  // Affichage des changements
  handlePublishButton();
});