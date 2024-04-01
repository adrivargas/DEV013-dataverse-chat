import data from '../data/dataset.js';
import { header } from '../components/header.js';
import { footer } from '../components/footer.js';
import { renderData } from '../components/renderData.js';
import { navigateTo } from '../router.js';
export function MovieInfo(props) {
  // console.log(props);// 1-24

  const container = document.createElement('div');
  container.id = "containerMovie";
  //const icono = document.createElement('div');
  const btnHome = document.createElement('button');
  btnHome.className = "btnHome";
  btnHome.addEventListener('click', () => navigateTo("/home", {}));
  const botonChatearConMovies = document.createElement('button');
  botonChatearConMovies.textContent = "Chatea conmigo";
  botonChatearConMovies.className = "botonchateaconmigo"
  

  const selectedMovie = props.id;
  //container.innerHTML=
  

  const selectedMovieInfo = data.find(
    (movies) => movies.id === selectedMovie
  );

  
  console.log(selectedMovieInfo);
  if (selectedMovieInfo) {
    const prueba = []
    prueba.push(selectedMovieInfo)
    console.log(prueba);
    //const longCard = renderData(prueba);
    //container.appendChild(longCard);
    container.innerHTML = renderData(prueba)
  } else {
    // Mensaje cuando no se encuentra la tarjeta
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Tarjeta no encontrada";
    container.appendChild(errorMessage);
  }
  botonChatearConMovies.addEventListener('click', () => { 
    console.log(selectedMovieInfo); 
    console.log(selectedMovie); 
    navigateTo ('/apirequest',{selectedMovieInfo})});
  container.append(header(), btnHome, selectedMovieInfo, botonChatearConMovies, footer());
  return container;
}