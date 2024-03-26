
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
}

export const setRoutes = (routes) => {
  // Throw errors if routes isn't an object
  if (typeof routes !== 'object') {
    throw new Error('Routes must be an object');
  }

  // Throw errors if routes doesn't define an /error route
  if (!routes.hasOwnProperty('/error')) {
    throw new Error('Routes must define an /error route');
  }

  // assign ROUTES
  return ROUTES = routes;
};


const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  const params = new URLSearchParams(queryString);
  const objectparams = Object.fromEntries(params); //convertimos a objeto
  console.log(objectparams);
  return objectparams;
}

const renderView = (pathname, props = {}) => {
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  const root = rootEl;
  root.innerHTML = "";
  if (ROUTES[pathname]) {
    const routesView = ROUTES[pathname](props);
    root.append(routesView);
  } else {
    root.append(ROUTES["/error"]());
  }
}

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  // render the view with the pathname and props
  //const viewPath = ROUTES[pathname];
  history.pushState({}, "", pathname);
  //console.log(window.history)
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