//import { navigateTo } from "../router";

export const renderData = (data) => {

  let root = "";
  data.forEach((movies) => {
    root += `
    <ul>
    <li class="card-movie" itemscope itemtype="MovieCards">
    <dl>
    <div class="movie-info">
    <dd itemprop = "imagen" class="ddimagen">
    <img class = "img_movies" src=${movies.imageUrl}> 
    </dd>
    <dt>Nombre:</dt><dd itemprop="name">${movies.name}</dd>
    <dt>Short descripción:</dt><dd itemprop="shortdescription">${movies.shortDescription}</dd>
    <dt>Premios Ganados:</dt><dd itemprop="datos_importantes">${movies.facts.premioGanado}</dd>
    </div>
    </dl>
    </li>

    <div><buttonView class= "btnView" id= ${movies.id} >Ver Más</buttonView></div>
    </ul>`

  });
  return root;

};