
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  if (typeof routes != "object") {
     throw new Error("Error");
  }
  return ROUTES = routes;
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  const params = new URLSearchParams(queryString);
  const objectparams = Object.fromEntries(params); //convertimos a objeto
  console.log(objectparams);
  return objectparams;
}

const renderView = (pathname, props={}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  const root = rootEl;
  root.innerHTML = "";
  const viewPath = ROUTES[pathname];//Nos falta  comprobar view error
  const viewRender = viewPath(props);//Asignamos valor a props
  root.appendChild(viewRender);
} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
  const viewPath = ROUTES[pathname];
  history.pushState(viewPath,{});
  renderView(pathname, props);
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  const searchParams = location.search;
  const paramsObject = queryStringToObject(searchParams);
  renderView(location.pathname, paramsObject);
}