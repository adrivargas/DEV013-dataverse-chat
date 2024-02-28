//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
import {data} from '../data/dataset.js';
import { renderData, ordenarNombresAZ, ordenarNombresZA, generoMovies, premiosGanadosTotal, promedioPremiosGanados, calcularEstadisticasIngresosPorGenero } from '../src/lib/dataFunctions.js';

export function Home(props) {
    // Crear el elemento del div
    const viewEl = document.createElement('div');
   
    const viewBtn = document.createElement('div');
    viewEl.classList.add('home-container');
    
    // Crear el elemento del encabezado (header)
    const headerEl = document.createElement('header');
    const pTitele = document.createElement('p');
    const btnStart = document.createElement('button');
    pTitele.textContent = 'Welcome to the home page!';
    viewBtn.appendChild(btnStart);
    

    // Agregar el encabezado al div
    viewEl.appendChild(headerEl);
    viewEl.appendChild(pTitele);
    viewEl.appendChild(viewBtn);

    return viewEl;
}

