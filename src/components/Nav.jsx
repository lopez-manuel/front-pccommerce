import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link, NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import { DrawerMenu } from './DrawerMenu';


export default function Nav() {
const [anchorEl, setAnchorEl] = React.useState(null);
const [mobilMenu, setMobilMenu ] = React.useState(false);
const open = Boolean(anchorEl);
const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};

let px = window.screen.width
window.addEventListener('resize',()=>{
    if(window.screen.width < 400 ){
        setMobilMenu(true);
        return;
    }
    setMobilMenu(false);
}) 

React.useEffect(() => {
    if(window.screen.width < 400 ){
        setMobilMenu(true);
    }
}, [])



const pcMenu =  <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap:'14px', padding: '10px'}}>


<NavLink to="/" style={{textDecoration:'none', color: 'white'}}> Videojuegos </NavLink>
<NavLink to="/" style={{textDecoration:'none', color: 'white'}}> Tecnologia </NavLink>
<NavLink to="/" style={{textDecoration:'none', color: 'white'}}> Promociones </NavLink>
<NavLink to="/" style={{textDecoration:'none', color: 'white'}}> Vinos </NavLink>
<NavLink to="/" style={{textDecoration:'none', color: 'white'}}> Licores </NavLink>

</Grid>



return (
    <React.Fragment>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>

        { (mobilMenu) 
            ? <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap:'14px', padding: '10px'}}>

                <DrawerMenu/>

                </Grid>    
            : pcMenu }
        
        
        
        <Grid item xs={4} display='flex' flexDirection='row'>
            <IconButton>
                <Badge badgeContent={10} sx={{ fontSize: '10px'}} color="secondary">
                    <ShoppingCartOutlined fontSize='large' color='action'/>
                </Badge>
            </IconButton>
        
        <Tooltip title="Account settings">
        <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
        >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
        </Tooltip>
        </Grid>

        
    </Box>
    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
            },
            '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
            },
        },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
        <MenuItem onClick={handleClose}>
        <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <Settings fontSize="small" />
        </ListItemIcon>
        Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <Logout fontSize="small" />
        </ListItemIcon>
        Logout
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon>
            <HowToRegIcon fontSize="small" />
        </ListItemIcon>
        <Link to='/signup'style={{color:'black', textDecoration: 'none'}} >Sign up</Link>
        </MenuItem>
    </Menu>
    </React.Fragment>
);
}