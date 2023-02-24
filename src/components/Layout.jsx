import React from 'react'
import { Grid } from '@mui/material'
import logo from '../assets/logo.png'
import { NavLink, Outlet } from 'react-router-dom'
import { Home } from '../pages/Home';
import Nav from './Nav';
import SearchBar from './SearchBar';

export const Layout = () => {
    return (
        <>
            <Grid  container bgcolor={"primary.main"} sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignContent:{xs: ''}, alignItems: {md:'center'} }}>
                <Grid item xs={12} md={4} lg={3}>
                    <NavLink to='/'>


                    <img width={ "300px"}  src={logo} alt="" />
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                    <SearchBar/>
                </Grid>
                <Grid item xs={12} md={2} lg={2}>
                    <Nav/>
                </Grid>
            </Grid>
            <Outlet/>
        </>
    )
}
