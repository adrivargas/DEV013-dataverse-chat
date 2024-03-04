export const Error = (props) => {
    const viewError = document.createElement("section");
    const contentError = document.createElement("section");
    contentError.innerHTML = `
    <div class="error" id="error">
        <img = "errorpic" src="./images/404-error.png" alt="404-error" />
        <h1 class="error-texto">Error 404</h1>       
        <p class="errorparrafo">
        Oops! Lo sentimos, no pudimos encontrar la pagina que buscas. Regresa a la pagina principal: </p>
        <img ="atras" src="./images/next.png" alt="atras"/>

</div>
`;

viewError.append(contentError);
return viewError;

};
