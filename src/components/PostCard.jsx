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
            sx={{marginBottom: '35px',width:'320px'}}
		>
			<Paper elevation={3} sx={{ padding: '10px' }}>
				<img
					width={'300px'}
					height={'200px'}
					src={product.imagenes[0]}
					alt=''
				/>
				<Typography variant='h6'>{product.titulo}</Typography>
				<p>{product.descripcion}</p>
				<p>${product.precio}</p>
				<Chip label={product.categorias[0]} variant='outlined' />
			</Paper>
		</Grid>
	);
};
