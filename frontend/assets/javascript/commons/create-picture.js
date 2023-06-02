import { sendNewData } from "../models/requests.js"; 
import { showProjects } from "./project-list.js";


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
const validateForm = () => {
  // SI les éléments n'existent pas
  if (!document.querySelector('.modal-form') 
      || !document.querySelector(`#btn-submit-modal`)
      || !document.querySelector(`#input-file`)
      || !document.querySelector(`.figure-input-file`)
      || !document.querySelector(`.img-input-file`)
      || !document.querySelector(`#input-text`)
      || !document.querySelector(`#select`)) return;

  ['change', 'focus', 'focusin', 'focusout'].forEach((events) => {
    // Input file
    document.querySelector(`#input-file`).addEventListener(events, (e) => {
      STATE.inputFile = false;
      
      if (e.target.value.length > 0) {
        STATE.inputFile = true;
        // Affichage de l'image uploadée
        let files = e.target.files[0];

        if (files) {
          const fileReader = new FileReader();

          fileReader.readAsDataURL(files);
          fileReader.addEventListener('load', () => {
            // Affichage/Masquage des sous-blocs de l'input file
            document.querySelector(`.label-file`).classList.add('d-none');
            document.querySelector(`.figure-input-file`).classList.add('d-flex');
            document.querySelector(`.img-input-file`).setAttribute('src', fileReader.result);
            document.querySelector(`.img-input-file`).setAttribute('alt', files.name);
          });    
        }
      }

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
  // SI les éléments n'existent pas
  if (!document.querySelector('#btn-submit-modal')
      || !document.querySelector('#input-file')
      || !document.querySelector('#input-text')
      || !document.querySelector('#select')) return;

  validateForm();

  document.querySelector(`.modal-form`).addEventListener('submit', async (e) => {
    e.preventDefault();

    const imageUrl = document.querySelector('#input-file')//.files[0].name;
    const title = document.querySelector('#input-text').value;
    const categoryId = parseInt(document.querySelector('#select').value);
    const inputData = { title, imageUrl, categoryId };
    const data = await sendNewData('/works', inputData);

    if (data) {
      console.log(`POST: ${data.message}`);
      // Suppression de la liste de photos
      document.querySelector('.gallery').innerHTML = '';
      // Affichage de la liste de photos mise à jour
      showProjects();
    }
    else {
      console.error(`Error: ${data.message}`);
    }
  });
};


export { validateForm, handleCreatePicture };