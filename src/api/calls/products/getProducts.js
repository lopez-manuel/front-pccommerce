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

export const newProduct = (newPost) => {

	return api
		.post('/productos', newPost)
		.then((response) => {
			return response;
		})
		.catch((error) => {
            const {response: {data:{errors}}} = error
			return errors;
		});
};
