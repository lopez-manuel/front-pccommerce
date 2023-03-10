import { Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TvIcon from '@mui/icons-material/Tv';
import AlbumIcon from '@mui/icons-material/Album';
import SpeakerIcon from '@mui/icons-material/Speaker';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';



import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';



export const DrawerMenu = () => {

    const [open, setOpen] = useState(false);

    const openDrawer = () =>{
        setOpen(!open);
    }

    const list =
        <Box
            sx={{ width: 200 }}
            role='presentation'
            onClick={openDrawer}
            bgcolor='#6096B4'
            height='100vh'
            display='flex'
            justifyContent='center'
        >
            <List style={{color: 'white', textDecoration: 'none'}}>
                <ListItem>
                    <Typography textAlign='center' marginBottom={'24px'} variant='h6'>CATEGORIAS</Typography>
                </ListItem>

                <ListItem >
                            <ListItemIcon>
                                <DevicesOtherIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Accsesorios'/>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <ComputerIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Computadoras'/>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <AccountTreeIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Componentes'/>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <TvIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Monitores'/>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <AlbumIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Software'/>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <SpeakerIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Audio'/>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <VideogameAssetIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Consolas'/>
                        </ListItem>
            </List>

        </Box>


    return (
        <>
            <Button variant='' onClick={ openDrawer }>
                <MenuIcon/> Menu
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
