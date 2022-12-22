// Para el DOM
// Este es el punto de entrada de tu aplicacion
const mostrarModal=(poks)=>{

    let modal=document.createElement('div');
    
    const getTypes = (arr) => {
      let types = '';
      arr.forEach((eachType) => {
        types += `${eachType} `;
      });
      return types;
    };
    
    
    
     modal.innerHTML=
    `<div class="cuadro">
      <div class="modal-flex">
        <div class="head-modal">
          <p class="nombre">${poks.num} - ${poks.name}</p>
          <p class="cerrar"> X </p>
        </div>  
        <img class="imagen" src="${poks.img}">
       
        <div class="info">
          <p class="sub">Generation:</p>
          <p class="sub">${poks.generation.num}</p>
          <p class="sub">${poks.generation.name} </p>
          <p class="sub">Type: ${getTypes(poks.type)} </p>
          <p class="sub">Height: ${poks.size.height} </p>
          <p class="sub">Weight: ${poks.size.weight} </p>
        </div>
        
        <div class="evolucion">
          <p class=titulo>Stats</p>
          <div class="evo1">
          
          <p class="sub">Max HP: ${poks.stats['max-hp']} </p>
          <p class="sub">Max CP: ${poks.stats['max-cp']} </p>
         
          </div>
        </div>
        <div class="otroModal">
          <p class="flecha"> -> </p>
        </div>
      </div>
    </div>`
         
    modal.className = 'modal'
    // <p class="sub">Candy-cost: ${poks.evolution["next-evolution"][0]["candy-cost"]} </p>
    
    //seleccionar donde se va a poner el nodo - elemento padre
    let elementoPadre=document.querySelector('.container-modal')
    
    //agregar nodo
    elementoPadre.appendChild(modal);
    
    
    //cerrar modal
    modal.style.display = 'flex';
    modal.querySelector('.cerrar').addEventListener('click', () => {
      modal.classList.remove('modal');
      elementoPadre.innerHTML = '';
    });
    const modalF = document.querySelector('.modal');
    window.addEventListener('click', (evento) => {
      if (evento.target === modalF) {
        modal.classList.remove('modal');
        elementoPadre.innerHTML = '';
      }
    });
     }