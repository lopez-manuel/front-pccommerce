import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';




export const PostCard = ({product} )   => {

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
			<Paper elevation={3} sx={{ padding: '10px' }}>
				<img
					width={'100%'}
					height={'200px'}
					src={product.imagenes[0]}
					alt=''
				/>
				<Typography variant='h6'>{product.titulo}</Typography>
				<p>{product.descripcion}</p>
				<p>${product.precio}</p>
				<Chip label={product?.categorias[0]?.nombre} variant='outlined' />
			</Paper>
		</Grid>
	);
};
