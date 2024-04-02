// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Home } from './views/home.js';
import { chatIndividual } from './views/chatIndividual.js';
import { Error } from './views/Error.js';
import { Bienvenida } from './views/Bienvenida.js';
import { MovieInfo } from './views/MovieInfo.js';
import { apiKeyRequest } from './views/ApiRequest.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
// Define your routes and their associated views
const routes = {
  '/': Bienvenida,
  '/chat': chatIndividual,
  '/home': Home,
  '/error': Error,
  '/movieInfo': MovieInfo,
  '/apirequest': apiKeyRequest,
};

// Assign the routes
const root = document.getElementById("root");
setRoutes(routes);
setRootEl(root);

document.addEventListener("DOMContentLoaded", (e) => {
  onURLChange(e.target.location);
});



// Set the root element where views will be rendered
// Handle initial URL load

window.addEventListener('popstate', () => {
  // Llama a la función onURLChange con la ubicación actual
  
  onURLChange(window.location);
});




