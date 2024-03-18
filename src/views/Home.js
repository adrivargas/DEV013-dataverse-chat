//linkEl.addEventListener('click', () => navigateTo("/about", { name: "Xochitl" }))
import { header } from '../components/header.js';
import data from '../data/dataset.js';
import { renderData } from '../components/RenderData.js';
import { footer } from '../components/footer.js';
import { Filters } from '../components/filters.js';
import { navigateTo } from '../router.js';
import { ordenarNombresAZ, ordenarNombresZA, generoMovies, calcularEstadisticasIngresosPorGenero,premiosGanadosTotal, promedioPremiosGanados } from '../lib/datafunction.js';
//renderdata en componente no en datafuction
export function Home({ id }) {
  const foundView = data.find((item) => item.id === id);
  const viewEl = document.createElement('div');
  const movieData = document.createElement("div");
  let datosOrdenados = [...data];  // contenedor de cartas (o elementos HTML) que se generarán dinámicamente.
  
  movieData.className = "cartasContainer";
  movieData.innerHTML = renderData(data);
   //----------Uniendo todo ------------------------------------//
  viewEl.append(header(), Filters(), movieData, footer());
  const selectFilter = viewEl.querySelector('[data-testid="select-filter"]');
  const selectSort = viewEl.querySelector("#nombre");
  
  //----------Botones--------------//
  const btnClear = viewEl.querySelector('[data-testid="button-clear"]')
  const btnPremiosGenero = viewEl.querySelector("#premiosPorGenero");
  const btnPremioTotal = viewEl.querySelector("#premiosTotal")
  const btnClose = viewEl.querySelector('#cerrarBoton1');
  const btnCloseT = viewEl.querySelector('#cerrarBoton2')

  //----------------Funciones--------------------//
  const imprimirEstadisticasPorGenero = (estadisticas) => {
    const dialog = viewEl.querySelector("#statsPremios1");
    const generoTitulo = viewEl.querySelector("#generoTitulo");
    const cantidadPeliculas = viewEl.querySelector("#cantidadPeliculas");
    const totalIngresos = viewEl.querySelector("#totalIngresos");
    const ingresoPromedio = viewEl.querySelector("#ingresoPromedio");

    // Limpiar contenido previo
    generoTitulo.innerHTML = '';
    cantidadPeliculas.textContent = '';
    totalIngresos.textContent = '';
    ingresoPromedio.textContent = '';

    for (const genero in estadisticas) {
      // Crear elemento li para el nombre del género
      const generoLi = document.createElement('li');
      generoLi.textContent = `${genero}:`;

      // Crear lista ul para cada género
      const listaUl = document.createElement('ul');

      // Crear elementos li para cada estadística
      const cantidadLi = document.createElement('li');
      cantidadLi.textContent = `Cantidad de películas: ${estadisticas[genero].cantidadPeliculas}`;

      const ingresosLi = document.createElement('li');
      ingresosLi.textContent = `Total de ingresos: $${estadisticas[genero].totalIngresos.toLocaleString()}`;

      const ingresoPromedioLi = document.createElement('li');
      ingresoPromedioLi.textContent = `Ingreso promedio: $${estadisticas[genero].ingresoPromedio.toLocaleString()}`;

      // Adjuntar elementos li al contenedor ul
      listaUl.appendChild(cantidadLi);
      listaUl.appendChild(ingresosLi);
      listaUl.appendChild(ingresoPromedioLi);

      // Adjuntar lista ul al contenedor generoTitulo
      generoLi.appendChild(listaUl);
      generoTitulo.appendChild(generoLi);
    }

    // Abre el dialog
    dialog.showModal();
  };

  const mostrarEstadisticasPremios = (totalPremios, promedioPremios) => {
    const dialog2 = viewEl.querySelector("#statsPremios2");
    const totalSuma = viewEl.querySelector("#totalSumaPremios");
    const totalPromedio = viewEl.querySelector("#promedioSumaPremios");


    totalSuma.textContent = "";
    totalPromedio.textContent = "";
    totalSuma.textContent = `Total de Premios Ganados: ${totalPremios.toLocaleString()}`;
    totalPromedio.textContent = `Total de Premios Ganados: ${promedioPremios.toLocaleString()}`;

    dialog2.showModal();
  };


  //---------------Listener--------------//
  
  selectSort.addEventListener('change', () => {
   if (selectSort.value === 'asc') {
    datosOrdenados = ordenarNombresAZ(datosOrdenados);
    } else if (selectSort.value === 'desc') {
      datosOrdenados = ordenarNombresZA(datosOrdenados);
    }
     movieData.innerHTML = renderData(datosOrdenados);
  });

  selectFilter.addEventListener('change', () => {
    const categoriaSeleccionada = selectFilter.value;
    const peliculasFiltradas = generoMovies(data, categoriaSeleccionada);

    if (selectSort.value === 'asc') {
      datosOrdenados = ordenarNombresAZ(peliculasFiltradas);
    } else if (selectSort.value === 'desc') {
      datosOrdenados = ordenarNombresZA(peliculasFiltradas);
    } else {
      datosOrdenados = peliculasFiltradas;

    }
    movieData.innerHTML = renderData(datosOrdenados);
  });

  btnPremioTotal.addEventListener('click', () => {
    const premiosData = (data);
    const totalPremios = premiosGanadosTotal(premiosData);
    const promedioPremios = promedioPremiosGanados(premiosData);
    mostrarEstadisticasPremios(totalPremios, promedioPremios);
  });

  btnPremiosGenero.addEventListener('click', () => {
    const estadisticas = calcularEstadisticasIngresosPorGenero(data);
    imprimirEstadisticasPorGenero(estadisticas);
    //totalGenero.showModal();
  })

  btnClear.addEventListener('click', function () {
    selectFilter.selectedIndex = 0;
    selectSort.selectedIndex = 0;
    //estadisticaPremios.selectedIndex = 0;
    movieData.innerHTML = renderData(data);
  });

  btnClose.addEventListener('click', () => {
    const dialog = viewEl.querySelector("#statsPremios1");
    dialog.close();
  })
  
  btnCloseT.addEventListener('click', () => {
    const dialog = viewEl.querySelector("#statsPremios2");
    dialog.close();
  })
  //-----------------Navigate-----------------//
  movieData.addEventListener('click', () => navigateTo('/movieInfo'), {});

 


  return viewEl;
}

