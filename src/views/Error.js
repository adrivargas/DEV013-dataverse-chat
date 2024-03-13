import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
export const Error = (props) => {
    
    const viewError = document.createElement("div");
    const errorBody = document.createElement("div");
    
    errorBody.innerHTML = `
      <img = "errorpic" class="errorImg" src="./images/404-error.png" alt="404-error" />
      <h1 class="errorTitulo">Error 404</h1>       
      <p class="errorParrafo">
        Oops! Lo sentimos, no pudimos encontrar la pagina que buscas. 
        Regresa a la pagina principal: </p>
      <img ="atras" class="goBack" src="./images/next.png" alt="atras"/>`;

   
    viewError.appendChild(header());
    viewError.appendChild(errorBody);
    viewError.appendChild(footer());
   
return viewError;
}