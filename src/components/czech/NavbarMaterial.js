import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProductsBtn from "./ProductsBtn";
import LanguageBtn from './LanguageBtn'
import Drawer from './Drawer'
import logo from '../../assets/logo.png'
import './css/NavbarMaterial.css'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor:'#303030'}}>
                <Toolbar>
                    <div className='drawer'> <Drawer/> </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <div className='logo'><img src={logo} alt='The Leather'></img></div>
                    </Typography>
                    <div className='nav-btns'>
                        <div className='btn'><Button color="inherit">Domov</Button></div>
                        <div className='btn'><Button color="inherit">Okolo</Button></div>
                        <div className='btn'><ProductsBtn/></div>
                        <div className='btn'><Button color="inherit">Kontaktujte nás</Button></div>
                        <div className='btn'><LanguageBtn/></div>
                    </div>
                    <div className='sp-btn'><LanguageBtn/></div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}