//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
import { header } from '../components/header.js';
import data from '../data/dataset.js';
import { renderData } from '../components/RenderData.js';
import { footer } from '../components/footer.js';
import { showMovieModal } from '../lib/datafunction.js';
import { Filters } from '../components/filters.js';
import { navigateTo } from '../router.js';
//renderdata en componente no en datafuction
export function Home({ id }) {
    const foundView = data.find((item) => item.id === id);
    const viewEl = document.createElement('div');
    const movieData = document.createElement("div");   // contenedor de cartas (o elementos HTML) que se generarán dinámicamente.
    movieData.className = "cartasContainer";
    movieData.innerHTML = renderData(data);

    
    const divMenu = document.createElement('div'); //Menu con todos los filtros y estadisticas
    divMenu.id = "divMenu";
    divMenu.appendChild(Filters())
    
    
    movieData.addEventListener('click', () =>navigateTo('/movieInfo'),{} 
    );


    //----------Uniendo todo ------------------------------------//

    viewEl.appendChild(header());
    viewEl.appendChild(Filters());
    viewEl.appendChild(movieData);
    viewEl.appendChild(footer());
    return viewEl;
}

