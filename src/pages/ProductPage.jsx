import { Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, peticion } from '../api/calls/products/getProducts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ProductTabs } from '../components/ProductTabs';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { RelatedProducts } from '../components/RelatedProducts';

export const ProductPage = () => {

    const [ product, setProduct ] = useState();
    const [ productos, setProductos ] = useState([]);
    const [ image, setImage ] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();

    

    useEffect(() => {
        getProductById( id )
            .then( response => {
                setProduct(response.producto);
                console.log(response.producto);
                console.log(product);
            })
            .catch( error => navigate('/',{ replace: true}));

        peticion()
            .then( response =>{
                setProductos(response?.productos)
            })
            .catch( error => console.log(error))
    }, [])
    

    const handleLeft = (e) =>{
        e.stopPropagation();
        const divImages = e.target?.parentElement?.nextElementSibling;
        console.log('');
        divImages?.scrollBy(320,0)
    }


    return (
        <>
            <Grid container marginTop='54px'>
                <Grid item xs={12} xl={6} margin='0 auto' border=''>
                    <Grid container>
                        <Grid item xs={12} md={6} xl={6} display='flex' flexDirection='row'>
                            <Grid item xs={3} sm={2} md={2}    lg={1} xl={2} margin='0 auto' display='flex' flexDirection='column' gap='8px'>
                            { product?.imagenes.map( (image, i) => {
                                return <img onMouseEnter={() => setImage(image)} className='img-page' key={i} src={image} />
                            })}
                            </Grid>
                                
                            <Grid item xs={9} sm={6} md={7} lg={4} xl={6} border='1px solid gray' padding='24px' margin='0 auto'>
                            <img width='100%' src={( image ) ? image : product?.imagenes[0]} alt="" />
                            </Grid>
                        </Grid>
                        <Grid item md={5} xl={5} margin='24px'>
                            <Typography variant='h4'>{product?.titulo}</Typography>
                            <p>{`$ ${product?.precio} MXN`}</p>
                            <p>Vendidor por: Manuel</p>
                            <Button variant='contained'>
                                <AddShoppingCartIcon/>
                                Agregar al carrito
                            </Button>
                        </Grid>
                        <Grid xs={12} item margin='24px'>
                            <Divider />
                            <br/>
                            <ProductTabs descripcion={product?.descripcion}/>
                            
                        </Grid>
                        <Grid item sx={12} margin={'0 auto'}>
                            {/* <img width='100%' src='https://discosdurosymas.net/productos3/MOU-XZMX920B/MOU-XZMX920B.jpg' /> */}
                        </Grid>
                    </Grid>
                    <Grid item  position='relative' margin='100px 0'>

                        <Typography textAlign='center' variant='h5'>Productos relacionados</Typography>

                            <ChevronLeftIcon onClick={handleLeft}  sx={{fontSize: '80px', top: 60, left: 0, zIndex: '3', position:'absolute', cursor:'pointer'}} color='blue'/>
                        <Grid item className='related' width='100%' display='flex'  >
                            
                            {productos.map( producto => {
                                return <RelatedProducts producto={producto}/>
                            })}

                        </Grid>

                        <ChevronRightIcon onClick={(e) => e.target?.previousElementSibling?.scrollBy(-320,0)} sx={{fontSize: '80px', position: 'absolute', top: 60, right: 0, zIndex: '3'}} color='blue'/>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}
