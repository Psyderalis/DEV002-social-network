// Test para SignUp
import { signup } from '../src/app/signupForm.js';
import { auth, createUserWithEmailAndPassword } from '../src/app/firebase.js';

jest.mock('../src/app/firebase.js', () => {
  return {
    auth: jest.fn(() => ({ auth: 'test' })),
    createUserWithEmailAndPassword: jest.fn((auth, email, password) => {
      if (!email || !password) {
        throw new Error('Error');
      }
      Promise.resolve({
       email1: 'sus',
       });
  })}
});

describe('Tests para signup', () => {
  const email = 'petsbook@gmail.com';
  const passw = '1234567';
  it('Llamar createUserWithEmailAndPassword', async () => {
    await signup(email, passw);
    // console.log(x);
    // console.log(createUserWithEmailAndPassword.mock);
    // Para ver si durante la ejecucion de signup se invocó el createUser..
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  it('Llamar createUserWithEmailAndPassword con sus parametros', async () => {
    await signup(email, passw);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, passw)
  });
  it('Llamar el error si sus parametros están vacios', async () => {
    try {
      await signup()
    } catch (error) {
      expect(error).toMatch('Error')
    }
  });
  it('signup debería ser una funcion', () => {
    expect(typeof signup).toBe('function')
  });
  it('Ver el email', async () => {
    await signup(email, passw);
    expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('petsbook@gmail.com')
  });
  it('Ver el password', async () => {
    await signup(email, passw);
    expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('1234567')
  })
});
