import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TvIcon from '@mui/icons-material/Tv';
import AlbumIcon from '@mui/icons-material/Album';
import SpeakerIcon from '@mui/icons-material/Speaker';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import React from 'react'
import { NavLink } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none', 
    color: 'black'
}

export const AsideMenu = () => {
    return (
        <Grid container>
            <Grid item xs={10} margin='0 auto'>
                <Paper elevation={3} sx={{height: '100vh', backgroundColor: 'secondary.main'}}>

                    <Typography variant='h6' textAlign='center' sx={{padding: '24px', fontWeight: 'bold'}}>Categorias</Typography>

                    <List>
                        <ListItem >
                            <ListItemIcon >
                                <DevicesOtherIcon/>
                            </ListItemIcon>
                            <NavLink style={linkStyle} to='/categoria/63f42b2c4372c7e5c5166be8'>
                                <ListItemText primary='Accsesorios'/>
                            </NavLink>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <ComputerIcon/>
                            </ListItemIcon>
                            <NavLink style={linkStyle} to='/categoria/63f42b384372c7e5c5166bea'>
                                <ListItemText primary='Computadoras'/>
                            </NavLink>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <AccountTreeIcon/>
                            </ListItemIcon>
                            <NavLink style={linkStyle} to='/categoria/63f42b424372c7e5c5166bec'>
                            <ListItemText primary='Componentes'/>
                            </NavLink>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <TvIcon/>
                            </ListItemIcon>
                            <NavLink style={linkStyle} to='/categoria/63f42b524372c7e5c5166bee'>
                                <ListItemText primary='Monitores'/>
                            </NavLink>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <AlbumIcon/>
                            </ListItemIcon>
                            <NavLink style={linkStyle} to='/categoria/63f42b5e4372c7e5c5166bf0'>
                                <ListItemText primary='Software'/>
                            </NavLink>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <SpeakerIcon/>
                            </ListItemIcon>
                            <NavLink style={linkStyle} to='/categoria/63f42b654372c7e5c5166bf2'>
                                <ListItemText primary='Audio'/>
                            </NavLink>
                        </ListItem>

                        <ListItem >
                            <ListItemIcon>
                                <VideogameAssetIcon/>
                            </ListItemIcon>
                            <NavLink style={linkStyle} to='/categoria/63f42b6e4372c7e5c5166bf4'>
                                <ListItemText primary='Consolas'/>
                            </NavLink>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    )
}
