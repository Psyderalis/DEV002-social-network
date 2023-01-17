/* eslint-disable no-param-reassign */
import {
  deleteTask, getTask, onGetTasks, saveTask, updateTask, giveLike
} from './firestore.js';

// import { userState } from './firebase.js';

export const homeE = (taskContainer, taskForm) => {
  let editando = false;
  let id = '';

  window.addEventListener('DOMContentLoaded', async () => {
    // const querySnapshot = await getTasks();

    onGetTasks((querySnapshot) => {
      let divContain = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        divContain += `
        <section class="post">
        <div class="cabezaDePost">
        <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario'>
        <p class="nombreDeUsuario"> Manchitas</p>
        <ul disabled selected class ="menu-horizontal" id="mas"><img src="imagenes/mas.png" width=30px height=30px>
         <div class="edit-delet">
         <li class='editar' data-id='${doc.id}'><img width=15px src="imagenes/editar.png"> Editar publicación</li>
         <li class='delete' data-id='${doc.id}'><img width=15px src="imagenes/eliminar.png"> Eliminar </li>
         </div>
        </ul>
        </div>
        <div class="cuerpoDePost" >
        <p class="contenidoP"> ${task.description} </p> 
        </div>
        <div  class="linea"></div>
        <div class="footerDePost">
        <img class="like" data-id="${doc.id}" src="imagenes/dislike.png" width=30px>
        <p>1 Me encanta</p>
        </div>
        </section>  
        `;
      });
      taskContainer.innerHTML = divContain;

      // userState((user) => {
      //   const divElemnt = document.querySelector('.post')
      //   const nameUser = divElemnt.querySelector('.nombreDeUsuario')

      //   if (user) {
      //     const displayName = user.displayName;
      //     const photoURL = user.photoURL;
      //     nameUser.innerHTML = displayName;
      //     // const photoUser.src = photoURL;
      //     console.log(displayName, photoURL, nameUser)
      //   }
      // })
      const likeBtn = taskContainer.querySelectorAll('.like');

      likeBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          giveLike(e.target.dataset.id);
          btn.src="imagenes/like.png";
        });
      });

      const btnEliminar = taskContainer.querySelectorAll('.delete');

      btnEliminar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deleteTask(e.target.dataset.id);
        });
      });

      const btnEditar = taskContainer.querySelectorAll('.editar');

      btnEditar.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();

          taskForm.description.value = task.description;
          id = e.target.dataset.id;
          editando = true;

          taskForm.guardar.innerText = 'Editar y publicar';
        });
      });
    });
  });

  taskForm.addEventListener('submit', (e) => {
    // para no recargar la pag
    e.preventDefault();

    const description = taskForm.description;

    if (!editando) {
      saveTask(description.value);
    } else {
      updateTask(
        id,
        { description: description.value },
      );
      editando = false;
      taskForm.guardar.innerText = 'Publicar';
    }

    taskForm.reset();
  });
};
