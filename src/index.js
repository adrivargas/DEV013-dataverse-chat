// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { Home } from './views/home.js';
import {Chat} from './views/Chat.js';
import {Error} from './views/Error.js';
import {Bienvenida} from './views/Bienvenida.js';
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
  '/chat': Chat,
  '/home': Home,
  '/error': Error
};

// Assign the routes
setRoutes(routes);
const root = document.getElementById("root");
document.addEventListener("DOMContentLoaded", (e) => {
  setRootEl(root);
  return root;
});



// Set the root element where views will be rendered
// Handle initial URL load
window.addEventListener("DOMContentLoaded", (e) => {
  setRootEl(root);
  onURLChange(e.currentTarget.location);
});





