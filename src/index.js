// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import Home from './views/Home';
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
  setRootEl(/* root element */);
});

// Handle initial URL load
window.addEventListener("DOMContentLoaded", () => {
  // set root element
  // invoke onURLChange 
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