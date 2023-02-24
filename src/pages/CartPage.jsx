import { Button, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {

    const navigate = useNavigate();

    const [ cart, setCart ] = useState(JSON.parse(localStorage.getItem("MexstoreCart")) || []);


    if(cart.length === 0){
        return <h1>CARRITO VACIO</h1>
    }

    const productContainer = (producto) =>{
        return (
            <Grid margin='0 auto' marginBottom='50px' borderBottom='1px solid black' padding='16px' item xs={12} sm={10} md={12} lg={8} xl={4}  display='flex' flexDirection='column' alignItems='center' sx={{flexDirection: {xs: 'column',md:'row'} }}>
                <Grid xs={12} md={7} lg={5} margin='0 auto' item display='flex' flexDirection='row' gap='20px' sx={{cursor: 'pointer'}} onClick={ () => handleNavigate(producto)} >
                    <img width='70px' src={producto.imagenes[0]} alt="" />
                    <Typography variant='p'>{producto.titulo}</Typography>
                </Grid>
                <Grid xs={12} md={3} lg={4} margin='24px auto' display='flex' item gap='24px'>
                    <Typography variant='p'>Cantidad: {producto.cantidad}</Typography>
                    <Typography variant='p'>Total: {currencyFormat(producto.precio * producto.cantidad)}</Typography>
                    
                </Grid>
                <Grid item xs={12} md={2}>

                <Button fullWidth variant='contained' color='error' onClick={ () => handleDelete(producto)}>
                        Eliminar
                </Button>
                </Grid>

            </Grid>
        )
        
    }

    const handleDelete = ( producto ) =>{

        const newCart = cart.filter( product => product._id != producto._id );

        localStorage.setItem("MexstoreCart", JSON.stringify(newCart));

        setCart(newCart);

    }

    const handleNavigate = (producto) => {

        console.log('click');

        navigate(`/${producto.categorias[0]}/${producto._id}`);


    }

    const total = () => {

        let total = 0;

        cart.forEach( item => {
            total = total + (item.precio * item.cantidad);
        })

        return total;

    }

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    return (
        <>
            <Grid container marginTop='50px' display='flex' flexDirection='column'>
                {
                    cart.map( producto => {
                        return productContainer(producto);
                    })
                }

                <Grid item xs={12} margin='54px auto' border='1px solid' padding='25px 100px'>
                    <Typography variant='h6' marginBottom='24px'>Total: { currencyFormat(total())} MXN</Typography>
                    <Button variant='contained' fullWidth>
                        Ir a pagar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
