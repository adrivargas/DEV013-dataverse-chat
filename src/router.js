
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = element;
}

export const setRoutes = (routes) => {
  if (typeof routes === "object") {
    if (routes["/error"]) {
      ROUTES = routes;
    }
  }
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  console.log(queryString);
  //console.log("URL changed:", location.pathname, location.search)
  const params = new URLSearchParams(queryString);
  const object = Object.fromEntries(params);
  return object
}

const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  // funcion para renderizar una vista en elemento root.
  // clear the root element -borrar el elemento root
  const root = rootEl;
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  //  console.log(ROUTES[pathname]); 
  if (ROUTES[pathname]) {
  const { component, title } = ROUTES[pathname];
  //console.log(ROUTES[pathname]);
  //console.log(props)
  //Desetructuración para acceder a las propiedades del pathname
  const template = component(props);

  document.title = title;
  // console.log(template); 
  root.appendChild(template); // add the view element to the DOM root element
  } else {
  // in case not found render the error view
  const { component, title } = ROUTES["/error"];
  root.appendChild(component(props));
  }

} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
  // update window history with pushState
  console.log(pathname)
  history.pushState({}, "", pathname);
 // console.log(window.history);
  renderView(pathname, props);  // render the view with the pathname and props
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  // parse the location for the pathname and search params
  // convert the search params to an object
  const search = location.search;
  const props = queryStringToObject(search) 
  //console.log("Props:", props);
   renderView(location.pathname, props);// renderizar la vista con los parametros 
}




