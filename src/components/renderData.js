import { navigateTo } from "../router.js";

export const renderData = (data) => {

  let root = "";
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
<<<<<<< HEAD
    <div><buttonView id= "btnView" >Ver Más</buttonView></div>
    </ul>`
  const caja = document.createElement("div")
  caja.innerHTML = root;
=======

    <div><buttonView class= "btnView" id= ${movies.id} >Ver Más</buttonView></div>
    </ul>`

  });
  // const caja = document.createElement("div")
  // caja.innerHTML = root;
>>>>>>> cebc86cf6b55092af4d6b130c7e7e3eadb463874

  // const arrayBtn = caja.querySelectorAll("button")
  // arrayBtn.forEach((btn) => {
  //   btn.addEventListener("click", (event) => {

<<<<<<< HEAD
      //console.log(event.target.value);
      navigateTo("/movieInfo", { id: event.target.value })
    })
  })
=======
  //     //console.log(event.target.value);
  //     navigateTo("/movieInfo", {id : event.target.value})
  //   })
  // })
>>>>>>> cebc86cf6b55092af4d6b130c7e7e3eadb463874

  // Retornar el contenedor actualiz
  return root;

};