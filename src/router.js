
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
}

export const setRoutes = (routes) => {
    const routes = {
        "/": Home,
        "/about": About
    }
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}


export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
  const renderView = (pathname, props={}) => {
    // clear the root element
    // find the correct view in ROUTES for the pathname
    // in case not found render the error view
    // render the correct view passing the value of props
    // add the view element to the DOM root element
  } 
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}




