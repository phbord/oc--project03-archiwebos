import { sendData } from "./requests.js";


const isConnected = async () => {
  document.addEventListener('submit', async (e) => {
    e.preventDefault();
    // SI les champs n'existent pas
    if (!document.getElementById('input-email') && !document.getElementById('input-password')) return;

    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;
    const user = { email, password };
    const data = await sendData(`/users/login`, user);

    if (data.status === 200) {
      data.json();
      document.querySelector('.error-msg').classList.remove('d-block');
      console.log('data: ', data);
      window.location.href = './index.html';
    }
    else {
      document.querySelector('.error-msg').classList.add('d-block');
      console.error(`statut: ${data.status} ${data.statusText}`);
    }
  });
  
};

export { isConnected };