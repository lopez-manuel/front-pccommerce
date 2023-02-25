import { Button, Grid, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { newProduct } from '../api/calls/products/getProducts';
import { getCategorias } from '../api/calls/categorias/categorias';
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'


export const AddNewProduct = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [images, setImages] = useState([]);
	const [imageURL, setImageURL] = useState('');
	const [categoria, setCategoria] = useState('');
	const [categorias, setCategorias] = useState([]);
	const [currentStep, setCurrentStep] = useState(1);
	const [marca, setMarca] = useState("");
	const [modelo, setModelo] = useState("");
	const [fabricante, setFabricante] = useState("");
	const [peso, setPeso] = useState("");

	const { quill, quillRef } = useQuill();

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


		if( currentStep === 6 ){

			const newPost = {
				titulo: title,
				descripcion: quill.root.innerHTML,
				precio: price,
				imagenes: images,
				categorias: [{
					_id: categoria
				}],
				informacion: {
					marca,
					modelo,
					fabricante,
					peso
				}
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
			component: ""
			
		},
		{
			step: 3,
			component: 
			<Grid item display={'flex'} flexDirection='column' gap={'24px'}>
				<Typography variant='h6'>Informacion del producto</Typography>
				<TextField
					id='outlined-basic'
					label='Marca'
					variant='outlined'
					fullWidth
					value={marca}
					onChange={(e) => setMarca(e.target.value)}
					key={'marca'}
				/>
				<TextField
					id='outlined-basic'
					label='Modelo'
					variant='outlined'
					fullWidth
					value={modelo}
					onChange={(e) => setModelo(e.target.value)}
					key={'modelo'}
				/>
				<TextField
					id='outlined-basic'
					label='Fabricante'
					variant='outlined'
					fullWidth
					value={fabricante}
					onChange={(e) => setFabricante(e.target.value)}
					key={'fabricante'}
				/>
				<TextField
					id='outlined-basic'
					label='Peso'
					variant='outlined'
					fullWidth
					value={peso}
					onChange={(e) => setPeso(e.target.value)}
					key={'peso'}
				/>
			</Grid>
		},
		{
			step: 4,
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
			step: 5,
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
			step: 6,
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

	useEffect(() => {
		if (quill) {
		  quill.on('text-change', (delta, oldDelta, source) => {
			console.log('Text change!');
			console.log(quill.getText()); // Get text only
			console.log(quill.getContents()); // Get delta contents
			console.log(quill.root.innerHTML); // Get innerHTML using quill
			console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
		  });
		}
	  }, [quill]);

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

								<Grid item  marginBottom='24px'>
								<div style={{ width: '100%', height: 300, display: (currentStep === 2) ? 'block' : 'none' }}>
									<div ref={quillRef} />
								</div>
								</Grid>
								

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
										{ (currentStep === 6) ? 'Agregar Producto' : 'Siguiente'}
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
