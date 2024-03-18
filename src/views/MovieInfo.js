import data from '../data/dataset.js';
import { header} from '../components/header.js';
import { footer} from '../components/footer.js';
import { renderData } from '../components/RenderData.js';
import { navigateTo } from '../router.js';
export function MovieInfo({id}){
    const foundView = data.find((item) => item.id === id);
    const container = document.createElement('div');
    const prueba = document.createElement('p');
    const icono = document.createElement('div');
    const btnHome = document.createElement('button');
    btnHome.className = "btnHome";
    btnHome.addEventListener('click',()=>navigateTo("/home",{}));
    // const movieInfo = document.getElementsByClassName("card-movie");
    const datos = renderData(data);
    prueba.innerHTML = "Estamos en mantenimiento, regrese pronto";
    console.log(datos);
    container.appendChild(header());
    container.appendChild(btnHome);
    container.appendChild(prueba);
    // prueba.appendChild(movieInfo);
    container.appendChild(footer());
    return container;
}


