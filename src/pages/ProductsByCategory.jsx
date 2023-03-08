import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsByCategories } from '../api/calls/categorias/categorias';
import { PostCard } from '../components/PostCard';
import { AsideMenu } from '../components/AsideMenu';

export const ProductsByCategory = () => {

    const {id} = useParams();
    const [ products, setProducts ] = useState([]);
    const [aside, setAside] = useState();

    useEffect(() => {

        getProductsByCategories(id)
            .then( response => {
                setProducts(response.productos);
                console.log(response.productos);
            } )
            .catch(error => console.log(error));
    }, [id])


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


    if( products.length === 0){
        return <Grid>CARGANDO....</Grid>
    }
    

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
    )
}
