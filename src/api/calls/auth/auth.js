
import { api } from "../../axios/instance"




export const apiLogin = async ( data ) => {


    return api.post('/auth/login', data )
        .then( response => response.data)
        .catch( error => {
            const { response: {data} } = error
            throw new Error(data.message)
        })

}
