const __closeModal = (btnId) => {
  document.querySelector(`#${btnId}`).addEventListener('click', () => {
    document.querySelector('#gallery-modal').classList.remove('d-flex');
  });
};


// Affiche ou non les blocs Admnistrateur
const toggleAllAdminBlocks = (mainClass, displayClass='d-flex') => {
  // SI le bloc n'existe pas
  if (!document.querySelector(`.${mainClass}`)) return;

  // Boucle sur tous les blocs d'édition
  document.querySelectorAll(`.${mainClass}`).forEach((blockElt) => {
    localStorage.getItem('ArchiWebos') 
      ? blockElt.classList.add(displayClass)
      : blockElt.classList.remove(displayClass);
  })
};

// Déconnexion du mode Admnistrateur
const handleLogout = () => {
  // SI le bloc n'existe pas
  if (!document.querySelector('.item-logout')) return;

  document.querySelector('.item-logout').addEventListener('click', (e) => {
    console.log('===>', e);
    // Suppression du token du localstorage
    localStorage.removeItem('ArchiWebos');
    // Rechargement de la page
    window.location.reload();
  });
};

// Affiche la modale
const handleOpenModal = () => {
  // SI les blocs n'existent pas
  if (!document.querySelectorAll('.edit-btn')[0]
      || !document.querySelector('#gallery-modal') 
      || document.querySelector('#gallery-modal').classList.contains('d-flex')) return;

  document.querySelectorAll('.edit-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('#gallery-modal').classList.add('d-flex');
    });
  });
};

// Ferme la modale
const handleCloseModal = () => {
  // SI les blocs n'existent pas
  if (!document.querySelector('#btn-close') 
      || !document.querySelector('#gallery-modal') 
      || document.querySelector('#gallery-modal').classList.contains('d-flex')) return;

  __closeModal('btn-close');
  __closeModal('gallery-modal__backdrop');
};

const handlePublishButton = () => {};


export { toggleAllAdminBlocks, handleLogout, handleOpenModal, handleCloseModal, handlePublishButton };
