import { api } from '../axios/instance'



export const apiNewUser = async ( data ) => {

    return api.post('/usuarios', data ).then( response => response.data).catch( error => {

        const { response: { data: {errors} } } = error;

        throw new Error(errors[0].msg);
    } )



}