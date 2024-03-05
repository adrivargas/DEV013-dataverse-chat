export const header = ()=> {
    const headerGeneral = document.createElement("header");
    header.innerHTML = `
    <img src="./images/header.png" class='header' />
    `;

    return headerGeneral;
};