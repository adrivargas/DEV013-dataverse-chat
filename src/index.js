// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import {Home} from './views/Home.js';
import {About} from './views/About.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/about':About
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById("root"));
});

// Handle URL changes
window.addEventListener('popstate', ({objetivo}) => {
  onURLChange(location);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/