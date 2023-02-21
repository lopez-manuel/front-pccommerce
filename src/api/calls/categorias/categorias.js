import { api } from '../../axios/instance';


export const getCategorias = () => {

    return api
        .get('/categorias')
        .then( response => response.data )
        .catch( error => {
            console.log(error);
            throw new Error('Algo salio mal');
        })

}

