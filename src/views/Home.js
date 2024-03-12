//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
import { header } from '../components/header.js';
import data from '../data/dataset.js';
import { renderData } from '../components/RenderData.js';
import { footer } from '../components/footer.js';
//renderdata en componente no en datafuction
export function Home(props) {
    const viewEl = document.createElement('div');
    const movieData = document.createElement("div");   // contenedor de cartas (o elementos HTML) que se generarán dinámicamente.
    movieData.className = "cartasContainer";
    movieData.innerHTML = renderData(data)

    //Menu con todos los filtros y estadisticas
    const ul = document.createElement('ul');
    ul.innerHTML = `
    <ul class="homeMenu">
    <li><a class="menuItem" href="#">Sort A-z</a></li>
    <li><a class="menuItem" href="#">Filtra for Genero</a></li>
    <li><a class="menuItem" href="#">Estadisticas</a></li>
    </ul>
   
    <button class="hamburger">
    <i id="menuIcon">menu</i>
    <i id="closeIcon">close</i>
    </button>`;

    const menu = document.querySelector(".homeMenu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.getElementById("#closeIcon");
    const menuIcon = document.getElementById("#menuIcon");

    function toggleMenu() {
        if (menu.classList.contains("showMenu")) {
            menu.classList.remove("showMenu");
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        } else {
            menu.classList.add("showMenu");
            //closeIcon.style.display = "block";
            //menuIcon.style.display = "none";
            closeIcon.addEventListener('click', (event) => {
                console.log("probando")
            });
        }
    }

    //hamburger.addEventListener('click', (toggleMenu) => {
      //  console.log("probando")
   // });


    menuItems.forEach(
        function (menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        }
    )

    //Uniendo todo 

    viewEl.appendChild(header());
    viewEl.appendChild(ul);
    viewEl.appendChild(movieData);
    viewEl.appendChild(footer());
    return viewEl;
}

