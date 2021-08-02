import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ProductsBtn from "./ProductsBtn";
import './css/NavbarMaterial.css'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor:'#303030'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        The Leather Shop
                    </Typography>
                    <div className='nav-btns'>
                        <div className='btn'><Button color="inherit">Home</Button></div>
                        <div className='btn'><Button color="inherit">About</Button></div>
                        <div className='btn'><ProductsBtn/></div>
                        <div className='btn'><Button color="inherit">Contact Us</Button></div>

                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}