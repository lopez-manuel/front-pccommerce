import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';

export default function InputWithIcon() {
return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField id="input-with-sx" label="Buscar producto" color='secondary'  variant="filled" sx={{ margin:'0 auto', width: '90%'}} />
    </Box>
    </Box>
);
}