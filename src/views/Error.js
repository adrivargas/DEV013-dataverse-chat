export function Error(props){
    const viewEr = document.createElement('div');
    viewEr.classList.add('error');
    const headerEl = document.createElement('header');
    const imgError = document.createElement('img');
    imgError.classList.add('imgEr');
    const parraErr = document.createElement('p');
    const parraCont = document.createElement('p');
    parraErr.textContent = "Error 404";
    parraCont .textContent = "Oops!,Lo sentimos, no pudimos encontrar la pagina que buscas.Regresa a la pagina principal:";

    

    viewEr.appendChild(parraErr);
    viewEr.appendChild(parraCont);
    viewEr.appendChild(imgError);
    viewEr.appendChild(headerEl);

    return viewEr;
};

