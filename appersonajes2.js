const $contenedor = document.getElementById("persona");
const URL_API = "https://rickandmortyapi.com/api/character/?page=2";

// API
// Contenedor de html para renderizar contenido
// promesas (asincronnismo en JS)

fetch(URL_API)

 .then((response) => {
    return response.json();
 })

 .then((data) => {
    const persona = data.results;

    // persona.length
    for (let i = 0; i < persona.length; i++) {

      //desctructuring
      const { name, gender, species, status, image } = persona[i];

      $contenedor.innerHTML += `
     
      <div class="persona-control">
      <div class="texto-total">
       <img
        class="ima-contor"
        src="${image}"
        alt="imagen de ${name}"
       />
       <div class="texto-control">
        <div class="tex-control">
         <h5>${name}</h5>
          <b>
           <h6>Estado:${status}</h6>
           <h6>Género:${gender}</h6>
           <h6>Especie:${species}</h6>
          </b>
        </div>
       </div>
      </div>
      </div>
  
      `;   
    }
 });
