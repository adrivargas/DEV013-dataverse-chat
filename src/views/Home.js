//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import data from '../data/dataset.js'
import { renderData } from '../components/renderData.js';
//renderdata en componente no en datafuction
export function Home(props) {
    const viewEl = document.createElement('div');
    const movieData = document.createElement("div");   // contenedor de cartas (o elementos HTML) que se generarán dinámicamente.
    movieData.className = "cartasContainer";
    movieData.innerHTML = renderData(data) 

    //Menu con todos los filtros y estadisticas
    const hiddenMenu = document.createElement('div');
    hiddenMenu.setAttribute("class" , "hiddenMenu");

    const ul = document.createElement('ul');
    ul.setAttribute("class" , "ul");

    const sortAZ = document.createElement('li');
    sortAZ.setAttribute("class" , "sortAZ");
    sortAZ.textContent = `Sort by A-Z`;

    const filter = document.createElement('li');
    filter.setAttribute("class" , "filter");
    filter.textContent = `Filtra por Genero`;

    const statistics = document.createElement('li');
    statistics.setAttribute("class" , "statistics");
    statistics.textContent = `Estadisticas`;
    //Para el icono

    const nav = document.createElement('nav');
    nav.setAttribute("class" , "nav"); 
    const hamMenu = document.createElement('div');
    hamMenu.className = "hamMenu";

    const menu = document.querySelector('.hamMenu');
    const hiddenmenu = document.querySelector('.hiddenMenu');
    hamMenu.addEventListener ('click', () =>{
        menu.classList.toggle('active');
        hiddenmenu.classList.toggle('active');
    })
    //Uniendo todo 
 
    viewEl.appendChild(header());
    viewEl.appendChild(hamMenu); 
        viewEl.appendChild(hiddenMenu); 
        viewEl.appendChild(ul);
        viewEl.appendChild(sortAZ);
        viewEl.appendChild(filter);
        viewEl.appendChild(statistics);
        viewEl.appendChild(nav);
    
    viewEl.appendChild(movieData);
    viewEl.appendChild(footer());
    return viewEl;


    




}