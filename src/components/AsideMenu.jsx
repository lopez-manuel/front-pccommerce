import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TvIcon from '@mui/icons-material/Tv';
import AlbumIcon from '@mui/icons-material/Album';
import SpeakerIcon from '@mui/icons-material/Speaker';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import React from 'react'

export const AsideMenu = () => {
    return (
        <Grid container>
            <Grid item xs={10} margin='0 auto'>
                <Paper elevation={3} sx={{height: '100vh', backgroundColor: 'secondary.main'}}>

                    <Typography variant='h6' textAlign='center' sx={{padding: '24px', fontWeight: 'bold'}}>Categorias</Typography>

                    <List>
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
                </Paper>
            </Grid>
        </Grid>
    )
}
