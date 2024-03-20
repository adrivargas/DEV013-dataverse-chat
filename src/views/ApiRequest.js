import { header } from '../components/header.js';
import { navigateTo } from '../router.js';
export const apiKeyRequest= (props) => {
    
    const apiPassword = document.createElement("div");
    const apiPage = document.createElement("div");
    const passwordArea = document.createElement("textarea");
    const buttonEnterApi= document.createElement('button');
    buttonEnterApi.className = "enterApi";
    buttonEnterApi.textContent="Enter";
    passwordArea.className = "passwordArea"
    buttonEnterApi.addEventListener('click',()=>navigateTo("/chat"));
    
    apiPage.innerHTML = `     
      <p class="messageApi">
      Inserta tu API Key aquí: </p>`;
    apiPassword.appendChild(header());
    apiPassword.appendChild(apiPage);
    apiPassword.appendChild(passwordArea);
    apiPassword.appendChild(buttonEnterApi);

return apiPassword;
}
