import 'jest';
//var signInWithEmailAndPassword=jest.fn().mockReturnValue('20');


export const login= jest.mock('../singin', ()=>{
    return {user:
        {email: 'Anita',
        password: 123456
}}
})