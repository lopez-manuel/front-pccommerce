import { api } from '../../axios/instance';

export const peticion =  () => {
	return api
		.get('/productos')
		.then((response) =>{
            const {data} = response;
            return data;
        })
		.catch((error) => console.log(error));
};

export const getProductById = ( id ) => {

	return api.get(`/productos/${id}`)
				.then( response => response.data )
				.catch( error => {
					console.log(error);
					throw new Error('Ha ocurrido un error');
				})

}

export const newProduct = (data) => {

	return api
		.post('/productos', data)
		.then((response) => {
			return response;
		})
		.catch((error) => {
            const {response: {data:{errors}}} = error
			return errors;
		});
};
