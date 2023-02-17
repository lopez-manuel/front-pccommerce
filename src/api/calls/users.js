import { api } from '../axios/instance'



export const apiNewUser = async ( data ) => {

    return api.post('/usuarios', data ).then( response => console.log(response)).catch( error => console.log(error))



}