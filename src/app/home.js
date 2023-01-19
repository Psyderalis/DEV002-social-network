/* eslint-disable no-param-reassign */
import {
    deleteTask, getTask, onGetTasks, saveTask, updateTask,
} from './firestore.js';

import { templatePost } from '../Templates/templatePost.js';
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
                let aidi = doc.data().id;
                let descrip = task.description;
                console.log(userName);
                divContain += templatePost(userName, aidi, descrip);
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
    return
};
