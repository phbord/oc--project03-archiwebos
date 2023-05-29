const __closeModal = (btnId) => {
  document.querySelector(`#${btnId}`).addEventListener('click', () => {
    // Masquage de la modale
    document.querySelector('#gallery-modal').classList.remove('d-flex');
    // Masquage du bouton précédent
    document.querySelector('#btn-prev') && document.querySelector('#btn-prev').classList.add('d-none');
    // Masquage du label de l'input file
    document.querySelector(`.label-file`).classList.add('d-flex');
    // Affichage du bloc de l'image de l'input file
    document.querySelector(`.figure-input-file`).classList.remove('d-flex');
    // Vidage des champs du formulaire de la modale
    document.querySelector(`#input-file`).value = '';
    document.querySelector(`#input-text`).value = '';
    document.querySelector(`#select`).value = '';
    // Désactivation du bouton de soumission
    document.querySelector(`#btn-submit-modal`).setAttribute('disabled', 'disabled');
    // Retour à l'étape 1
    document.querySelector('#modal-step-1').classList.remove('d-none');
    document.querySelector('#modal-step-2').classList.add('d-none');
  });
};

// Affichage du fichier (photo) du champ "input file"
const __showInputFile = () => {
  // SI l'élément n'existe pas
  if (!document.querySelector(`#input-file`)) return;

  document.querySelector('#input-file').addEventListener('click', () => {})
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
      || document.querySelector('#gallery-modal').classList.contains('d-flex')
      || !document.querySelector(`#btn-submit-modal`)
      || !document.querySelector(`#input-file`)
      || !document.querySelector(`#input-text`)
      || !document.querySelector(`#select`)) return;

  __closeModal('btn-close');
  __closeModal('gallery-modal__backdrop');
};

// Etape suivante ou précédente
const handlePrevNextStep = (btnId, stepOldId, stepNextId) => {
  // SI les blocs "étapes" n'existent pas
  if (!document.querySelector(`#${btnId}`) 
      || !document.querySelector(`#${stepOldId}`)
      || !document.querySelector(`#${stepNextId}`)) return;

  document.querySelector(`#${btnId}`).addEventListener('click', () => {
    // Affichage/Masquage des étapes
    document.querySelector(`#${stepOldId}`).classList.add('d-none');
    document.querySelector(`#${stepNextId}`).classList.remove('d-none');

    // Affichage/Masquage du bouton précédent
    if (document.querySelector('#btn-prev')) {
      const prevBtn = document.querySelector('#btn-prev');

      btnId !== 'btn-prev' && prevBtn.classList.remove('d-none');
      btnId === 'btn-prev' && prevBtn.classList.add('d-none');
    }

    // Affichage du fichier (photo) du champ "input file"
    __showInputFile();
  });
};


export { toggleAllAdminBlocks, handleLogout, handleOpenModal, handleCloseModal, handlePrevNextStep };