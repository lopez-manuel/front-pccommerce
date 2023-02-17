import { Box, Button, Drawer, List, ListItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';



export const DrawerMenu = () => {

    const [open, setOpen] = useState(false);

    const openDrawer = () =>{
        setOpen(!open);
    }

    const list =
        <Box
            sx={{ width: 150 }}
            role='presentation'
            onClick={openDrawer}
            bgcolor='#6096B4'
            height='100vh'
            display='flex'
            justifyContent='center'
        >
            <List style={{color: 'white', textDecoration: 'none'}}>
                <ListItem>
                    CATEGORIAS
                </ListItem>
                <ListItem>
                    <Link to='/signup' style={{color: 'white', textDecoration: 'none'}}>Accesorios</Link>
                </ListItem>
                <ListItem>
                    <Link to='/signup' style={{color: 'white', textDecoration: 'none'}}>Computadoras</Link>
                </ListItem>
                <ListItem>
                    <Link to='/signup' style={{color: 'white', textDecoration: 'none'}}>Componentes</Link>
                </ListItem>
                <ListItem>
                    <Link to='/signup' style={{color: 'white', textDecoration: 'none'}}>Monitores</Link>
                </ListItem>
                <ListItem>
                    <Link to='/signup' style={{color: 'white', textDecoration: 'none'}}>Software</Link>
                </ListItem>
                <ListItem>
                    <Link to='/signup' style={{color: 'white', textDecoration: 'none'}}>Audio</Link>
                </ListItem>
                <ListItem>
                    <Link to='/signup' style={{color: 'white', textDecoration: 'none'}}>Consolas</Link>
                </ListItem>
            </List>

        </Box>


    return (
        <>
            <Button variant='' onClick={ openDrawer }>
                <MenuIcon/>
            </Button>
            <Drawer
                open={open}
                onClose={openDrawer}
                anchor='left'
                
                >
                {list}
            </Drawer>

        </>
    )
}
