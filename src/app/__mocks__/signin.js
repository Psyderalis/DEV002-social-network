import 'jest';
// var signInWithEmailAndPassword=jest.fn().mockReturnValue('20');

export const loginM = jest.mock('../signin.js', () => ({
  user:
    {
      email: 'Anita',
      password: 123456,
    },
}));
