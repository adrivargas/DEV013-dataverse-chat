export const Filters = () => {
    const article = document.createElement("article");
    article.innerHTML = `
    <label for="categorias"> </label>
      <select data-testid="select-filter" id="categorias" name="genero">
      <option value="">Seleccione Categoría</option> 
      <option value="Accion">Acción</option>
      <option value="Ciencia_Ficcion">Ciencia Ficción</option>
      <option value="Drama">Drama</option>
      <option value="Romance">Romance</option>
      <option value="Animacion">Animación</option>
      <option value="Fantasia">Fantasia</option>
      <option value="Comedia">Comedia</option>
      </select>
      <label for="nombre"> </label>
      <select data-testid="select-sort" id="nombre" name="orden">
      <option value="Ordene">Ordene</option> 
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
      </select>
      <label for="premiosPorGenero" class="estadisticasTitle" >Estadisticas de Premios: </label> 
      <button id="premiosPorGenero">Ingresos por Genero</button>
      <button id="premiosTotal">Total Premios Ganados</button>
    </div>

    <dialog class="statsPremios1" id="statsPremios1">
      <h2>Ganancias por Género</h2>
      <li id="generoTitulo"></li>
      <li id="cantidadPeliculas"></li>
      <li id="totalIngresos"></li>
      <li id="ingresoPromedio"></li>
      <button class="cerrarBoton1" id="cerrarBoton1">Cerrar Stadisticas</button>
    </dialog>
    <dialog class="statsPremios2" id="statsPremios2">
      <h2 id="statspremios">Premios Ganados </h2>
      <li id="totalSumaPremios"></li>
      <li id="promedioSumaPremios"></li>
      <button class="cerrarBoton2" id="cerrarBoton2">Cerrar Stadisticas</button>
    </dialog>

    <div class="centrarboton">
      <button data-testid="button-clear" class="botonResetear">Resetear</button> 
    </div>
      `

      return article;

}