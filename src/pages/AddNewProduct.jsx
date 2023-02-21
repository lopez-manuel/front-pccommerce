import { Button, Grid, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { newProduct } from '../api/calls/products/getProducts';
import { getCategorias } from '../api/calls/categorias/categorias';

export const AddNewProduct = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [images, setImages] = useState([]);
	const [imageURL, setImageURL] = useState('');
	const [categoria, setCategoria] = useState('');
	const [categorias, setCategorias] = useState([]);
	const [currentStep, setCurrentStep] = useState(1);

useEffect(() => {
	getCategorias()
		.then( response => setCategorias(response?.categorias) )
		.catch( error => console.log( error.message))
}, [])


	const handleClick = () => {
		setImages([...images, imageURL]);
		setImageURL('');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();


		if( currentStep === 5 ){

			const newPost = {
				titulo: title,
				descripcion: description,
				precio: price,
				imagenes: images,
				categorias: [{
					_id: categoria
				}],
			};

			newProduct(newPost)
				.then((response) => console.log(response))
				.catch((error) => console.log(error));

			console.log(newPost);
		}

		else {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleDeleteImage = ( image ) => {

		const a = images.filter( img => {
			if( img !== image){
				return img;
			}
		})

		setImages(a)

		console.log(a);
	}


	const steps = [
		{
			step: 1,
			component: <TextField
							id='outlined-basic'
							label='Nombre del producto'
							variant='outlined'
							fullWidth
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							key={'Nombredelproducto'}
						/>
		},
		{
			step: 2,
			component: <TextField
							id='outlined-multiline-static'
							label='Descripcion'
							margin='normal'
							multiline
							rows={20}
							fullWidth
							placeholder='Introduzca una descripcion para su producto'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							key={'Descripcion'}
						/>
		},
		{
			step: 3,
			component: <TextField
							margin='normal'
							fullWidth
							id='outlined-number'
							label='Precio'
							type='number'
							InputLabelProps={{
								shrink: true,
							}}
							value={price}
							onChange={(e) => setPrice(Number(e.target.value))}
						/>
		},
		{
			step: 4,
			component: <>
				<Grid>
					<TextField
					value={imageURL}
					onChange={(e) => setImageURL(e.target.value)}
					id='outlined-basic'
					label='Imagen URL'
					variant='outlined'
					fullWidth
					/>
					<button onClick={handleClick} type='button' title='button'>
					Cargar
					</button>
				</Grid>
				<ul>
					{images.map((image, i) => {
						const index = i + 1;
						return (
							<li key={i} style={{listStyle: 'none'}}>
								<img src={image} style={{width: '120px',}} />
								<Button onClick={()=> handleDeleteImage(image)}>X</Button>
							</li>
						);
					})}
				</ul>
			</>
		},
		{
			step: 5,
			component:<Grid>
						<InputLabel id='categories'>Categoria</InputLabel>
							<Select
											labelId='categories'
											id='categories-select'
											value={categoria}
											label='Categoria'
											fullWidth
											onChange={(e) => setCategoria(e.target.value)}
							>
											{ categorias.map( categoria => {
												return <MenuItem value={categoria?._id} key={categoria?._id}>{categoria?.nombre}</MenuItem>
											})}
							</Select>
						</Grid>
		}
	]

	const handlePreviousStep = () => {

		if(currentStep > 1){
			setCurrentStep( currentStep - 1);
		}

	}

	return (
		<>
			<Grid container>
				<Grid item xs={12}>
					<Typography
						maxWidth={'300px'}
						textAlign='center'
						margin='0 auto'
						variant='h6'
					>
						Realizar una nueva publicacion
					</Typography>
					<Grid container margin={'24px 0'}>
						<Grid item xs={10} lg={4} margin={{ xs: '0 auto' }}>
							<form onSubmit={handleSubmit}>

								{steps.map( step => {
									if(step.step === currentStep ){
										return step.component;
									}
								})}

								<Grid item margin='0 auto' sx={{ width: 'fit-content', display: 'flex',  gap:'32px'}}>
								<Button  
										sx={{ marginTop: '24px' }}
										variant='contained'
										type='button'
										onClick={ handlePreviousStep}
										disabled={(currentStep === 1)}
									>
										Anterior
									</Button>
									<Button
										sx={{ marginTop: '24px' }}
										variant='contained'
										type='submit'
									>
										{ (currentStep === 5) ? 'Agregar Producto' : 'Siguiente'}
									</Button>
								</Grid>
							</form>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
