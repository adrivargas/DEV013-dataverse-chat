//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
import { header } from '../components/header.js';
import data from '../data/dataset.js';
import { renderData } from '../components/RenderData.js';
import { footer } from '../components/footer.js';
import { Filters } from '../components/filters.js';
import { navigateTo } from '../router.js';
import { ordenarNombresAZ, ordenarNombresZA, generoMovies, calcularEstadisticasIngresosPorGenero } from '../lib/datafunction.js';
//renderdata en componente no en datafuction
export function Home({ id }) {
    const foundView = data.find((item) => item.id === id);
    const viewEl = document.createElement('div');
    const movieData = document.createElement("div");   // contenedor de cartas (o elementos HTML) que se generarán dinámicamente.
    movieData.className = "cartasContainer";
    movieData.innerHTML = renderData(data);

    const divMenu = document.createElement('div'); //Menu con todos los filtros y estadisticas
    const filtersElement = Filters();
    divMenu.id = "divMenu";

    divMenu.appendChild(filtersElement);

    //const selectSort = document.querySelector('[data-testid="select-sort"]');
    
    const selectFilter = filtersElement.querySelector('[data-testid="select-filter"]');
    const selectSort = filtersElement.getElementsByClassName("categorias");
    console.log(filtersElement);
    console.log(selectFilter);
    // selectSort.addEventListener('click',(event)=>{
    //     console.log("valw");

    // });
    // if (selectSort.value === 'asc') {
    //     datosOrdenados = ordenarNombresAZ(datosOrdenados);
    //   } else if (selectSort.value === 'desc') {
    //     datosOrdenados = ordenarNombresZA(datosOrdenados);
    // }

    // Llama a la función renderItems y actualiza el contenido del contenedor
    // const showData = renderData(datosOrdenados);
    // viewEl.appendChild(showData);

    
    


    
    movieData.addEventListener('click', () =>navigateTo('/movieInfo'),{} 
    );


    //----------Uniendo todo ------------------------------------//

    viewEl.appendChild(header());
    viewEl.appendChild(Filters());
    viewEl.appendChild(movieData);
    viewEl.appendChild(footer());
    return viewEl;
}

