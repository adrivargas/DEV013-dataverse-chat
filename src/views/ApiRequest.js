import { header } from '../components/header.js';
import { navigateTo } from '../router.js';
import { getApiKey } from '../lib/apiKey.js';
import { setApiKey } from '../lib/apiKey.js';

export const apiKeyRequest = (props) => {

  const apiPassword = document.createElement("div");
  const apiPage = document.createElement("div");
  const passwordArea = document.createElement("textarea");
  console.log(passwordArea);
  const buttonEnterApi = document.createElement('button');
  
  buttonEnterApi.className = "enterApi";
  buttonEnterApi.textContent = "Enter";
  passwordArea.className = "passwordArea"

  apiPassword.appendChild(header());
  apiPassword.appendChild(apiPage);
  apiPassword.appendChild(passwordArea);
  apiPassword.appendChild(buttonEnterApi);

  buttonEnterApi.addEventListener('click', () => {
    const passwordAreaValue = apiPassword.querySelector(".passwordArea").value;
    console.log("el valor de la contraseña",passwordAreaValue); 
  
    setApiKey(passwordAreaValue)
    
    navigateTo("/chat")});

  apiPage.innerHTML = `     
      <p class="messageApi">
      Inserta tu API Key aquí: </p>`;

  return apiPassword;
}
