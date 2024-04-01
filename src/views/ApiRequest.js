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
  

  const llave = "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";
 
  
  buttonEnterApi.addEventListener('click', () => {
    const passwordAreaValue = apiPassword.querySelector(".passwordArea").value;
    if (passwordAreaValue === llave) {
      console.log(llave, passwordAreaValue)
      setApiKey(passwordAreaValue)
      navigateTo("/chat")
    } else {
      return window.alert("Clave incorrecta, intente nuevamente");
      //console.log("error") // const error = "Ingrese nuevamente";
    }    
    

  });

  apiPage.innerHTML = `     
      <p class="messageApi">
      Inserta tu API Key aquí: </p>`;

  return apiPassword;
}
