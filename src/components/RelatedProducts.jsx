import { Grid } from '@mui/material'
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const RelatedProducts = ({producto}) => {

    const navigate = useNavigate();
    const location = useLocation();


    const handleNavigate = () => {
        navigate(`/${producto?.categorias[0]?.nombre}/${producto._id}`);
        window.location.reload();
    }

    return (
        <Grid item width='320px' sx={{cursor: 'pointer'}} onClick={handleNavigate}>
            < img width='200px' height='200px' style={{margin:'0 60px'}} src={producto?.imagenes[0]} />
            <h5 style={{width:'200px', textAlign:'center', margin: ' 0 60px'}}>{producto?.titulo}</h5>
            <p style={{width:'200px', textAlign:'center', margin: ' 0 60px'}}>{` $ ${producto?.precio} MXN`}</p>
        </Grid>
    )
}
