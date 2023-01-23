/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable import/no-unresolved */
// Test para SignUp
import {
  signup,
  auth,
  // app,
  login,
  googleLog,
  logout,
  // userState,
  // onAuthStateChanged,
  // user1,
} from '../src/app/auth.js';
import {
  // app,
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
  providerGoogle,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
} from '../src/app/config.js';

jest.mock('../src/app/config.js', () => {
  return {
      auth: jest.fn(() => ({ auth: 'test' })),
      createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
          if (!email || !password) {
              throw new Error('Error');
          }
          Promise.resolve({
              email1: 'sus',
          });
          //  Promise.reject({
          //   if (!email || !password) {throw new Error ('Error')},
          //  });
      }),
  }
});

describe('Tests para signup', () => {
  const email = 'petsbook@gmail.com';
  const passw = '1234567';
  it('Debería poder llamar a createUserWithEmailAndPassword', () => {
      signup(email, passw);
      // console.log(x);
      // console.log(createUserWithEmailAndPassword.mock);
      // Para ver si durante la ejecucion de signup se invocó el createUser..
      expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  it('Debería llamar a createUserWithEmailAndPassword con sus parametros', () => {
      signup(email, passw);
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, passw)
  });
  // it('Debería llamar al error si sus parametros están vacios', () => {
  //   // signup().then().catch((error) => {
  //   //   expect(error).toMatch('Error')
  //   // })
  //   signup();
  //   expect(new Error('Error')).toThrow('Error');
  // });
  it('signup debería ser una funcion', () => {
      expect(typeof signup).toBe('function')
  });
  it('Debería recibir el email', () => {
      signup(email, passw);
      expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('petsbook@gmail.com')
  });
  it('Debería recibir el password', () => {
      signup(email, passw);
      expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('1234567')
  })
});

jest.mock('../src/app/config.js', () => ({
  auth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  getAuth: jest.fn(),
  initializeApp: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  provider: jest.fn(),
  signInWithPopup: jest.fn(),
}));

describe('Debería poder iniciar sesión con un correo y una contraseña', () => {
  const email = 'atenea@gmail.com';
  const password = '123456';
  it('login debería ser una funcion', () => {
      expect(typeof login).toBe('function')
  });
  it('debería llamar a signInWhithEmailAndPassword', async () => {
      await login(email, password);
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
  it('debería llamar signInWithEmailAndPassword with arguments', async () => {
      await login(email, password);
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });
});

describe('Debería poder iniciar sesión con una cuenta de Google', () => {
  it('googleLog debería ser una funcion', () => {
      expect(typeof googleLog).toBe('function')
  });
  it('debería llamar a signInWhithPopup', async () => {
      await googleLog(auth, providerGoogle);
      expect(signInWithPopup).toHaveBeenCalled();
  });
  it('Debería llamar signInWhithPopup con auth y providerGoogle', async () => {
      await googleLog(auth, providerGoogle);
      expect(signInWithPopup).toHaveBeenCalledWith(auth, providerGoogle);
  });
});

describe('Debería poder salir de sesión', () => {
  it('logout debería ser una funcion', () => {
      expect(typeof logout).toBe('function')
  });
  it('debería llamar signOut', async () => {
      await logout(auth);
      expect(signOut).toHaveBeenCalled();
  });
  it('debería llamar a signOut', async () => {
      await logout(auth);
      expect(signOut).toHaveBeenCalledWith(auth);
  });
});
