import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";


export const theme = createTheme({
    palette:{
        primary: {
            main: '#6096B4',
            light: '#93BFCF',
            contrastText: 'white'
        },
        secondary: {
            main: '#BDCDD6',
            light: 'EEE9DA'
        }
    },
    status: {
        danger: orange[500],
        succses: green[500]
    },
    typography: {
        fontFamily: [ 'Roboto', 'sans-serif' ].join(',') ,
    },
});