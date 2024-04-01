
import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { navigateTo } from '../router.js';
import { Home } from './Home.js';


export const Bienvenida = (props) => {

  const viewEl = document.createElement("div");
  const welcomeBody = document.createElement("div");

  welcomeBody.innerHTML = `
      <img = "popcorn" class="popcorn" src="./images/popcorn.png" alt="popcorn" />
      <h1 class="welcomeTitle">Bienvenida!</h1>  
      <button class="buttonPlay" ></button>`;

  welcomeBody.addEventListener('click', () => navigateTo("/home"), { id: props.id });

  viewEl.appendChild(header());
  viewEl.appendChild(welcomeBody);
  viewEl.appendChild(footer());

  return viewEl;
}


