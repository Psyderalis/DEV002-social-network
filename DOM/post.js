/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import {
  deleteTask, getTask, onGetTasks, saveTask, updateTask, giveLike, disLike,
} from '../app/firestore.js';

import { user1 } from '../app/auth.js';

export const homeE = (taskContainer, taskForm, div) => {
  const editando = false;
  let idEdit = '';

  const flechaAtras = document.createElement('div');
  flechaAtras.className = 'flechaAtras';

  const foto = document.createElement('img');
  foto.className = 'fotoDePerfil';
  foto.src = 'imagenes/pug.jpg';

  const nombre = document.createElement('p');
  nombre.className = 'nombreDeUsuario';
  nombre.innerText = 'Manchitas';

  const cabezaDePost = document.createElement('div');
  cabezaDePost.className = 'cabezaDeEdit';

  const inputPost = document.createElement('textarea');
  inputPost.className = 'inputPost';

  const textoEdit = document.createElement('p');
  textoEdit.className = 'textoEdit';
  textoEdit.innerText = 'Editando Publicación';

  const btnGuardar = document.createElement('button');
  btnGuardar.className = 'btnGuardar';
  btnGuardar.innerText = 'Guardar';
  const modal = document.createElement('section');
  modal.className = 'modalEditar';

  const edit = document.createElement('div');
  edit.className = 'edit';

  const postEdit = document.createElement('div');
  postEdit.className = 'postEdit';

  // espera a que DOM se cargue completamente
  window.addEventListener('DOMContentLoaded', async () => {
    // const querySnapshot = await getTasks();
    // querysnapshot es una "foto" instantánea de la base de datos
    onGetTasks((querySnapshot) => {
      let divContain = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        const likes = task.likes;
        const numero = likes.length;
        const userId = user1().uid;
        const currentLike = likes.indexOf(userId);
        let likeSrc = '';
        const likeImg = () => {
          if (currentLike === -1) {
            likeSrc = 'imagenes/dislike.png';
          } else {
            likeSrc = 'imagenes/like.png';
          }
        };
        likeImg();

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
        <img class="like" data-id="${doc.id}" src='${likeSrc}' width=30px>
        <p class="contadorLike" data-id="${doc.id}"> ${numero} Me encanta</p>
        </div>
        </section>  
        `;
      });
      taskContainer.innerHTML = divContain;

      // -----------------------------------
      const btnEliminar = taskContainer.querySelectorAll('.delete');
      console.log(btnEliminar);

      // const test1 = document.querySelector('.contentmodal');
      // console.log(test1);
      btnEliminar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          console.log(e.target.dataset.id);
          const deleteModalContenedor = document.createElement('div');
          deleteModalContenedor.className = 'delete-Modal-Contenedor';
          deleteModalContenedor.id = 'delete-Modal-Contenedor';
          // ------------

          const prueba = `
                    <div id="delete-Modal" class="delete-Modal">
                    <p id="equisSalir" class="equisSalir"> X </p>
                    <p id="Q" class="Q"> ¿Quieres eliminar este post? </p>
                    <button id="borrarBtn" data-id='${e.target.dataset.id}' class="borrarBtn">Eliminar</button>
                    </div>
                     `;

          deleteModalContenedor.innerHTML = prueba;
          div.appendChild(deleteModalContenedor);

          const boton = deleteModalContenedor.querySelector('.borrarBtn');
          const equisSalir = deleteModalContenedor.querySelector('.equisSalir');
          const deleteModal = deleteModalContenedor.querySelector('.delete-Modal');

          boton.addEventListener('click', async (e) => {
            console.log(e.target.dataset.id);
            await deleteTask(e.target.dataset.id).then((res) => {
              deleteModalContenedor.style.display = 'none';
              deleteModal.style.display = 'none';
            }).catch((err) => console.log(err));
          });

          // test1.style.display = 'flex';
          deleteModalContenedor.style.display = 'flex';
          deleteModal.style.display = 'flex';

          console.log(equisSalir);
          equisSalir.addEventListener('click', () => {
            // test1.style.display = 'none';
            deleteModalContenedor.style.display = 'none';
            deleteModal.style.display = 'none';
          });
        });
      });
      // -----------------------------------

      const userId = user1().uid;
      const likeBtn = taskContainer.querySelectorAll('.like');

      // likeBtn.forEach((btn) => {
      //   btn.src = 'imagenes/dislike.png'
      // })

      likeBtn.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const id = e.target.dataset.id;
          const doc = await getTask(id);
          const likes = doc.data().likes;
          const currentLike = likes.indexOf(userId);
          // let numero = likes.length;
          console.log(likes);
          if (currentLike === -1) {
            // btn.src = 'imagenes/like.png';
            giveLike(id, userId);
            // console.log(btn)
            // numero = numero + 1
            // console.log(numero + " likes")
            // contadorLike.innerHTML = numero + " me encanta"
          } else {
            // btn.src = 'imagenes/dislike.png';
            disLike(id, userId);
            // numero = numero - 1
            // console.log(numero + " likes")
            // contadorLike.innerHTML = numero + " me encanta"
            // console.log(btn)
          }
        });
      });

      // const btnEliminar = taskContainer.querySelectorAll('.delete');

      // btnEliminar.forEach((btn) => {
      //   btn.addEventListener('click', (e) => {
      //     deleteTask(e.target.dataset.id);
      //   });
      // });

      const btnEditar = taskContainer.querySelectorAll('.editar');

      btnEditar.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();

          console.log(task);
          modal.style.display = 'flex';
          cabezaDePost.append(foto, nombre);
          postEdit.append(cabezaDePost, inputPost);
          edit.append(flechaAtras, textoEdit, postEdit, btnGuardar);
          modal.appendChild(edit);
          div.appendChild(modal);

          inputPost.value = task.description;
          console.log(task.description);
          idEdit = e.target.dataset.id;

          flechaAtras.addEventListener('click', () => {
            // e.preventDefault();
            modal.style.display = 'none';
          });

          btnGuardar.addEventListener('click', () => {
            e.preventDefault();
            updateTask(
              idEdit,
              { description: inputPost.value },
            );
            modal.style.display = 'none';
          });
        });
      });
    });
  });
  // Publicar----------------------------------
  const description = taskForm.description;
  taskForm.addEventListener('submit', (e) => {
    // para no recargar la pag
    e.preventDefault();
    saveTask(description.value);
    taskForm.reset();
  });
};
