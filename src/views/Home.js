//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
//import { header } from '../components/header.js';
import data from '../data/dataset.js'
import { renderData, ordenarNombresAZ, ordenarNombresZA, generoMovies, premiosGanadosTotal, promedioPremiosGanados, calcularEstadisticasIngresosPorGenero } from '../lib/datafunction.js';
//Solucion por medio de las rutas y como se esta llamando. 
//renderdata en componente no en datafuction
export function Home(props) {
    // Crear el elemento del div
    const viewEl = document.createElement('div');

    const viewBtn = document.createElement('div');
    viewEl.classList.add('home-container');

    // Crear el elemento del encabezado (header)
    const headerEl = document.createElement('header');
    const pTitele = document.createElement('p');
    const btnStart = document.createElement('button');
    pTitele.textContent = 'Bienvenida!';
    viewBtn.appendChild(btnStart);

    //const customHeader= header();
    //headerEl.appendChild(customHeader);

    // Agregar el encabezado al div
    viewEl.appendChild(headerEl);
    viewEl.appendChild(pTitele);
    viewEl.appendChild(viewBtn);
    

    return viewEl;
}

