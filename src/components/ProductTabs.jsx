import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

export const ProductTabs = ({producto}) => {

    const [ tabIndex, setTabIndex ] = useState("1");
    const [ element, setElement ] = useState();


    const productInfo = 
    <Grid container display='flex' flexDirection='column'>
        <p className='infop'>Marca: <span className='infospan'>{producto?.informacion?.marca}</span></p>
        <p className='infop'>Modelo: <span className='infospan'>{producto?.informacion?.modelo}</span></p>
        <p className='infop'>Fabricante: <span className='infospan'>{producto?.informacion?.fabricante}</span></p>
        <p className='infop'>Peso: <span className='infospan'>{producto?.informacion?.peso}</span></p>
    </Grid>

    const comentarios = 
    <Grid item xl={8} margin='0 auto'>
        {
            (producto?.comentarios.length > 0 ) 
            ? 'si hay' 
            : <Typography textAlign='center' variant='h6'>Aun no hay comentarios, se el primero en comentar!!</Typography>
        }
        <TextField
            id="filled-multiline-flexible"
            label="Deja un comentario"
            multiline
            rows={10}
            fullWidth  
            variant="filled"
            sx={{marginTop:'36px'}}
        />
        <Grid item margin='24px auto' xl={2}>
            <Button variant='contained'>
                Comentar
            </Button>
        </Grid>
    </Grid>

    const elements = () => {

        console.log(tabIndex);

        switch (tabIndex) {
            case "1":
                return <div dangerouslySetInnerHTML={{__html: producto?.descripcion}} />;
                break;
            
            case "2":
                return  productInfo;
                break;

            case "3":
                return comentarios;
        
            default:
                break;
        }
    }

    return (
        <>
            <Grid container margin='0 auto' display='flex' justifyContent='center'>
                <Grid item >
                    <ul className='tab' onClick={(e) => setTabIndex(e.target.getAttribute('index')) }>
                        <li className='tab-i' style={{ borderBottom: (tabIndex === "1") ? '2px solid red' : '' }} index={1}>Descripcion</li>
                        <li className='tab-i' style={{ borderBottom: (tabIndex === "2") ? '2px solid red' : '' }} index={2}>Informacion</li>
                        <li className='tab-i' style={{ borderBottom: (tabIndex === "3") ? '2px solid red' : '' }} index={3}>Comentarios</li>
                    </ul>
                    <Divider sx={{margin: '24px 0'}}/>
                    
                </Grid>
                <Grid item xs={12} margin='0 auto'>
                    { (elements())}
                </Grid>
            </Grid>
        </>
    )
}

export const Memorizada = React.memo(ProductTabs)
