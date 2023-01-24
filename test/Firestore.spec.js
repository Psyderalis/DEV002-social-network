/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable import/no-unresolved */
// Test para Firestore

import { saveTask, onGetTasks, deleteTask, getTask, updateTask, giveLike, disLike } from '../src/app/firestore.js';
import {
    conFirestore,
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    onSnapshot,
    arrayUnion,
    arrayRemove,
} from '../src/app/config.js';

jest.mock('../src/app/config.js', () => ({
    addDoc: jest.fn(),
    collection: jest.fn(),
    conFirestore: jest.fn(),
    onSnapshot: jest.fn(),
    deleteDoc: jest.fn(),
    getDoc: jest.fn(),
    doc: jest.fn(),
    updateDoc: jest.fn(),
    arrayUnion: jest.fn(),
    arrayRemove: jest.fn(),

}))

describe('Test para saveTask', () => {
    it('saveTask debería ser una funcion', () => {
        expect(typeof saveTask).toBe('function')
    });
    it('saveTask debería llamar a addDoc con sus parámetros', () => {
        saveTask('descripción de prueba');
        expect(addDoc).toHaveBeenCalledWith(
            collection(conFirestore, 'tasks'),
            { description: 'descripción de prueba', likes: [] },
        )
    })
});

describe('Test para onGetTasks', () => {
    it('onGetTasks debería ser una funcion', () => {
        expect(typeof onGetTasks).toBe('function')
    });
    it('onGetTasks debería llamar a onSnapshot con sus parámetros', () => {
        onGetTasks('callback');
        expect(onSnapshot).toHaveBeenCalledWith(collection(conFirestore, 'tasks'), 'callback')
    })
});

describe('Test para deleteTask', () => {
    it('deleteTask debería ser una funcion', () => {
        expect(typeof deleteTask).toBe('function')
    });
    it('deleteTask debería llamar a deleteDoc con sus parámetros', () => {
        deleteTask('id');
        expect(deleteDoc).toHaveBeenCalledWith(doc(conFirestore, 'tasks', 'id'))
    })
});

describe('Test para getTask', () => {
    it('getTask debería ser una funcion', () => {
        expect(typeof getTask).toBe('function')
    });
    it('getTask debería llamar a getDoc con sus parámetros', () => {
        getTask('id');
        expect(getDoc).toHaveBeenCalledWith(doc(conFirestore, 'tasks', 'id'))
    })
});

describe('Test para updateTask', () => {
    it('updateTask debería ser una funcion', () => {
        expect(typeof updateTask).toBe('function')
    });
    it('updateTask debería llamar a updateDoc con sus parámetros', () => {
        updateTask('id', 'post editado');
        expect(updateDoc).toHaveBeenCalledWith(doc(conFirestore, 'tasks', 'id'), 'post editado')
    })
});

describe('Test para giveLike', () => {
    it('giveLike debería ser una funcion', () => {
        expect(typeof giveLike).toBe('function')
    });
    it('giveLike debería llamar a updateDoc con sus parámetros y agregar un like a un post', () => {
        giveLike('id', 'user1');
        expect(updateDoc).toHaveBeenCalledWith(doc(conFirestore, 'tasks', 'id'), {
            likes: arrayUnion('user1'),
        })
    })
});

describe('Test para disLike', () => {
    it('disLike debería ser una funcion', () => {
        expect(typeof disLike).toBe('function')
    });
    it('disLike debería llamar a updateDoc con sus parámetros y remover un like a un post', () => {
        disLike('id', 'user1');
        expect(updateDoc).toHaveBeenCalledWith(doc(conFirestore, 'tasks', 'id'), {
            likes: arrayRemove('user1'),
        })
    })
});

// import {
//     saveTask,
//     onGetTasks,
//     deleteTask,
//     getTask,
//     updateTask,
//     giveLike,
//     disLike,
//     // deleteDoc,
//     // conFirestore,
//     // collection,
//     // addDoc,
//     // getDocs,
//     // doc,
//     // getDoc,
//     // updateDoc,
//     // onSnapshot,
//     // arrayUnion,
//     // arrayRemove,
// } from '../src/app/firestore.js';

// jest.mock('../src/app/firestore.js', () => {
//     return {
//         getFirestore: jest.fn(),
//         collection: jest.fn(),
//         addDocs: jest.fn(),
//         deleteDoc: jest.fn(),
//         getDocs: jest.fn(() => ({
//             data: jest.fn(() => [
//                 {
//                     description: 'Post de prueba',
//                     likes: [],
//                 },
//             ]),
//         })),
//         getDoc: jest.fn(),
//         updateDoc: jest.fn(),
//         doc: jest.fn(),
//         saveTask: jest.fn((description) => description),
//         onGetTasks: jest.fn(),
//         deleteTask: jest.fn((id) => [!id]),
//         getTask: jest.fn((id) => id),
//         updateTask: jest.fn((id, nuevosCampos) => {
//             return {
//                 id,
//                 nuevosCampos,
//             }
//         }),
//         giveLike: jest.fn((id, nuevoLike) => {
//             Promise.resolve({
//                 id,
//                 likes: nuevoLike,
//             })
//         }),
//         disLike: jest.fn((id, nuevoLike) => {
//             Promise.resolve({
//                 id,
//                 likes: !nuevoLike,
//             })
//         }),
//     }
// });

