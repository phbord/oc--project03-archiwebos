import { sendData } from "../models/requests.js";


const isConnected = async () => {
  document.addEventListener('submit', async (e) => {
    e.preventDefault();
    // SI les champs n'existent pas
    if (!document.getElementById('input-email') && !document.getElementById('input-password')) return;

    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;
    const user = { email, password };
    const data = await sendData(`/users/login`, user);

    if (data.token) {
      // Masquage du message d'erreurs
      document.querySelector('.error-msg').classList.remove('d-block');
      // Gestion du localStorage
      localStorage.removeItem('ArchiWebos');
      localStorage.setItem('ArchiWebos', JSON.stringify(data.token));
      // Redirection
      window.location.href = './index.html';
    }
    else {
      console.error(`Error: ${data.message}`);
      // Affichage du message d'erreurs du formulaire
      document.querySelector('.error-msg').classList.add('d-block');
    }
  });
  
};

export { isConnected };