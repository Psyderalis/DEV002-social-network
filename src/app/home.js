/* eslint-disable no-param-reassign */
import {
    deleteTask, getTask, onGetTasks, saveTask, updateTask,
} from './firestore.js';

// import { templatePost } from '../Templates/templatePost.js';
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
                let userName = doc.data().userName;
                // let aidi = doc.data().id;
                // let descrip = task.description;
                console.log(userName);
                divContain += `
                <section class="post">
                <div class="cabezaDePost">
                <img class="fotoDePerfil" src="imagenes/pug.jpg" alt='foto del usuario'>
                <p class="nombreDeUsuario">${userName}</p>
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
                <img src="imagenes/huella.png" width=30px>
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

            const btnEliminar = taskContainer.querySelectorAll('.delete');
            console.log(btnEliminar)

            const test1 = document.querySelector('.contentmodal');

            btnEliminar.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    console.log(e.target.dataset.id)
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
                     `

                    deleteModalContenedor.innerHTML = prueba;
                    test1.appendChild(deleteModalContenedor);

                    const boton = deleteModalContenedor.querySelector('.borrarBtn')
                    console.log(boton)
                    const equisSalir = deleteModalContenedor.querySelector('.equisSalir');
                    // const contenedorModalDelete = deleteModalContenedor.querySelector('.delete-Modal-Contenedor')
                    // console.log(contenedorModalDelete)
                    const deleteModal = deleteModalContenedor.querySelector('.delete-Modal');

                    boton.addEventListener('click', async (e) => {

                        console.log('boton eliminar')
                        console.log(e.target.dataset.id)

                        await deleteTask(e.target.dataset.id).then((res) => {
                            deleteModalContenedor.style.display='none';
                            deleteModal.style.display = 'none'
                        }).catch((err) => console.log(err));
                    });



                    test1.style.display = 'flex';
                    deleteModalContenedor.style.display = 'flex';
                    deleteModal.style.display = 'flex';

                    console.log(equisSalir)
                    equisSalir.addEventListener('click', () => {
                        test1.style.display = 'none';
                        deleteModalContenedor.style.display = 'none';
                        deleteModal.style.display = 'none';
                    });
                    return
                });
            });

            // btnEliminar.addEventListener('click', (e) => {
            //     e.preventDefault()
            //     test1.style.display = 'flex';
            //     deleteModalContenedor.style.display = 'flex';
            //     deleteModal.style.display = 'flex';
            // })

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
    return
};
