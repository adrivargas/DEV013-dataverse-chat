// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import {About} from './views/About.js';
import {Error} from './views/Error.js';
import {Home} from './views/Home.js';
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
  '/': Home,
  '/about': About,
  '/error': Error
};

// Assign the routes
const viewPage = document.getElementById("root");
setRoutes(routes);
setRootEl(viewPage);

// Set the root element where views will be rendered
// Handle initial URL load
window.addEventListener("DOMContentLoaded", (event) => {
 
  onURLChange(event.target.location);
});