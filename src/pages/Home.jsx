import { useEffect, useState } from 'react';
import { peticion } from '../api/calls/products/getProducts';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { PostCard } from '../components/PostCard';

export const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		peticion()
			.then((response) => {
				const { productos } = response;
				console.log(productos);
				setProducts(productos);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	if (products.length === 0) return <h1>Cargando</h1>;

	return (
		<>
			<h1>HOME</h1>

			<Grid container margin={0} display='flex' flexDirection='row'>
				<Grid item xs={12} md={2} sx={{width: '240px', height:'100vh'}}>
					hola
				</Grid>
				<Grid container xs={12} md={10} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                    {products.map( (product,i) => <PostCard key={i} product={product}/>)}
                    
				</Grid>
			</Grid>
		</>
	);
};
