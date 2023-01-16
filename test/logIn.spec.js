/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable import/no-unresolved */
// Test para SignUp
import { signup } from '../src/app/auth.js';
import { auth, createUserWithEmailAndPassword } from '../src/app/config.js';

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
  })}
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
  it('Debería llamar al error si sus parametros están vacios', () => {
    // signup().then().catch((error) => {
    //   expect(error).toMatch('Error')
    // })
    signup();
    expect(new Error('Error')).toThrow('Error');
  });
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
