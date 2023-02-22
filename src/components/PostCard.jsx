import Paper from '@mui/material/Paper';
import { Button, Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { NavLink, useNavigate } from 'react-router-dom';




export const PostCard = ({product} )   => {

	const navigate = useNavigate();

	const handleNavigate = () => {

		navigate(`/${product?.categorias[0]?.nombre}/${product._id}`);


	}

	return (
		<Grid
			item
			// xs={'auto'}
			// md={'auto'}
			margin={{ xs: 'auto', md: '0' }}
            // sx={{marginBottom: '35px',width:'320px'}}
			xs={11}
			md={6}
			sm={6}
			lg={4}
			xl={3}
		>
			<NavLink to={`/${product._id}`}>

			</NavLink>
			<Paper elevation={3} sx={{ padding: '10px', height: '650px' }}>
				<div style={{width: 'fit-content', margin:'0 auto'}}>
				<img
					maxWidth={'100%'}
					height={'200px'}
					src={product.imagenes[0]}
					alt=''
				/>
				</div>
				<Typography  className='title-card' variant='h6'>{product.titulo}</Typography>
				<p style={{height: '198px'}} className='text-card'>{product.descripcion}</p>
				<p>${product.precio} MXN</p>
				<Chip label={product?.categorias[0]?.nombre} variant='outlined' />
				<Grid item marginTop={'8px'}>
					<Button variant='contained' fullWidth onClick={ handleNavigate }>
						Ver producto
					</Button>
				</Grid>
			</Paper>
		</Grid>
	);
};
