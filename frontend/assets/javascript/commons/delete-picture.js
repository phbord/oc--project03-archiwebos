import { deleteData } from "../models/requests.js";
import { reloadNewList } from "./project-list.js";


// //////////////////////////
// SUPPRESSION D'UNE PHOTO //
// //////////////////////////
const handleDeletePicture = () => {
  window.setTimeout(() => {
    // SI le bloc n'existe pas
    if (!document.querySelector('.modal-delete-btn')) return;
    
    document.querySelectorAll('.modal-delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();

        // Stockage de l'ID d'une photo dans le State
        const id = e.target.closest('.modal-delete-btn').getAttribute('data-id');

        // Suppression d'une photo
        try {
          const data = await deleteData(`/works/`, id);
          reloadNewList();
          handleDeletePicture();
        }
        catch (error) {
          console.error(`Error: ${error.message}`);
        }
        return;
      });
    });
  }, 500);
};


export { handleDeletePicture };