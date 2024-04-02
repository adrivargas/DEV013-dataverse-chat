import { header } from '../components/header.js';
import { navigateTo } from '../router.js';
import { getApiKey } from '../lib/apiKey.js';
import { setApiKey } from '../lib/apiKey.js';

export const apiKeyRequest = (props) => {
  console.log(props);

  const apiPassword = document.createElement("div");
  const apiPage = document.createElement("div");
  const passwordArea = document.createElement("textarea");
  console.log(passwordArea);
  const buttonEnterApi = document.createElement('button');
  const movie = props.name;
  console.log(props);
   

  buttonEnterApi.className = "enterApi";
  buttonEnterApi.textContent = "Enter";
  passwordArea.className = "passwordArea"

  apiPassword.appendChild(header());
  apiPassword.appendChild(apiPage);
  apiPassword.appendChild(passwordArea);
  apiPassword.appendChild(buttonEnterApi);
  
  
  const llave = getApiKey();
  
  buttonEnterApi.addEventListener('click', () => {
    setApiKey(passwordArea.value)
    if (llave) {
      navigateTo("/chat", {movie})
    } else {
      return window.alert("Clave incorrecta, intente nuevamente")
    }
    console.log(llave)

  });

  apiPage.innerHTML = `     
      <p class="messageApi">
      Inserta tu API Key aquí: </p>`;

  return apiPassword;
}