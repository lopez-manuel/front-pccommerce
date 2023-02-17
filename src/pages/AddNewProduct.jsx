import { Button, Grid, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { newProduct } from '../api/calls/products/getProducts';


export const AddNewProduct = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [images, setImages] = useState([]);
	const [imageURL, setImageURL] = useState('');
	const [categoria, setCategoria] = useState('');

	const handleClick = () => {
		setImages([...images, imageURL]);
		setImageURL('');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newPost = {
			titulo: title,
			descripcion: description,
			precio: price,
			imagenes: images,
			categorias: [categoria],
		};

		newProduct(newPost)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));

		console.log(newPost);
	};

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
								<TextField
									id='outlined-basic'
									label='Nombre del producto'
									variant='outlined'
									fullWidth
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
								<TextField
									id='outlined-multiline-static'
									label='Descripcion'
									margin='normal'
									multiline
									rows={20}
									fullWidth
									placeholder='Introduzca una descripcion para su producto'
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
								<TextField
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
											<li key={i}>
												<a target='_blank' href={image}>{`imagen ${index}`}</a>
												<Button>X</Button>
											</li>
										);
									})}
								</ul>
								<Grid>
									<InputLabel id='categories'>Categoria</InputLabel>
									<Select
										labelId='categories'
										id='categories-select'
										value={categoria}
										label='Categoria'
										fullWidth
										onChange={(e) => setCategoria(e.target.value)}
									>
										<MenuItem value={'Electronica'}>Electronica</MenuItem>
										<MenuItem value={'Hardware'}>Hardware</MenuItem>
										<MenuItem value={'Celulares'}>Celulares</MenuItem>
									</Select>
								</Grid>
								<Grid item margin='0 auto' sx={{ width: 'fit-content' }}>
									<Button
										sx={{ marginTop: '24px' }}
										variant='contained'
										type='submit'
									>
										Agregar producto
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
