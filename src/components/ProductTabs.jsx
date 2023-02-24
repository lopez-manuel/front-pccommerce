import { Divider, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'

export const ProductTabs = ({descripcion}) => {

    const [ tabIndex, setTabIndex ] = useState("1");
    const [ element, setElement ] = useState();

    const elements = () => {

        console.log(tabIndex);

        switch (tabIndex) {
            case "1":
                return <div dangerouslySetInnerHTML={{__html: descripcion}} />;
                break;
        
            default:
                break;
        }
    }

    return (
        <>
            <Grid container margin='0 auto' display='flex' justifyContent='center'>
                <Grid item sx={12} >
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
