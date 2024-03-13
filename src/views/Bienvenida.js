
import { header } from '../components/header.js';
import { footer } from '../components/footer.js';


export const Bienvenida = (props) => {

    const viewEl = document.createElement("div");
    const welcomeBody=document.createElement("div");

    welcomeBody.innerHTML = `
      <img = "popcorn" class="popcorn" src="./images/popcorn.png" alt="popcorn" />
      <h1 class="welcomeTitle">Bienvenida!</h1>  
      <button class="buttonPlay" ></button>`;
    
    
    viewEl.appendChild(header());
    viewEl.appendChild(welcomeBody);
    viewEl.appendChild(footer());
     
  return viewEl;
  } 
    
      //const viewBtn = document.createElement('div');
    //viewEl.classList.add('home-container');

    // Crear el elemento del encabezado (header)
    //const pTitele = document.createElement('p');
    //const btnStart = document.createElement('button');

     
    //pTitele.textContent = 'Bienvenida!';
   // viewBtn.appendChild(btnStart);

    //const customHeader= header();
    //headerEl.appendChild(customHeader);

    // Agregar el encabezado al div
 
   //viewEl.append(header(), pTitele, viewBtn, footer());

   // return viewEl;

//}
