//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
import { header } from '../components/header.js';
import data from '../data/dataset.js';
import { renderData } from '../components/RenderData.js';
import { footer } from '../components/footer.js';
//renderdata en componente no en datafuction
export function Home(props) {
    const viewEl = document.createElement('div');
    const movieData = document.createElement("div");   // contenedor de cartas (o elementos HTML) que se generarán dinámicamente.
    movieData.className = "cartasContainer";
    movieData.innerHTML = renderData(data) 
    viewEl.append(header(),movieData,footer());
    return viewEl;
}

