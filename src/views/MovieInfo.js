import data from '../data/dataset.js';
import { header} from '../components/header.js';
import { footer} from '../components/footer.js';
import { renderData } from '../components/RenderData.js';
import { navigateTo } from '../router.js';
export function MovieInfo({id}){
    //console.log(id);
    // entrar a la data y encontrar el id (filter, find)
    const arrayFiltrado = data.filter(movie => movie.id == id );
    console.log(arrayFiltrado);
    const container = document.createElement('div');
    container.id = "containerMovie";
    const icono = document.createElement('div');
    const btnHome = document.createElement('button');
    btnHome.className = "btnHome";
    btnHome.addEventListener('click',()=>navigateTo("/home",{}));
    
    // Obtener el Id de la tarjeta seleccionada de los parámetros de la URL
    // const selectedMovie = data.find((movie) => movie.id === id);
    // console.log(selectedMovie);
  
    // Filtra los datos para obtener solo la tarjeta seleccionada
    // const selectedMovieInfo = data.find(
    //   (movies) => movies.id === selectedMovie
    // );
    // console.log(selectedMovieInfo);
    //   if (selectedMovieInfo) {
    //     const longCard = renderData([selectedMovieInfo]);
    //     container.appendChild(longCard);
    //   } else {
    //     // Mensaje cuando no se encuentra la tarjeta
    //     const errorMessage = document.createElement("p");
    //     errorMessage.textContent = "Tarjeta no encontrada";
    //     container.appendChild(errorMessage);
    // }
    container.append(header(),btnHome, footer());
    return container;
}


