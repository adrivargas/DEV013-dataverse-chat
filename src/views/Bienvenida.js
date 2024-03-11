
import { header } from '../components/header.js';
import { footer } from '../components/footer.js';


export function Bienvenida() {

    
    // Crear el elemento del div
    const viewEl = document.createElement('div');
    const viewBtn = document.createElement('div');
    viewEl.classList.add('home-container');

    // Crear el elemento del encabezado (header)
    const pTitele = document.createElement('p');
    const btnStart = document.createElement('button');
     
    pTitele.textContent = 'Bienvenida!';
    viewBtn.appendChild(btnStart);

    //const customHeader= header();
    //headerEl.appendChild(customHeader);

    // Agregar el encabezado al div
 
   viewEl.append(header(), pTitele, viewBtn, footer());

    return viewEl;

}


