import data from '../data/dataset.js';
import { header} from '../components/header.js';
import { footer} from '../components/footer.js';
import { renderData } from '../components/RenderData.js';
import { navigateTo } from '../router.js';
export function MovieInfo({id}){
    const foundView = data.find((item) => item.id === id);
    const prueba = document.createElement('div');
    const btnHome = document.createElement('button');
    btnHome.className = "btnHome";
    btnHome.addEventListener('click',()=>navigateTo("/home",{}));
    // const movieInfo = document.getElementsByClassName("card-movie");
    const datos = renderData(data);
    
    console.log(datos);
    prueba.innerHTML = "Sirve";
    prueba.appendChild(header());
    prueba.appendChild(btnHome);
    // prueba.appendChild(movieInfo);
    prueba.appendChild(footer());
    return prueba;
}