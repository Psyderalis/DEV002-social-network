/* eslint-disable no-unused-vars */
import 'jest';
import loginM from '../src/app/__mocks__/signin.js';

import login from '../src/app/signin.js';

// describe('Testing login', () => {

//     test('Testing doASum ...', () => {
//         expect(typeof login).toEqual(15);
//     });
// });

describe('lista de notas', () => {
  it('Debería poder iniciar sesion', () => login('Anita', '123456')
    .then((user) => {
      expect(user.email).toBe('Anita');
    }));
});
