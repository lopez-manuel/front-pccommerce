import { useEffect, useState } from 'react';
import { peticion } from '../api/calls/products/getProducts';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { PostCard } from '../components/PostCard';
import { AsideMenu } from '../components/AsideMenu';

export const Home = () => {
	const [products, setProducts] = useState([]);
	const [aside, setAside] = useState();

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


	
	window.addEventListener('resize',()=>{
		if(window.screen.width > 900 ){
			setAside(true);
			return;
		}
		setAside(false);
	}) 
	
	useEffect(() => {
		if(window.screen.width > 900 ){
			setAside(true);
		}
	}, [])


	if (products.length === 0) return <h1>Cargando</h1>;

	return (
		<>
			<Grid container marginTop='96px' className='maincontainer' >
				<Grid item xs={12} xl={12} margin={'0'} display='flex' flexDirection='row'>

					{ aside && <Grid item xs={12} xl={3} md={3} sx={{width: '240px', height:'100vh'}}>
						<AsideMenu/>
					</Grid>
					}
					
					<Grid margin={'0 auto'} item xl={8} xs={12} md={8}>

						<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4}}>
							{products.map( (product,i) => <PostCard key={i} product={product}/>)}
							
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
