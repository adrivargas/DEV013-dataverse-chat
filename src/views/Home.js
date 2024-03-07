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
    viewEl.appendChild(header());
    viewEl.appendChild(movieData);
    viewEl.appendChild(footer());

    return viewEl;
}