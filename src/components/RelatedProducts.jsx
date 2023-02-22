import { Grid } from '@mui/material'
import React from 'react'

export const RelatedProducts = ({producto}) => {
    return (
        <Grid item width='320px' >
            < img width='200px' style={{margin:'0 60px'}} src={producto?.imagenes[0]} />
            <h5 style={{width:'200px', textAlign:'center', margin: ' 0 60px'}}>{producto?.titulo}</h5>
            <p style={{width:'200px', textAlign:'center', margin: ' 0 60px'}}>{` $ ${producto?.precio} MXN`}</p>
        </Grid>
    )
}
