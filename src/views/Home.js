//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
import { header } from '../components/header.js';
import data from '../data/dataset.js';
import { renderData } from '../components/RenderData.js';
import { footer } from '../components/footer.js';
import { showMovieModal } from '../lib/datafunction.js';
import { Filters } from '../components/filters.js';
//renderdata en componente no en datafuction
export function Home(props) {
    const viewEl = document.createElement('div');
    const movieData = document.createElement("div");   // contenedor de cartas (o elementos HTML) que se generarán dinámicamente.
    movieData.className = "cartasContainer";
    movieData.innerHTML = renderData(data);

    //Menu con todos los filtros y estadisticas
    const divMenu = document.createElement('div');
    divMenu.id = "divMenu";
    divMenu.appendChild(Filters())
   
  
    
    

    const showMovieModal = document.createElement('dialog');
    showMovieModal.className = "viewMoreModal";
    

    movieData.addEventListener('click', (event) => {
        if (event.target.matches('#btn')) {
            const btnclose = document.createElement("button");
            btnclose.className = "bttnclose";
            showMovieModal.appendChild(btnclose);
            movieData.innerHTML = "";
            const selectMovie = document.createElement("div");
            selectMovie.innerHTML= `<li 
            <img src="./images/next.png"> 
            </li>`
            btnclose.addEventListener('click',(event)=>{
                showMovieModal.close();
                movieData.innerHTML = renderData(data);
            });
            showMovieModal.appendChild(selectMovie);
            showMovieModal.showModal();
        }
    });


    //----------Uniendo todo ------------------------------------//

    viewEl.appendChild(header());
    viewEl.appendChild(Filters());
    viewEl.appendChild(movieData);
    viewEl.appendChild(showMovieModal);
    viewEl.appendChild(footer());
    return viewEl;
}

