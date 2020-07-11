import React from 'react'
import {AppBar, Toolbar, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';

const TopBar = () =>(

<AppBar position="static">
    <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' } }>            
        <IconButton>
            <img alt="logoInventory"src="../InventoryIcon.ico" />                
            <h3 >Inventory</h3>
        </IconButton>            
         </Link>        
    </Toolbar>
</AppBar>      
)
export default TopBar;
