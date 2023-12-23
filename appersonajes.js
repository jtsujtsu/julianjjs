let pagina = 7;

const btnuno = document.getElementById("btnuno");
const btndos = document.getElementById("btndos");

const $contenedor = document.getElementById("persona");
const carperso = `https://rickandmortyapi.com/api/character/?page=${pagina}`;

btnuno.addEventListener("click", () => {
  pagina = 1;

  const carperso = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
  console.log(carperso);
  console.log(pagina);
  console.log(fetch(carperso));

  fetch(carperso)
    .then((response) => {
      return response.json();
    })

    .then((datoperso) => {
      const persona = datoperso.results;
      // persona.length
      for (let i = 0; i < persona.length; i++) {
        //desctructuring
        const { name, gender, species, status, image } = persona[i];
        console.log(persona[i]);
      }
    });
});

btndos.addEventListener("click", () => {
  pagina = 2;

  const carperso = `https://rickandmortyapi.com/api/character/?page=${pagina}`;
  console.log(carperso);
  console.log(pagina);
  console.log(fetch(carperso));

  fetch(carperso)
    .then((response) => {
      return response.json();
    })

    .then((datoperso) => {
      const persona = datoperso.results;
      // persona.length
      for (let i = 0; i < persona.length; i++) {
        //desctructuring
        const { name, gender, species, status, image } = persona[i];
        console.log(persona[i]);
      }
    });
});

console.log(carperso);
console.log(pagina);
console.log(fetch(carperso));

// API
// Contenedor de html para renderizar contenido
// promesas asincronnismo en

fetch(carperso)
  .then((response) => {
    return response.json();
  })

  .then((datoperso) => {
    const persona = datoperso.results;
    // persona.length
    for (let i = 0; i < persona.length; i++) {
      //desctructuring
      const { name, gender, species, status, image } = persona[i];
      console.log(persona[i]);
      $contenedor.innerHTML += `
       <div class="persona">
       <div class="texto-total">
       <h5>${pagina}</h5>
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
