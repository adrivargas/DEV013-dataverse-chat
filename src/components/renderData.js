import { navigateTo } from "../router.js";

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

    <div>
    <button class= "prueba" value= ${movies.id}>
    Ver mas
    </button>
    </div>
    </ul>
    `



    <div><buttonView id= "btnView" >Ver Más</buttonView></div>
    </ul>`

  });
  const caja = document.createElement("div")
  caja.innerHTML = root;

  const arrayBtn = caja.querySelectorAll("button")
  arrayBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {

      //console.log(event.target.value);
      navigateTo("/movieInfo", {id : event.target.value})
    })
  })

  // Retornar el contenedor actualiz
  return caja;

};