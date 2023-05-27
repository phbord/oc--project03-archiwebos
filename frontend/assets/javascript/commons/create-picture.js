// Stockage de variables (id des photos)
const STATE = {
  id: '',
  inputFile: false,
  inputText: false,
  select: false,
};


// Activation/Désactivation du bouton de soumission
const __toggleSubmitButton = () => {
  const modalElt = document.querySelector(`#btn-submit-modal`);

  (STATE.inputFile && STATE.inputText && STATE.select)
    ? modalElt.removeAttribute('disabled')
    : modalElt.setAttribute('disabled', 'disabled');
};


// Validation de champs
const __validateForm = () => {
  // SI les éléments n'existent pas
  if (!document.querySelector('.modal-form') 
      || !document.querySelector(`#btn-submit-modal`)
      || !document.querySelector(`#input-file`)
      || !document.querySelector(`#input-text`)
      || !document.querySelector(`#select`)) return;

  ['change', 'focus', 'focusin', 'focusout'].forEach((events) => {
    // Input file
    document.querySelector(`#input-file`).addEventListener(events, (e) => {
      STATE.inputFile = false;
      if (e.target.value.length > 0) STATE.inputFile = true;
      console.log('>>>>', e.target.value);

      __toggleSubmitButton();
    });

    // Input text
    document.querySelector(`#input-text`).addEventListener(events, (e) => {
      STATE.inputText = false;
      if (e.target.value.length > 0) STATE.inputText = true;

      __toggleSubmitButton();
    });

    // Select
    document.querySelector(`#select`).addEventListener(events, (e) => {
      STATE.select = false;
      if (e.target.value.length > 0) STATE.select = true;

      __toggleSubmitButton();
    });

    // Activation/Désactivation du bouton de soumission
    
  });
};


// Ajout d'une photo
const handleCreatePicture = () => {
  // SI l'élément n'existe pas
  if (!document.querySelector('#btn-submit-modal')) return;

  __validateForm();
  document.querySelector(`.modal-form`).addEventListener('click', () => {
    //
  });
};


export { handleCreatePicture };