// describe('Test para saveTask function', () => {
//     it('saveTask debería ser una funcion', () => {
//         expect(typeof saveTask).toBe('function')
//     });
//     it('saveTask debería guardar un nuevo post', () => {
//         const comentario = 'Nuevo post';
//         // console.log(saveTask.mock)
//         // console.log(saveTask(comentario))
//         expect(saveTask(comentario)).toBe('Nuevo post')
//     });
// });

// describe('Test para onGetTasks function', () => {
//     it('onGetTasks debería ser una funcion', () => {
//         expect(typeof onGetTasks).toBe('function')
//     });
// });

// describe('Test para deleteTask function', () => {
//     it('deleteTask debería ser una funcion', () => {
//         expect(typeof deleteTask).toBe('function')
//     });
//     it('deleteTask debería eliminar un post', () => {
//         const id = 'Viejo post';
//         // console.log(saveTask.mock)
//         // console.log(saveTask(comentario))
//         expect(deleteTask(id)).toStrictEqual([false])
//     });
// });

// describe('Test para getTask function', () => {
//     it('getTask debería ser una funcion', () => {
//         expect(typeof getTask).toBe('function')
//     });
//     it('getTask debería traer un post', () => {
//         const id = 'post de prueba'
//         expect(getTask(id)).toBe('post de prueba')
//     });
// });

// describe('Test para updateTask function', () => {
//     it('updateTask debería ser una funcion', () => {
//         expect(typeof updateTask).toBe('function')
//     });
//     it('getTask actualizar un post', () => {
//         const id = 'post de prueba'
//         const nuevosCampos = 'post editado'
//         expect(updateTask(id, nuevosCampos)).toStrictEqual(
//             {
//                 id: 'post de prueba',
//                 nuevosCampos: 'post editado',
//             },
//         )
//     });
// });

// describe('Test para giveLike function', () => {
//     it('giveLike debería ser una funcion', () => {
//         expect(typeof giveLike).toBe('function')
//     });
//     it('giveLike debería incluir un nuevo like', () => {
//         const id = 'post'
//         const nuevoLike = 'user id'
//         expect(giveLike(id, nuevoLike)).toStrictEqual({
//             id: 'post',
//             likes: 'post',
//         })
//     });
//     // it('Debería llamar a updateDoc', () => {
//     //     giveLike();
//     //     expect(updateDoc).toHaveBeenCalled();
//     // })
// });

// describe('Test para disLike function', () => {
//     it('disLike debería ser una funcion', () => {
//         expect(typeof disLike).toBe('function')
//     });
//     it('giveLike no debería incluir el viejo like', () => {
//         const id = 'post'
//         const viejoLike = 'user id'
//         expect(giveLike(id, viejoLike)).toStrictEqual({
//             id: 'post',
//             likes: false,
//         })
//     });
//     // it('Debería llamar a updateDoc', () => {
//     //     disLike();
//     //     expect(updateDoc).toHaveBeenCalled();
//     // })
// });

// describe('Tests para signup', () => {
//     const email = 'petsbook@gmail.com';
//     const passw = '1234567';
//     it('Debería poder llamar a createUserWithEmailAndPassword', () => {
//         signup(email, passw);
//         // console.log(x);
//         // console.log(createUserWithEmailAndPassword.mock);
//         // Para ver si durante la ejecucion de signup se invocó el createUser..
//         expect(createUserWithEmailAndPassword).toHaveBeenCalled();
//     });
//     it('Debería llamar a createUserWithEmailAndPassword con sus parametros', () => {
//         signup(email, passw);
//         expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, passw)
//     });
//     // it('Debería llamar al error si sus parametros están vacios', () => {
//     //   // signup().then().catch((error) => {
//     //   //   expect(error).toMatch('Error')
//     //   // })
//     //   signup();
//     //   expect(new Error('Error')).toThrow('Error');
//     // });
//     it('signup debería ser una funcion', () => {
//         expect(typeof signup).toBe('function')
//     });
//     it('Debería recibir el email', () => {
//         signup(email, passw);
//         expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('petsbook@gmail.com')
//     });
//     it('Debería recibir el password', () => {
//         signup(email, passw);
//         expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('1234567')
//     })
// });
